# Authentication Backend API

Production-ready authentication backend with JWT and OAuth 2.0 support.

## Features

- Email/Password & Google OAuth 2.0 Authentication
- JWT tokens (15min access + 30day refresh) with rotation
- Email verification & Password reset
- OAuth-Password account syncing (no duplicates)
- Secure cookies, Input validation, Error handling

**Stack:** Node.js • Express • Prisma • PostgreSQL • JWT • Passport • Bcrypt • Zod

## Quick Start

```bash
npm install
cp .env.example .env  # Edit with your credentials
npx prisma generate && npx prisma migrate dev
npm run dev
```

## Environment Setup

```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
JWT_ACCESS_SECRET=your_secret_here
JWT_REFRESH_SECRET=your_secret_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URL=http://localhost:4000/api/auth/google/callback
FRONTEND_URL=http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Health check |
| `POST` | `/api/auth/signup` | Register with email/password |
| `POST` | `/api/auth/login` | Login |
| `POST` | `/api/auth/refresh` | Refresh access token |
| `GET` | `/api/auth/profile` | Get user profile (protected) |
| `POST` | `/api/auth/logout` | Logout current session |
| `POST` | `/api/auth/logout-all` | Logout all devices |
| `DELETE` | `/api/auth/delete-account` | Delete account |
| `GET` | `/api/auth/verify-email?token=<token>` | Verify email |
| `POST` | `/api/auth/request-password-reset` | Request reset link |
| `POST` | `/api/auth/reset-password` | Reset password |
| `GET` | `/api/auth/google` | Google OAuth login |

## Usage Examples

**Signup:**
```bash
curl -X POST http://localhost:4000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"Pass123","name":"John"}'
```

**Login:**
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" -c cookies.txt \
  -d '{"email":"user@example.com","password":"Pass123"}'
```

**Protected Route:**
```bash
curl http://localhost:4000/api/auth/profile \
  -H "Authorization: Bearer <token>" -b cookies.txt
```

**Google OAuth:** Open `http://localhost:4000/api/auth/google` in browser

## Response Format

**Success:** `{"success": true, "message": "...", "data": {...}}`  
**Error:** `{"success": false, "message": "...", "errors": [...]}`

## Project Structure

```
backend/src/
├── config/      # DB & Passport
├── controllers/ # Route handlers
├── middlewares/ # Auth & errors
├── routes/      # API routes
├── services/    # Business logic
├── utils/       # Validation
├── app.js
└── server.js
```

## Commands

```bash
npm run dev              # Dev server
npm run prisma:studio    # Database GUI
npm run prisma:migrate   # New migration
./test-endpoints.sh      # Test all endpoints
```

## Security

- Bcrypt hashing (12 rounds)
- JWT token rotation
- HttpOnly cookies
- Email verification
- SQL injection protection (Prisma)

## OAuth-Password Sync

Users can sign up with one method and add the other later - **no duplicates created**. See `OAUTH-PASSWORD-SYNC-VERIFICATION.md` for details.

## License

ISC
