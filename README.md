## Assignment 4 – Restaurant API

## Project Description
This project is a RESTful Restaurant API built with Node.js, Express, and MongoDB.  
It follows the MVC (Model–View–Controller) architecture and implements authentication,
authorization, and Role-Based Access Control (RBAC) using JWT and bcrypt.The API allows managing restaurant menu categories and menu items with secure access rules.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- Postman (API testing)

---

## Project Structure (MVC)
models/
controllers/
routes/
middleware/
config/
app.js
server.js

``` 

- models/ – Mongoose schemas
- controllers/ – Business logic
- routes/ – API endpoints
- middleware/ – Authentication & authorization
- config/ – Database connection

```
---

## Objects in the System

## 1. User
Fields:
- email
- password (hashed)
- role (`user` or `admin`)

Used for authentication and authorization.

---

## 2. Category (Secondary Object)
Represents menu categories.

CRUD Operations:
- Create (admin only)
- Read (public)
- Update (admin only)
- Delete (admin only)

---

## 3. MenuItem (Primary Object)
Represents food items in the menu.

Fields:
- name
- price
- description
- category (reference to Category)

CRUD Operations:
- Create (admin only)
- Read (public)
- Update (admin only)
- Delete (admin only)

---

## Authentication & RBAC

- Passwords are hashed using bcrypt
- JWT is used for authentication
- Public access: GET routes
- Protected access: POST, PUT, DELETE
- Only users with role admin can modify data

---

## API Endpoints (Examples)

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

## Categories
- GET `/api/categories`
- POST `/api/categories` (admin)
- PUT `/api/categories/:id` (admin)
- DELETE `/api/categories/:id` (admin)

## Menu Items
- GET `/api/menu`
- POST `/api/menu` (admin)
- PUT `/api/menu/:id` (admin)
- DELETE `/api/menu/:id` (admin)

---

## How to Run the Project?

1. Install dependencies:
```
npm install
```
Create .env:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/restaurant-api
JWT_SECRET=your_secret_key
```

Start server

```
npm run dev

```
Author:
Assignment 4 – Web / Backend Development - Amangeldi Alisher
