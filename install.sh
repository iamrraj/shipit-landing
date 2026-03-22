#!/usr/bin/env bash
# ============================================================
#  ShipIt — Remote Installer
# ============================================================
#  One-line install:
#    curl -fsSL https://shipiit.com/install.sh | bash
#
#  What it does:
#    1. Detects OS and architecture
#    2. Downloads the latest release archive
#    3. Extracts to a temp directory
#    4. Runs the bundled install.sh
#    5. Cleans up
#
#  Options (via env vars):
#    SHIPIT_VERSION=1.2.3   — install a specific version
#    SHIPIT_DIR=~/custom    — custom install directory
# ============================================================

set -euo pipefail

# ── Config ─────────────────────────────────────────────
DOWNLOAD_BASE="https://shipiit.com/releases"
ANALYTICS_API="https://shipiit.com/api/analytics"
VERSION="${SHIPIT_VERSION:-latest}"
INSTALL_DIR="${SHIPIT_DIR:-}"

# Colours
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

log()  { echo -e "${GREEN}[ShipIt]${NC} $*"; }
warn() { echo -e "${YELLOW}[ShipIt]${NC} $*"; }
err()  { echo -e "${RED}[ShipIt]${NC} $*" >&2; exit 1; }

# ── Banner ─────────────────────────────────────────────

echo ""
echo -e "${BOLD}${GREEN}       _____ _   _ _____ _____ _____ _____${NC}"
echo -e "${BOLD}${GREEN}      /  ___| | | |_   _| ___ \\_   _|_   _|${NC}"
echo -e "${BOLD}${GREEN}      \\ \`--.| |_| | | | | |_/ / | |   | |${NC}"
echo -e "${BOLD}${GREEN}       \`--. \\  _  | | | |  __/  | |   | |${NC}"
echo -e "${BOLD}${GREEN}      /\\__/ / | | |_| |_| |    _| |_  | |${NC}"
echo -e "${BOLD}${GREEN}      \\____/\\_| |_/\\___/\\_|    \\___/  \\_/${NC}"
echo -e "  ${CYAN}Installer${NC}"
echo ""

# ── Preflight checks ──────────────────────────────────

command -v curl >/dev/null 2>&1 || command -v wget >/dev/null 2>&1 || \
    err "curl or wget is required. Install one and try again."

command -v python3 >/dev/null 2>&1 || err "Python 3 is required. Install from https://python.org"
command -v node >/dev/null 2>&1 || err "Node.js is required. Install from https://nodejs.org"

PYTHON_MINOR=$(python3 -c "import sys; print(sys.version_info.minor)")
if [ "$PYTHON_MINOR" -lt 10 ]; then
    err "Python 3.10+ is required (found 3.${PYTHON_MINOR})"
fi

NODE_MAJOR=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_MAJOR" -lt 18 ]; then
    err "Node.js 18+ is required (found $(node -v))"
fi

log "Python: $(python3 --version 2>&1 | awk '{print $2}')"
log "Node:   $(node -v)"

# ── Detect platform ───────────────────────────────────

OS="$(uname -s)"
ARCH="$(uname -m)"

case "$OS" in
    Linux)  PLATFORM="linux" ;;
    Darwin) PLATFORM="macos" ;;
    *)      err "Unsupported OS: $OS. Use the manual install instead." ;;
esac

case "$ARCH" in
    x86_64|amd64)  ARCH_TAG="x64" ;;
    arm64|aarch64) ARCH_TAG="arm64" ;;
    *)             ARCH_TAG="x64" ;;  # fallback
esac

log "Platform: ${CYAN}${PLATFORM}-${ARCH_TAG}${NC}"

# ── Resolve version ───────────────────────────────────

if [ "$VERSION" = "latest" ]; then
    log "Fetching latest version..."
    if command -v curl >/dev/null 2>&1; then
        VERSION=$(curl -fsSL "${DOWNLOAD_BASE}/latest/version.txt" 2>/dev/null || echo "")
    else
        VERSION=$(wget -qO- "${DOWNLOAD_BASE}/latest/version.txt" 2>/dev/null || echo "")
    fi

    if [ -z "$VERSION" ]; then
        err "Could not determine latest version. Set SHIPIT_VERSION manually:\n  SHIPIT_VERSION=1.0.0 curl -fsSL https://shipiit.com/install.sh | bash"
    fi
fi

log "Version: ${CYAN}v${VERSION}${NC}"

# ── Download ──────────────────────────────────────────

ARCHIVE_NAME="shipit-app-v${VERSION}.tar.gz"
DOWNLOAD_URL="${DOWNLOAD_BASE}/v${VERSION}/${ARCHIVE_NAME}"
TMP_DIR=$(mktemp -d)

cleanup() {
    rm -rf "$TMP_DIR"
}
trap cleanup EXIT

log "Downloading ${CYAN}${ARCHIVE_NAME}${NC}..."

if command -v curl >/dev/null 2>&1; then
    HTTP_CODE=$(curl -fsSL -w "%{http_code}" -o "$TMP_DIR/$ARCHIVE_NAME" "$DOWNLOAD_URL" 2>/dev/null || echo "000")
else
    wget -q -O "$TMP_DIR/$ARCHIVE_NAME" "$DOWNLOAD_URL" 2>/dev/null && HTTP_CODE="200" || HTTP_CODE="000"
fi

if [ "$HTTP_CODE" != "200" ] || [ ! -f "$TMP_DIR/$ARCHIVE_NAME" ]; then
    err "Download failed (HTTP $HTTP_CODE).\n  URL: $DOWNLOAD_URL\n  Check the version and try again."
fi

ARCHIVE_SIZE=$(du -sh "$TMP_DIR/$ARCHIVE_NAME" 2>/dev/null | cut -f1 || echo "unknown")
log "Downloaded ${CYAN}${ARCHIVE_SIZE}${NC}"

# Track download (fire and forget)
curl -s -X POST "$ANALYTICS_API/download/" \
    -H "Content-Type: application/json" \
    -d "{\"event\":\"archive\",\"version\":\"$VERSION\",\"platform\":\"$PLATFORM\",\"arch\":\"$ARCH_TAG\"}" \
    --connect-timeout 3 --max-time 5 >/dev/null 2>&1 &

# ── Extract ───────────────────────────────────────────

log "Extracting..."
cd "$TMP_DIR"
tar -xzf "$ARCHIVE_NAME"

EXTRACTED_DIR="shipit-app-v${VERSION}"
if [ ! -d "$EXTRACTED_DIR" ]; then
    # Try finding extracted directory
    EXTRACTED_DIR=$(ls -d shipit-app-* 2>/dev/null | head -1 || echo "")
    if [ -z "$EXTRACTED_DIR" ] || [ ! -d "$EXTRACTED_DIR" ]; then
        err "Failed to extract archive — expected shipit-app-v${VERSION}/"
    fi
fi

# ── Run bundled installer ─────────────────────────────

log "Running installer..."
echo ""

cd "$EXTRACTED_DIR"

if [ ! -f "install.sh" ]; then
    err "install.sh not found in archive. The release may be corrupted."
fi

# Pass through custom install dir if set
if [ -n "$INSTALL_DIR" ]; then
    export SHIPIT_DIR="$INSTALL_DIR"
fi

bash install.sh
INSTALL_RESULT=$?

# Track install result (fire and forget)
INSTALL_STATUS="completed"
[ "$INSTALL_RESULT" -ne 0 ] && INSTALL_STATUS="failed"

PYTHON_VER=$(python3 -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')" 2>/dev/null || echo "")
NODE_VER=$(node -v 2>/dev/null | sed 's/^v//' || echo "")

curl -s -X POST "$ANALYTICS_API/install/" \
    -H "Content-Type: application/json" \
    -d "{\"status\":\"$INSTALL_STATUS\",\"version\":\"$VERSION\",\"platform\":\"$PLATFORM\",\"arch\":\"$ARCH_TAG\",\"python_version\":\"$PYTHON_VER\",\"node_version\":\"$NODE_VER\"}" \
    --connect-timeout 3 --max-time 5 >/dev/null 2>&1 &

[ "$INSTALL_RESULT" -ne 0 ] && exit "$INSTALL_RESULT"

# ── Done ──────────────────────────────────────────────

echo ""
log "Installation complete!"
echo ""
echo -e "  ${BOLD}To start ShipIt:${NC}"
echo -e "    ${CYAN}shipitcli${NC}"
echo ""
echo -e "  ${BOLD}You'll be prompted for your license token on first launch.${NC}"
echo -e "  Get one at: ${CYAN}https://shipiit.com${NC}"
echo ""
