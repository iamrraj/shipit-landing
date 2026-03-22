# Gunicorn config for ShipIt API
bind = "127.0.0.1:8001"
workers = 3
timeout = 120
accesslog = "/var/log/shipit/gunicorn-access.log"
errorlog = "/var/log/shipit/gunicorn-error.log"
loglevel = "info"
