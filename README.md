# 🔐 Login Authentication System

A secure user authentication system built using modern web technologies. This project provides user registration, login, JWT-based authentication, protected routes, password hashing, and session management.

## 🚀 Features

- User Registration (Sign Up)
- User Login (Sign In)
- JWT Authentication
- Password Hashing with bcrypt
- Protected Routes
- User Session Management
- Form Validation
- Error Handling
- Responsive UI
- Secure API Integration

## 🛠️ Tech Stack

### Frontend
- Angular / React
- TypeScript
- HTML5
- CSS3
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

## 📂 Project Structure

```bash
Login-Authentication-System/
│
├── client/
│   ├── src/
│   ├── components/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── config/
│
├── .env
├── package.json
└── README.md
```

## 🔑 Authentication Flow

1. User registers with email and password.
2. Password is hashed using bcrypt.
3. User logs in with credentials.
4. Server validates credentials.
5. JWT token is generated.
6. Token is stored on client side.
7. Protected APIs verify JWT before granting access.

## 📸 Screenshots

### Login Page
Add screenshot here

### Registration Page
Add screenshot here

### Dashboard
Add screenshot here

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/login-authentication-system.git
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

## 🔒 Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

## API Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

### Get User Profile

```http
GET /api/auth/profile
```

## 🎯 Key Learnings

- JWT Authentication
- Password Encryption
- REST API Development
- MongoDB Integration
- Authentication Middleware
- Route Protection
- State Management
- Frontend & Backend Communication

## 👨‍💻 Author

Navya Golash

- Frontend Developer
- Angular Developer
- MERN Stack Enthusiast

## ⭐ Future Enhancements

- Forgot Password
- Email Verification
- Google Authentication
- Role-Based Access Control
- Refresh Tokens
- Multi-Factor Authentication


## This is the GIthub Topics 
authentication
jwt-authentication
nodejs
expressjs
mongodb
mern-stack
angular
react
typescript
login-system
bcrypt