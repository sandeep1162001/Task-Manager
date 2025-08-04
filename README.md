# 📝 Task Manager

A simple and efficient **web-based Task Manager** application built using the **MERN stack**: MongoDB, Express.js, React.js, and Node.js.
The project is organized into `backend` and `frontend` directories to ensure clean code separation and maintainability.

---

## ✨ Features

* 🔐 **User Authentication** – Register and log in securely using JWT
* ✅ **Task Management** – Create, read, update, delete (CRUD) operations
* 📌 **Mark as Complete** – Toggle tasks between complete and incomplete
* 📱 **Responsive Design** – Fully responsive for both desktop and mobile
* 🎯 **Clean UI** – User-friendly, intuitive interface

---

## 🛠️ Tech Stack

| Layer    | Technology           |
| -------- | -------------------- |
| Frontend | React.js             |
| Backend  | Node.js, Express.js  |
| Database | MongoDB              |
| Auth     | JWT (JSON Web Token) |

---

## 📁 Folder Structure

```plaintext
Task-Manager/
├── backend/              # Node.js/Express backend
├── frontend/
│   └── Task-manager/     # React frontend
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

* [Node.js](https://nodejs.org/) (v16+)
* npm (comes with Node.js)
* MongoDB (local or MongoDB Atlas)

---

### 🧪 Backend Setup

```bash
cd backend
npm install
npm run dev
```

* Runs on:(http://localhost:8000) (or your defined port)

> 🔐 Create a `.env` file inside the `backend/` directory. Example:

```env
MONGO_URL=your_mongo_connection_string
PORT=8000
JWT_SECRET=your_jwt_secret
ADMIN_INVITE_TOKEN=your_admin_token
```

---

### 🎨 Frontend Setup

```bash
cd frontend/Task-manager
npm install
npm run dev
```

* Runs on:(http://localhost:5173) or (http://localhost:3000) depending on setup

> 💡 You can use environment variables for frontend if needed (e.g., API base URLs). Create a `.env` file if required.

---

## 📌 Usage Guide

* **Register**: Create a new account to start managing your tasks.
* **Login**: Access your personal dashboard securely.
* **Add Task**: Enter a task title, description, and save it.
* **Edit/Delete**: Modify or remove existing tasks.
* **Toggle Complete**: Click to mark tasks as done or undone.

---
