# ShipIt

Open-source AI developer workspace — landing page + backend API.

## Structure

```
shipit/
├── landing-page/     # Vite + React + Tailwind landing page
└── backend/          # Django REST API (waitlist + tokens)
```

## Landing Page

Standalone deployable landing page with waitlist signup.

```bash
cd landing-page
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
```

**Environment** — create `landing-page/.env`:
```
VITE_API_URL=http://127.0.0.1:8001
```

### Features
- Multi-section landing (Overview, Ship CLI, Engines, Workflow, Start)
- Waitlist modal on all CTA buttons
- Dark/light/auto theme toggle
- Responsive, glassmorphic design
- Tailwind CSS 4 + Vite 6 + React 19

---

## Backend API

Django REST API with waitlist user management, token system, and email notifications via django-post_office.

### Setup

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env    # edit as needed
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 8001
```

Admin: http://127.0.0.1:8001/admin/

### Models

**WaitlistUser** (`waitlist`)
| Field     | Type          | Notes          |
|-----------|---------------|----------------|
| name      | CharField     | required       |
| email     | EmailField    | unique         |
| joined_at | DateTimeField | auto           |

**Token** (`tokens`)
| Field      | Type          | Notes                       |
|------------|---------------|-----------------------------|
| key        | CharField     | auto-generated `shipit_xxx`  |
| user       | FK → WaitlistUser | cascade               |
| is_active  | BooleanField  | default False               |
| start_date | DateTimeField | set on activation           |
| end_date   | DateTimeField | set on activation           |
| created_at | DateTimeField | auto                        |
| is_valid   | property      | active + within date range  |

### API Endpoints

#### `POST /api/waitlist/join/`
Join the waitlist. Sends welcome email via django-post_office.

```json
{ "name": "Rahul", "email": "rahul@example.com" }
```

**201** — created, email sent
**409** — email already on waitlist

#### `POST /api/tokens/validate/`
Validate a token (used by ShipIt CLI at install/startup).

```json
{ "token": "shipit_abc123..." }
```

**200** — `{ "valid": true/false, "token": {...} }`
**404** — token not found

#### `POST /api/tokens/activate/`
Activate a token with validity period. Sends activation email with token key.

```json
{ "token": "shipit_abc123...", "days": 30 }
```

**200** — activated, email sent
**409** — already active

### Email Templates

- `templates/emails/waitlist_welcome.html` — sent on waitlist join
- `templates/emails/token_activated.html` — sent on token activation

Uses django-post_office for queuing and template rendering. In dev mode emails print to console.

### Environment Variables

See `.env.example` for all options including SMTP config.

---

Built with ShipIt + Claude Code + Codex + FastAPI + React
