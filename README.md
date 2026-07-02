# Student Management System

## Overview

The Student Management System is a full-stack web application developed to manage student records efficiently through a secure, role-based access system. The application supports three user roles—**Admin**, **Employee**, and **Student**—with different levels of access based on their permissions.

Built using **Node.js**, **Express.js**, **EJS**, and **MongoDB**, the project follows the **MVC (Model–View–Controller)** architecture to ensure clean code organization, maintainability, and scalability.

## Features

* Secure user authentication using **JSON Web Tokens (JWT)**
* Password hashing with **bcryptjs**
* Role-Based Access Control (RBAC)
* CRUD operations for student records
* Server-side validation using **Joi**
* Dynamic server-side rendering with **EJS**
* Reusable layouts using **EJS Mate**
* Flash messages using **Express Session** and **Connect Flash**
* MongoDB integration using **Mongoose (ODM)**

## User Roles

| Role         | Permissions                                 |
| ------------ | ------------------------------------------- |
| **Admin**    | View, Add, Edit, and Delete student records |
| **Employee** | View and Edit student records               |
| **Student**  | View student records                        |

## Tech Stack

**Backend**

* Node.js
* Express.js

**Frontend**

* EJS
* EJS Mate
* Bootstrap 5

**Database**

* MongoDB
* Mongoose (ODM)

**Authentication & Security**

* JSON Web Token (JWT)
* bcryptjs

**Validation & Utilities**

* Joi
* Express Session
* Connect Flash
* dotenv
* Method Override

## Technical Concepts

* MVC (Model–View–Controller) Architecture
* JWT-based Authentication
* Role-Based Authorization (RBAC)
* RESTful Routing
* CRUD Operations
* Middleware
* Server-Side Rendering (SSR)
* Schema-based Data Modeling with Mongoose
* Server-side Request Validation
* Flash Messaging
* Environment Variable Management

## Project Structure

```
project/
├── config/
├── controllers/
├── middleware/
├── models/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── routes/
├── utils/
├── views/
│   ├── layouts/
│   ├── partials/
│   └── ...
├── app.js
├── package.json
└── .env
```

## Purpose

This project was developed to strengthen full-stack web development skills by implementing authentication, authorization, role-based access control, CRUD operations, server-side validation, and database management using modern Node.js technologies.
