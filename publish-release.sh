#!/usr/bin/env bash
# ============================================================
#  Publish a ShipIt release
# ============================================================
#  Usage:
#    ./publish-release.sh /path/to/shipit-app-v1.0.0.tar.gz
#
#  This copies the archive to releases/ and updates latest/version.txt
#  so that `curl -fsSL https://shipit.dev/install.sh | bash` picks it up.
# ============================================================

set -euo pipefail

GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

RELEASES_DIR="$(cd "$(dirname "$0")" && pwd)/releases"

if [ $# -lt 1 ]; then
    echo -e "${RED}Usage:${NC} $0 <path-to-shipit-app-vX.Y.Z.tar.gz>"
    exit 1
fi

ARCHIVE="$1"
FILENAME=$(basename "$ARCHIVE")

# Extract version from filename: shipit-app-v1.2.3.tar.gz → 1.2.3
VERSION=$(echo "$FILENAME" | sed -n 's/shipit-app-v\(.*\)\.tar\.gz/\1/p')
if [ -z "$VERSION" ]; then
    echo -e "${RED}Error:${NC} Could not parse version from '$FILENAME'"
    echo "  Expected format: shipit-app-vX.Y.Z.tar.gz"
    exit 1
fi

# Create release directory
RELEASE_DIR="$RELEASES_DIR/v$VERSION"
mkdir -p "$RELEASE_DIR"

# Copy archive
cp "$ARCHIVE" "$RELEASE_DIR/$FILENAME"
echo -e "${GREEN}[release]${NC} Copied to $RELEASE_DIR/$FILENAME"

# Update latest
mkdir -p "$RELEASES_DIR/latest"
echo "$VERSION" > "$RELEASES_DIR/latest/version.txt"
echo -e "${GREEN}[release]${NC} Updated latest → ${CYAN}v$VERSION${NC}"

echo ""
echo -e "${GREEN}Published!${NC} Users can now install with:"
echo -e "  ${CYAN}curl -fsSL https://shipit.dev/install.sh | bash${NC}"
echo ""
echo -e "Or install this specific version:"
echo -e "  ${CYAN}SHIPIT_VERSION=$VERSION curl -fsSL https://shipit.dev/install.sh | bash${NC}"
