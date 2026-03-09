<div align="center">

# 🎬 Movie API

**A RESTful API for managing movies — built with Node.js, Express & MongoDB**

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

🌐 **Live API:** [https://movie-api-hhpx.onrender.com](https://movie-api-hhpx.onrender.com)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)

---

## 🔍 Overview

Movie API is a lightweight RESTful backend service that allows you to **create**, **list**, **search**, and **filter** movies by category. Built with a clean layered architecture separating routes, controllers, services, and models.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB Atlas** | Cloud database |
| **Mongoose** | MongoDB ODM |
| **dotenv** | Environment variable management |
| **cors** | Cross-Origin Resource Sharing |

---

## 📁 Project Structure

```
movie-api/
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   └── movie.controller.js # Request handlers
│   ├── models/
│   │   └── movie.model.js      # Mongoose schema
│   ├── routers/
│   │   └── movie.route.js      # Route definitions
│   ├── services/
│   │   └── movie.service.js    # Business logic
│   └── app.js                  # Express app setup
├── .env                        # Environment variables (not committed)
├── .gitignore
├── server.js                   # Entry point
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/movie-api.git

# Navigate to project directory
cd movie-api

# Install dependencies
npm install
```

### Setup Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/moviedb
```

### Run Locally

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server will start at `http://localhost:5000`

---

## 🔌 API Endpoints

**Base URL:** `https://movie-api-hhpx.onrender.com`

### Create a Movie
```http
POST /api/movies
```
**Request Body:**
```json
{
  "title": "12th Fail",
  "category": "drama",
  "poster": "https://example.com/poster.jpg",
  "videoUrl": "https://youtu.be/example"
}
```
**Response:** `201 Created`
```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "title": "12th Fail",
  "category": "drama",
  "poster": "https://example.com/poster.jpg",
  "videoUrl": "https://youtu.be/example",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

### Get All Movies
```http
GET /api/movies
```
**Response:** `200 OK` — returns array of all movies

---

### Search Movies
```http
GET /api/movies/search?q=keyword
```
| Query Param | Type | Description |
|---|---|---|
| `q` | `string` | Search keyword (case-insensitive) |

**Example:** `GET /api/movies/search?q=fail`

---

### Get Movies by Category
```http
GET /api/movies/category/:category
```
| Param | Type | Description |
|---|---|---|
| `category` | `string` | Movie category (e.g. drama, action) |

**Example:** `GET /api/movies/category/drama`

---

## 🗄 Database Schema

```js
{
  title:    String  // required
  category: String  // required
  poster:   String  // optional — image URL
  videoUrl: String  // required
  createdAt: Date   // auto-generated
  updatedAt: Date   // auto-generated
}
```

---

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `MONGO_URI` | ✅ Yes | MongoDB Atlas connection string |
| `PORT` | ❌ No | Server port (default: 5000) |

---

## ☁️ Deployment

This API is deployed on **[Render](https://render.com)**.

| Setting | Value |
|---|---|
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Environment** | `MONGO_URI` → Atlas connection string |

---

<div align="center">

Made with Md.Sinikdho❤️ using Node.js + Express + MongoDB

</div>
