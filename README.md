# 🏠 Hostel Management System

A full-stack MERN web application to digitise hostel operations — room allocation, tenant onboarding, rent collection, complaints, and notices with **Razorpay** payment integration.

---

## ✨ Features

- 🔐 JWT-based role auth (Admin & Tenant)
- 🛏️ Room CRUD (single/double, AC, floor, rent)
- 👤 Tenant onboarding with room capacity enforcement
- 💰 Monthly rent generation & Razorpay online payment (UPI, card, net banking)
- 📋 Complaint lifecycle: Open → In Progress → Resolved
- 📢 Admin notice board
- 📊 Live dashboard with occupancy & rent stats

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Material UI v5, React Router v6 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT + bcrypt |
| Payments | Razorpay Node.js SDK |

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB (local or remote)
- Razorpay account (test mode, no KYC needed)

### Installation

```bash
git clone <repo-url>
cd hostel-management
npm run install:all
```

### Environment Variables

**`server/.env`**
```env
MONGO_URI=mongodb://localhost:27017/hosteldb
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=5000
```

**`client/.env`**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Run

```bash
npm run seed   # Populate demo data
npm run dev    # Start both servers (Express :5000 + React :3000)
```

---

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@hostel.com | admin123 |
| Tenant | avi@example.com | tenant@123 |
| Tenant | priya@example.com | tenant@123 |

---

## 📁 Project Structure

```
hostel-management/
├── server/          # Express REST API
│   ├── models/      # Mongoose schemas
│   ├── controllers/ # Business logic
│   ├── routes/      # API routes
│   └── middleware/  # Auth & role guards
└── client/          # React SPA
    └── src/
        ├── pages/   # Admin & Tenant views
        └── context/ # Auth context
```

---

## 💳 Razorpay Test Cards

| Method | Details |
|--------|---------|
| Card | `4111 1111 1111 1111` · Any expiry · Any CVV · OTP: `1234` |
| UPI | `success@razorpay` (success) · `failure@razorpay` (failure) |

---

## 📜 npm Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both servers concurrently |
| `npm run seed` | Seed demo data into MongoDB |
| `npm run install:all` | Install all dependencies |
| `npm run server` | Backend only (nodemon) |
| `npm run client` | Frontend only |

---

## 🔮 Planned Enhancements

- PDF payment receipts
- Email notifications
- Visitor management
- Analytics dashboard
- JWT refresh tokens

---

> Built with ❤️ by **Avishkar Pansare**
