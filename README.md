
````md
# 🔐 Secure API Key Management Service

A backend service built with **Node.js, Express, and MongoDB** that provides user authentication and secure API key management.

This project is intentionally built **step-by-step** to demonstrate **backend fundamentals, authentication concepts, and system design thinking** in a clear and practical way.

---

## 🚀 Project Overview

The Secure API Key Management Service allows users to:

- Register and manage user accounts
- Authenticate using username and password
- (Upcoming) Generate and manage API keys
- (Upcoming) Secure backend APIs using API keys

The project focuses on **clarity, scalability, and learning-first development**, making it ideal for backend learners.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for APIs
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **dotenv** – Environment variable management
- **Postman** – API testing tool

---

## 📁 Project Structure

```text
api-key-service/
├── src/
│   ├── config/
│   │   └── db.js          # MongoDB connection logic
│   ├── models/
│   │   └── User.js        # User schema definition
│   ├── routes/
│   │   └── userRoutes.js  # User-related API routes
│   └── index.js           # Application entry point
├── .env                   # Environment variables
├── package.json
└── README.md
````

---

## ⚙️ Prerequisites

Ensure the following are installed on your system:

* **Node.js** (v18+ recommended)
* **MongoDB** (running locally)
* **npm**
* **Postman** (optional but recommended)

---

## 🔧 Environment Setup

Create a `.env` file in the project root and add the following:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/api-key-service
```

---

## ▶️ How to Run the Project

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Start MongoDB

Make sure MongoDB is running:

```bash
sudo systemctl start mongod
```

Verify MongoDB connection:

```bash
mongosh
```

---

### 3️⃣ Start the Backend Server

Run the server from the project root:

```bash
node src/index.js
```

**Expected output:**

```text
MongoDB connected
Server running on port 4000
```

---

## 🧪 API Testing (Using Postman)

### ✅ Health Check

**Endpoint**

```http
GET http://localhost:4000/health
```

**Response**

```json
{
  "status": "API Key Service is running"
}
```

---

### 👤 Create User (Temporary – No Password Hashing Yet)

**Endpoint**

```http
POST http://localhost:4000/api/users
```

**Request Body**

```json
{
  "username": "testuser",
  "password": "12345"
}
```

**Response**

```json
{
  "message": "User created",
  "user": {
    "username": "testuser"
  }
}
```

---

### 📄 Get All Users (For Testing Only)

**Endpoint**

```http
GET http://localhost:4000/api/users
```

> ⚠️ This endpoint is for learning and testing purposes only.

---

## 🧠 Learning Goals

This project helps you understand:

* Backend project structuring
* Express routing and middleware
* MongoDB with Mongoose
* Environment variable configuration
* API testing using Postman
* Incremental backend development

---

## 🚧 Upcoming Features

Planned improvements and features:

* Password hashing using **bcrypt**
* Login API with **JWT authentication**
* API key generation and rotation
* API key–based request authorization
* Role-based access control
* Centralized and improved error handling

---

## 📌 Important Notes

* Passwords are currently stored in **plain text** for learning purposes only
* Security hardening will be added in later stages
* The project is intentionally incremental for better understanding

⚠️ **Do NOT use this version in production**

---

## 👨‍💻 Author

**Abhishek Kumar**
Backend Developer (Learning & Building)

---
