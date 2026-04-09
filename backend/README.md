# Mobile Notes / Tasks App Backend

This is the backend for the Mobile Notes/Tasks app, specifically designed to satisfy the 1-Day Trial Assignment requirements.

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT) + bcryptjs
- ES Modules

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or Atlas URI)

### Installation
1. Clone the repository and navigate to the backend folder.
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill out the `MONGO_URI` and `JWT_SECRET`.
4. Run `npm run dev` to start the server via nodemon.

## Features
- **JWT Authentication**: User signup, login.
- **Task Management**: Create, Read, Update, Delete tasks with pagination, searching, and filtering.
- **Session Tracking**: Automatic `lastActiveAt` updating on login and protected requests.
