# 🚀 KratosAI - Full-Stack Lead Management Platform

<div align="center">

**Production-ready lead management system with comprehensive authentication and CRM capabilities**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## ✨ Features

### Authentication & Security
- ✅ Email/Password & Google OAuth 2.0 Authentication
- ✅ JWT tokens (15min access + 30day refresh) with rotation
- ✅ Email verification & Password reset
- ✅ OAuth-Password account syncing (no duplicates)
- ✅ Secure HTTP-only cookies
- ✅ Multi-device session management
- ✅ Input validation with Zod
- ✅ Comprehensive error handling

### Lead Management (CRM)
- ✅ Create, Read, Update, Delete (CRUD) leads
- ✅ Lead status tracking (New, Qualified, Won, Lost, etc.)
- ✅ Lead source management (Website, LinkedIn, Referral, etc.)
- ✅ Priority levels (Low, Medium, High, Urgent)
- ✅ Deal value tracking
- ✅ Assign leads to Relationship Managers
- ✅ Industry categorization
- ✅ Lead type classification (Individual, Business, Corporate)
- ✅ Notes and source details

### Meeting Scheduling (NEW! 🎉)
- ✅ Schedule meetings with borrowers
- ✅ Calendly API integration
- ✅ Meeting status tracking (Scheduled, Completed, Canceled)
- ✅ Video conference link generation (Zoom/Google Meet)
- ✅ Meeting duration selection (15-240 minutes)
- ✅ Meeting notes and agenda
- ✅ Cancel and update meetings
- ✅ View all scheduled meetings

### Frontend
- ✅ Modern React UI with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Dark/Light theme support
- ✅ Responsive dashboard layout
- ✅ Protected routes with authentication
- ✅ Lead management interface
- ✅ User-friendly forms and modals

**Tech Stack:** 
- **Backend:** Node.js • Express • TypeScript • Prisma • PostgreSQL • JWT • Google OAuth
- **Frontend:** React • TypeScript • Vite • Tailwind CSS • React Router
- **Security:** Bcrypt • Zod • HTTP-only Cookies
- **Email:** Nodemailer

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Environment Setup](#-environment-setup)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Available Commands](#-available-commands)
- [Lead Management](#-lead-management-features)
- [Frontend Features](#-frontend-features)
- [Security Features](#-security-features)
- [Deployment](#-deployment)

## 🎯 What Makes KratosAI Special?

| Feature | Description |
|---------|-------------|
| � **Enterprise Auth** | JWT + OAuth 2.0 with refresh token rotation and multi-device session management |
| 📊 **Full CRM** | Complete lead management with status tracking, priority levels, and deal value |
| 🎨 **Modern UI** | Beautiful React interface with dark/light themes and responsive design |
| 🔒 **Security First** | Bcrypt encryption, HTTP-only cookies, Zod validation, and SQL injection protection |
| 📧 **Email System** | Automated verification and password reset emails via SMTP |
| 🚀 **Production Ready** | TypeScript, Prisma ORM, comprehensive error handling, and logging |
| 🔄 **Real-time Sync** | Live updates across devices with token management |
| 📱 **Mobile Friendly** | Fully responsive design that works on all devices |

## �🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Gmail account (for SMTP)
- Google OAuth credentials (optional, for social login)

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env  # Edit with your credentials

# Generate Prisma client and run migrations
npx prisma generate
npx prisma migrate dev

# Start development server
npm run dev
```

Backend server will run on `http://localhost:4000`

### Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

### Production Build

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## 🔧 Environment Setup

### Backend Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# JWT Secrets (generate with: openssl rand -base64 64)
JWT_ACCESS_SECRET=your_access_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here

# Google OAuth 2.0
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URL=http://localhost:4000/api/auth/google/callback

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# SMTP Configuration (for emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@yourapp.com
```

### Frontend Environment Variables

The frontend is configured to work with the backend API. If you need to change the API URL, update the `api.ts` file in `frontend/src/services/`.

Default API URL: `http://localhost:4000`

### 📝 Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google+ API** or **People API**
4. Create **OAuth 2.0 Client ID** credentials (Web application)
5. Add authorized redirect URI: `http://localhost:4000/api/auth/google/callback`
6. For production: Add your production callback URL
7. Configure OAuth consent screen with test users (for development)
8. Copy Client ID and Client Secret to `.env`

**Note:** Google OAuth is optional. The application works perfectly with email/password authentication alone.

### 📧 SMTP Configuration

For Gmail:
1. Enable 2-factor authentication on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `SMTP_PASS` environment variable

For other SMTP providers (SendGrid, Mailgun, etc.), use their SMTP credentials.

## 📡 API Endpoints

### Health Check
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/health` | Health check | ❌ |

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/signup` | Register with email/password | ❌ |
| `POST` | `/api/auth/login` | Login | ❌ |
| `POST` | `/api/auth/refresh` | Refresh access token | ❌ |
| `GET` | `/api/auth/profile` | Get user profile | ✅ |
| `POST` | `/api/auth/logout` | Logout current session | ✅ |
| `POST` | `/api/auth/logout-other-devices` | Logout all other devices | ✅ |
| `GET` | `/api/auth/verify-email?token=<token>` | Verify email | ❌ |
| `POST` | `/api/auth/request-password-reset` | Request reset link | ❌ |
| `POST` | `/api/auth/reset-password` | Reset password | ❌ |
| `GET` | `/api/auth/google` | Google OAuth login (redirects) | ❌ |
| `GET` | `/api/auth/google/callback` | Google OAuth callback | ❌ |

### Lead Management
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/leads` | Create a new lead | ✅ |
| `GET` | `/api/leads` | Get all leads (with filters) | ✅ |
| `GET` | `/api/leads/:id` | Get lead by ID | ✅ |
| `PUT` | `/api/leads/:id` | Update lead | ✅ |
| `DELETE` | `/api/leads/:id` | Delete lead | ✅ |
| `GET` | `/api/leads/stats` | Get lead statistics | ✅ |

### Meeting Scheduling
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/meetings/schedule` | Schedule a new meeting | ✅ |
| `GET` | `/api/meetings` | Get all meetings for user | ✅ |
| `GET` | `/api/meetings/:id` | Get meeting by ID | ✅ |
| `POST` | `/api/meetings/:id/cancel` | Cancel a meeting | ✅ |
| `PATCH` | `/api/meetings/:id/status` | Update meeting status | ✅ |
| `GET` | `/api/meetings/event-types` | Get Calendly event types | ✅ |

### Example API Requests

**Register a new user:**
```bash
curl -X POST http://localhost:4000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePassword123!",
    "name": "John Doe"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePassword123!"
  }'
```

**Create a lead (with authentication):**
```bash
curl -X POST http://localhost:4000/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@company.com",
    "phone": "+1234567890",
    "companyName": "ABC Corp",
    "source": "LINKEDIN",
    "leadPriority": "HIGH",
    "dealValue": 50000,
    "industry": "Technology"
  }'
```

**Get all leads with filters:**
```bash
curl -X GET "http://localhost:4000/api/leads?status=NEW&priority=HIGH" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 📁 Project Structure

```
kratosAi/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema (User, Lead, RefreshToken)
│   │   └── migrations/            # Migration files
│   ├── src/
│   │   ├── config/
│   │   │   ├── auth.ts           # Custom Google OAuth config
│   │   │   ├── db.ts             # Prisma client
│   │   │   └── env.ts            # Environment validation
│   │   ├── constants/
│   │   │   └── index.ts          # App constants
│   │   ├── controllers/
│   │   │   ├── authController.ts # Auth route handlers
│   │   │   ├── googleController.ts # OAuth handlers
│   │   │   └── leadController.ts # Lead CRUD handlers
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.ts # JWT verification
│   │   │   └── errorHandler.ts   # Error handling
│   │   ├── routes/
│   │   │   ├── authRoutes.ts     # Auth endpoints
│   │   │   ├── googleRoutes.ts   # OAuth endpoints
│   │   │   └── leadRoutes.ts     # Lead endpoints
│   │   ├── services/
│   │   │   ├── mailService.ts    # Email service
│   │   │   ├── tokenService.ts   # Token management
│   │   │   ├── userService.ts    # User operations
│   │   │   └── leadService.ts    # Lead business logic
│   │   ├── types/
│   │   │   └── index.ts          # TypeScript types
│   │   ├── utils/
│   │   │   ├── jwtUtils.ts       # JWT utilities
│   │   │   ├── logger.ts         # Winston logger
│   │   │   ├── response.ts       # Response helpers
│   │   │   └── validate.ts       # Input validation
│   │   ├── app.ts                # Express app setup
│   │   └── server.ts             # Server entry point
│   ├── .env                       # Environment variables
│   ├── package.json              # Backend dependencies
│   └── tsconfig.json             # TypeScript config
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.tsx            # Login page
│   │   │   │   ├── Signup.tsx           # Signup page
│   │   │   │   ├── ForgotPassword.tsx   # Password reset
│   │   │   │   ├── VerifyEmail.tsx      # Email verification
│   │   │   │   ├── GoogleCallback.tsx   # OAuth callback
│   │   │   │   └── AuthLayout.tsx       # Auth layout wrapper
│   │   │   ├── Dashboard/
│   │   │   │   ├── Dashboard.tsx        # Main dashboard
│   │   │   │   ├── DashboardLayout.tsx  # Layout wrapper
│   │   │   │   ├── Header.tsx           # App header
│   │   │   │   └── Sidebar.tsx          # Navigation sidebar
│   │   │   └── Leads/
│   │   │       ├── LeadsPage.tsx        # Leads list view
│   │   │       ├── AddLeadPage.tsx      # Create lead form
│   │   │       ├── LeadDetailsPage.tsx  # Lead details view
│   │   │       └── AddLeadModal.tsx     # Add lead modal
│   │   ├── context/
│   │   │   └── ThemeContext.tsx         # Dark/Light theme
│   │   ├── services/
│   │   │   ├── api.ts                   # API client
│   │   │   ├── auth.service.ts          # Auth API calls
│   │   │   └── lead.service.ts          # Lead API calls
│   │   ├── types/
│   │   │   ├── auth.types.ts            # Auth TypeScript types
│   │   │   └── index.ts                 # Exported types
│   │   ├── App.tsx                      # Main app component
│   │   ├── main.tsx                     # App entry point
│   │   └── index.css                    # Global styles
│   ├── package.json                     # Frontend dependencies
│   ├── tsconfig.json                    # TypeScript config
│   └── vite.config.ts                   # Vite configuration
│
└── README.md                            # This file
```

## 💻 Available Commands

### Backend Commands (from `/backend` directory)

```bash
# Development
npm run dev                  # Start dev server with auto-reload
npm run build                # Build TypeScript to JavaScript
npm start                    # Start production server

# Database
npm run prisma:generate      # Generate Prisma client
npm run prisma:migrate       # Create new migration
npm run prisma:studio        # Open Prisma Studio (DB GUI)

# Utilities
npm run type-check           # Check TypeScript types
```

### Frontend Commands (from `/frontend` directory)

```bash
# Development
npm run dev                  # Start Vite dev server
npm run build                # Build for production
npm run preview              # Preview production build
```

## 🔒 Security Features

| Security Layer | Implementation | Details |
|----------------|----------------|---------|
| 🔐 **Password Security** | Bcrypt | 12 rounds of hashing |
| 🎫 **JWT Tokens** | jsonwebtoken | Access (15min) + Refresh (30d) with rotation |
| 🍪 **Secure Cookies** | HTTP-only | Refresh tokens protected from XSS |
| ✉️ **Email Verification** | SMTP | Required for account activation |
| 🛡️ **CORS Protection** | cors middleware | Restricted to frontend origin |
| 💉 **SQL Injection** | Prisma ORM | Parameterized queries |
| ✅ **Input Validation** | Zod | Schema validation on all endpoints |
| 🚨 **Error Handling** | Custom middleware | Centralized error responses |
| 🔄 **Session Management** | RefreshToken model | Multi-device logout support |

### Security Best Practices Implemented

- Passwords never stored in plain text
- Tokens stored in HTTP-only cookies (not accessible via JavaScript)
- CORS configured to allow only trusted origins
- Email verification required before full account access
- Password reset with time-limited tokens
- Automatic account linking prevents duplicate accounts
- Comprehensive input validation using Zod schemas
- Secure session management with token rotation

## 🔄 OAuth-Password Account Linking

Users can sign up with either email/password or Google OAuth, and later add the other authentication method. The system automatically links accounts by email - **no duplicate accounts are created**.

**Flow Examples:**
1. Sign up with email → Later link Google account
2. Sign up with Google → Later set password

## 📊 Lead Management Features

### Lead Properties
- **Basic Info:** First name, middle name, last name, contact person
- **Company Info:** Company name, industry
- **Contact Details:** Email, phone
- **Lead Classification:**
  - **Type:** Individual, Business, Corporate, Government
  - **Priority:** Low, Medium, High, Urgent
  - **Status:** New, Knockout Failed, Meeting Scheduled, Qualified, Proposal Sent, Negotiation, Won, Lost
- **Source Tracking:** Website, Referral, LinkedIn, Cold Call, Email Campaign, Trade Show, Partner, Other
- **Deal Management:** Deal value, assigned RM (Relationship Manager)
- **Notes:** Additional information and source details

### Lead Filtering & Search
- Filter by status, source, priority, and assigned RM
- Search functionality across lead fields
- View lead statistics and analytics

### Database Schema

The application uses PostgreSQL with the following main tables:

- **User:** Stores user authentication and profile data
- **RefreshToken:** Manages JWT refresh tokens for multi-device sessions
- **Lead:** Stores all lead information with relationships to users

All timestamps, indexing, and cascade deletes are properly configured for optimal performance.

## 🎨 Frontend Features

### Pages & Routes

- **Authentication Pages**
  - `/login` - Login page with email/password and Google OAuth
  - `/signup` - User registration
  - `/forgot-password` - Password reset request
  - `/verify-email` - Email verification
  - `/auth/callback` - Google OAuth callback handler

- **Dashboard**
  - `/dashboard` - Main dashboard with overview
  - Protected route requiring authentication

- **Lead Management**
  - `/leads` - View all leads with filtering
  - `/leads/new` - Create new lead
  - `/leads/:id` - View and edit lead details
  - `/deal-sourcing/create-leads` - Alternative lead creation route

### UI Components

- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Theme Support:** Dark and light mode toggle
- **Sidebar Navigation:** Easy access to all features
- **Modal Forms:** Quick lead creation and editing
- **Protected Routes:** Automatic redirect to login if not authenticated
- **Toast Notifications:** User feedback for actions

## 🚀 Deployment

### Backend Deployment

1. Set up PostgreSQL database
2. Configure environment variables
3. Run migrations: `npx prisma migrate deploy`
4. Build: `npm run build`
5. Start: `npm start`

### Frontend Deployment

1. Update API URL in `frontend/src/services/api.ts`
2. Build: `npm run build`
3. Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

### Recommended Hosting

- **Backend:** Railway, Render, Heroku, DigitalOcean
- **Frontend:** Vercel, Netlify, Cloudflare Pages
- **Database:** Supabase, Railway, Neon, ElephantSQL

## 🔧 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Make sure PostgreSQL is running
# Check DATABASE_URL in .env file
# Run migrations: npx prisma migrate dev
```

**CORS Error on Frontend**
```bash
# Ensure FRONTEND_URL in backend .env matches your frontend URL
# Default: http://localhost:5173
```

**Email Not Sending**
```bash
# Verify SMTP credentials in .env
# For Gmail, use App Password (not regular password)
# Check spam folder
```

**JWT Token Errors**
```bash
# Ensure JWT_ACCESS_SECRET and JWT_REFRESH_SECRET are set
# Generate new secrets: openssl rand -base64 64
# Clear cookies and login again
```

**Prisma Client Issues**
```bash
# Regenerate Prisma client
npx prisma generate

# If schema changed, create migration
npx prisma migrate dev --name your_migration_name
```

**Port Already in Use**
```bash
# Backend (default 4000)
# Frontend (default 5173)
# Change PORT in .env or kill the process
lsof -ti:4000 | xargs kill -9  # macOS/Linux
```

### Getting Help

- Check the console for error messages
- Review the `.env` file for missing variables
- Ensure all dependencies are installed (`npm install`)
- Verify database is running and accessible
- Check that ports 4000 and 5173 are available

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

KratosAI Team

## �️ Roadmap

Future enhancements planned:

- [ ] **Advanced Analytics Dashboard** - Charts and graphs for lead insights
- [ ] **Email Campaign Integration** - Send bulk emails to leads
- [ ] **Lead Scoring System** - AI-powered lead qualification
- [ ] **Activity Timeline** - Track all interactions with leads
- [ ] **File Attachments** - Upload documents and files to leads
- [ ] **Custom Fields** - User-defined lead properties
- [ ] **API Rate Limiting** - Protect against abuse
- [ ] **WebSocket Support** - Real-time notifications
- [ ] **Export Functionality** - CSV/PDF export of leads
- [ ] **Team Management** - Multiple users with role-based access
- [ ] **Integration APIs** - Connect with CRM tools (Salesforce, HubSpot)
- [ ] **Mobile App** - React Native mobile application

## �🙏 Acknowledgments

- Built with modern web technologies
- Inspired by best practices in full-stack development
- Thanks to the open-source community

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review the troubleshooting section

---

## ⚠️ Important Notes

1. **Security:** Always keep your `.env` files secure and never commit them to version control
2. **Environment Variables:** Use different secrets for development and production
3. **Database:** Backup your PostgreSQL database regularly
4. **SMTP:** Use App Passwords for Gmail or dedicated SMTP services for production
5. **OAuth:** Configure separate OAuth apps for development and production environments
6. **CORS:** Update `FRONTEND_URL` in production to match your deployed frontend URL

---

**Built with ❤️ by the KratosAI Team**


