#!/usr/bin/env bash
# ============================================================
#  ShipIt — Server Deploy Script
# ============================================================
#  Run on your Ubuntu/Debian server to set up everything:
#    scp -r . server:/opt/shipit/
#    ssh server 'bash /opt/shipit/deploy.sh'
#
#  After deploy:
#    - Landing page: https://shipit.dev
#    - API:          https://shipit.dev/api/
#    - Admin:        https://shipit.dev/admin/
#    - Installer:    curl -fsSL https://shipit.dev/install.sh | bash
# ============================================================

set -euo pipefail

APP_DIR="/opt/shipit"
BACKEND_DIR="$APP_DIR/backend"

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

log()  { echo -e "${GREEN}[deploy]${NC} $*"; }
err()  { echo -e "${RED}[deploy]${NC} $*" >&2; exit 1; }

# ── 1. System packages ──────────────────────────────────
log "Installing system packages..."
apt-get update -qq
apt-get install -y -qq python3 python3-venv python3-pip nginx postgresql postgresql-contrib certbot python3-certbot-nginx > /dev/null

# ── 2. Create log directory ──────────────────────────────
mkdir -p /var/log/shipit

# ── 3. Python venv + deps ───────────────────────────────
log "Setting up Python venv..."
cd "$BACKEND_DIR"
python3 -m venv .venv
source .venv/bin/activate
pip install -q -r requirements.txt

# ── 4. Database setup ───────────────────────────────────
log "Setting up PostgreSQL..."
if ! sudo -u postgres psql -lqt | cut -d \| -f 1 | grep -qw shipit; then
    sudo -u postgres createuser shipit 2>/dev/null || true
    sudo -u postgres createdb shipit -O shipit 2>/dev/null || true
    sudo -u postgres psql -c "ALTER USER shipit WITH PASSWORD 'shipit_secret';" 2>/dev/null || true
    log "Created database 'shipit'"
else
    log "Database 'shipit' already exists"
fi

# ── 5. Django setup ─────────────────────────────────────
log "Running migrations..."
python manage.py migrate --noinput
python manage.py collectstatic --noinput

# ── 6. Build landing page ───────────────────────────────
if [ -f "$APP_DIR/landing-page/package.json" ]; then
    log "Building landing page..."
    cd "$APP_DIR/landing-page"
    npm install --production=false -q
    npx vite build
fi

# ── 7. Nginx ────────────────────────────────────────────
log "Configuring nginx..."
cp "$APP_DIR/nginx/nginx.conf" /etc/nginx/sites-available/shipit.dev
ln -sf /etc/nginx/sites-available/shipit.dev /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

nginx -t && systemctl reload nginx

# ── 8. Systemd service ──────────────────────────────────
log "Setting up systemd service..."
cp "$APP_DIR/shipit-api.service" /etc/systemd/system/
systemctl daemon-reload
systemctl enable shipit-api
systemctl restart shipit-api

# ── 9. SSL (Let's Encrypt) ──────────────────────────────
log "Setting up SSL..."
certbot --nginx -d shipit.dev -d www.shipit.dev --non-interactive --agree-tos --redirect --email admin@shipit.dev || {
    echo -e "${CYAN}[deploy]${NC} SSL setup skipped — run manually:"
    echo "  certbot --nginx -d shipit.dev -d www.shipit.dev"
}

# ── Done ────────────────────────────────────────────────
echo ""
echo -e "${GREEN}${BOLD}Deploy complete!${NC}"
echo ""
echo -e "  ${BOLD}Landing page:${NC}  ${CYAN}https://shipit.dev${NC}"
echo -e "  ${BOLD}API:${NC}           ${CYAN}https://shipit.dev/api/${NC}"
echo -e "  ${BOLD}Admin:${NC}         ${CYAN}https://shipit.dev/admin/${NC}"
echo -e "  ${BOLD}Installer:${NC}     ${CYAN}curl -fsSL https://shipit.dev/install.sh | bash${NC}"
echo ""
echo -e "  ${BOLD}Manage:${NC}"
echo "    systemctl status shipit-api     # check status"
echo "    systemctl restart shipit-api    # restart API"
echo "    journalctl -u shipit-api -f     # view logs"
echo ""
