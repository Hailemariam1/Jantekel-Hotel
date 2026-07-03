# 🏨 Texas Hotel — Luxury Hotel Management System

A **production-ready, enterprise-grade** full-stack hotel website and management system for **Texas Hotel**, a five-star luxury hotel in **Gondar, Ethiopia**.

---

## 🏗️ Architecture

```
Texas hotel/
├── frontend/        # Next.js (App Router, TypeScript, Tailwind CSS)
├── backend/         # NestJS (TypeScript, Prisma, PostgreSQL)
├── docker-compose.yml  # Local PostgreSQL dev database
```

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js, TypeScript, Tailwind CSS, Framer Motion |
| Backend | NestJS, TypeScript, REST API |
| Database | PostgreSQL via Prisma ORM |
| Auth | JWT, Argon2, Refresh Tokens |
| Payments | Stripe, Chapa (Ethiopia) |
| Deployment | Vercel (frontend), Railway (backend) |

---

## 🔐 User Roles

- **Guest** — Public browsing
- **Registered** — Book rooms, manage profile
- **Receptionist** — Manage check-ins/check-outs
- **Manager** — Full operational control
- **Admin / Super Admin** — Full system access

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- Docker Desktop (for local PostgreSQL)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/texas-hotel.git
cd texas-hotel
```

### 2. Start the database
```bash
docker compose up -d
```

### 3. Setup the Backend
```bash
cd backend
cp .env.example .env   # Fill in your values
npm install
npx prisma migrate dev --name init
npm run start:dev
```

### 4. Setup the Frontend
```bash
cd frontend
cp .env.example .env.local  # Fill in your values
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the website.
Open [http://localhost:3001](http://localhost:3001) for the API.

---

## 📦 Deployment

- **Frontend** → [Vercel](https://vercel.com) — Import from GitHub, auto-detects Next.js
- **Backend** → [Railway](https://railway.app) — Connects to managed PostgreSQL
- **Database** → Railway PostgreSQL (auto-provisioned)

---

## 📄 License
MIT License — Texas Hotel
