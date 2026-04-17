# 📋 TaskTrail — Mobile Notes / Tasks App

A complete full-stack **Mobile Notes / Tasks App** built with **Node.js + Express.js + MongoDB** (Backend) and **React Native + Expo** (Frontend).

> Built as a 1-Day Trial Assignment demonstrating backend development skills for mobile applications including API design, JWT authentication, database handling, clean architecture, and delivery quality.

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Web Framework |
| MongoDB + Mongoose | Database & ODM |
| JWT (jsonwebtoken) | Authentication |
| bcryptjs | Password Hashing |
| dotenv | Environment Variables |
| cors | Cross-Origin Requests |
| morgan | HTTP Request Logging |

### Frontend (Mobile)
| Technology | Purpose |
|---|---|
| React Native (Expo SDK 54) | Mobile Framework |
| Expo Router | File-based Navigation |
| Zustand | State Management |
| Axios | HTTP Client |
| AsyncStorage | Token Persistence |
| Ionicons | Icons |

---

## 📁 Project Structure

```
task-trail/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── authController.js    # Signup & Login logic
│   │   │   └── taskController.js    # CRUD + Pagination + Search + Filter
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js    # JWT verification + lastActiveAt update
│   │   │   └── errorMiddleware.js   # Centralized error handling
│   │   ├── models/
│   │   │   ├── User.js             # User schema
│   │   │   └── Task.js             # Task schema
│   │   ├── routes/
│   │   │   ├── authRoutes.js       # Auth endpoints
│   │   │   └── taskRoutes.js       # Task endpoints
│   │   └── app.js                   # Express app setup
│   ├── server.js                    # Entry point
│   ├── .env.example                 # Environment template
│   ├── package.json
│   └── postman_collection.json      # Ready-to-import Postman collection
│
└── mobile/
    ├── app/
    │   ├── _layout.tsx              # Root layout (Auth guard)
    │   ├── (auth)/
    │   │   ├── _layout.tsx
    │   │   ├── login.tsx            # Login screen
    │   │   └── signup.tsx           # Signup screen
    │   └── (tabs)/
    │       ├── _layout.tsx          # Tab bar navigation
    │       ├── index.tsx            # Tasks dashboard
    │       └── create.tsx           # Create new task
    ├── api/
    │   └── index.ts                 # Axios instance with JWT interceptor
    ├── store/
    │   └── authStore.ts             # Zustand auth state management
    └── package.json
```

---

## 📸 Screenshots

<p align="center">
  <img src="./assets/login.png" width="30%" />
  &nbsp; &nbsp;
  <img src="./assets/dashboard.png" width="30%" />
  &nbsp; &nbsp;
  <img src="./assets/create-task.png" width="30%" />
</p>

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **MongoDB** (Local or MongoDB Atlas) — [Download](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/atlas)
- **Expo Go App** (for testing on physical device) — Available on App Store & Play Store
- **npm** (comes with Node.js)

---

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd task-trail
```

---

### Step 2: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create environment file from template
cp .env.example .env
```

Now open the `.env` file and fill in your values:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskapp
JWT_SECRET=your_super_secret_key_here
```

> 💡 **Tip:** For `MONGO_URI`, you can use a local MongoDB instance or a free MongoDB Atlas cluster URI.

Start the backend server:

```bash
npm run dev
```

You should see:

```
MongoDB Connected
Server running on port 5000
```

✅ Backend is now running at `http://localhost:5000`

---

### Step 3: Setup Frontend (Mobile App)

Open a **new terminal window/tab** (keep the backend running in the first one):

```bash
# Navigate to mobile folder
cd mobile

# Install dependencies
npm install
```

#### ⚙️ Configure API Base URL

Open `mobile/api/index.ts` and update the `DEV_URL` based on your setup:

```typescript
// If testing on physical phone (Expo Go), use your computer's local IP:
const DEV_URL = 'http://YOUR_LOCAL_IP:5000';

// If testing on web browser or iOS Simulator, you can use:
// const DEV_URL = 'http://localhost:5000';
```

> 💡 **How to find your local IP:**
> ```bash
> # macOS
> ipconfig getifaddr en0
>
> # Windows
> ipconfig
> ```

Start the Expo development server:

```bash
npm start
```

---

### Step 4: Run the App

After running `npm start`, you'll see a QR code in the terminal.

#### 📱 On Physical Device (Recommended)
1. Install **Expo Go** from App Store / Play Store
2. Scan the QR code with your phone camera (iOS) or Expo Go app (Android)
3. Make sure your phone and computer are on the **same WiFi network**

#### 🌐 On Web Browser
1. Press **`w`** in the terminal to open in web browser
2. The app will open at `http://localhost:8081`

> 💡 **Pro Tip for Best Web Results:** For the best mobile-like experience when testing in the browser, install a **Mobile Simulator** browser extension:
> - **Chrome:** Search for "Mobile Simulator" extension in Chrome Web Store
> - This will let you view the app inside an iPhone/Android frame with proper mobile dimensions
> - Much better than just resizing the browser window!

#### 📱 On iOS Simulator (macOS only)
1. Press **`i`** in the terminal
2. Requires Xcode to be installed

#### 🤖 On Android Emulator
1. Press **`a`** in the terminal
2. Requires Android Studio with an AVD configured

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/auth/signup` | Register new user | ❌ |
| `POST` | `/api/auth/login` | Login existing user | ❌ |

### Tasks

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/api/tasks` | Get all user tasks | ✅ |
| `POST` | `/api/tasks` | Create a new task | ✅ |
| `PUT` | `/api/tasks/:id` | Update a task | ✅ |
| `DELETE` | `/api/tasks/:id` | Delete a task | ✅ |

### Query Parameters (GET /api/tasks)

| Parameter | Example | Description |
|-----------|---------|-------------|
| `page` | `?page=1` | Page number for pagination |
| `limit` | `?limit=10` | Number of tasks per page |
| `search` | `?search=meeting` | Search in title & description |
| `status` | `?status=pending` | Filter by status (pending/completed) |

### Example Requests

**Signup:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name": "Fakhir", "email": "fakhir@test.com", "password": "123456"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "fakhir@test.com", "password": "123456"}'
```

**Create Task (with token):**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title": "Complete assignment", "description": "Finish the backend", "status": "pending"}'
```

**Get Tasks with Pagination & Filters:**
```bash
curl -X GET "http://localhost:5000/api/tasks?page=1&limit=10&status=pending&search=meeting" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📮 Postman Collection

A ready-to-use Postman collection is included at:

```
backend/postman_collection.json
```

**How to import:**
1. Open Postman
2. Click **Import** button (top left)
3. Select the `postman_collection.json` file
4. All endpoints will be loaded with example request bodies

> 💡 After logging in, copy the `token` from the response and set it as `{{token}}` variable in Postman, or paste it directly in the Authorization header as `Bearer <token>`.

---

## ✨ Features Implemented

### ✅ Mandatory Requirements
- [x] **JWT Authentication** — Signup & Login with secure token generation
- [x] **Password Hashing** — bcrypt with salt rounds
- [x] **Protected Routes** — Middleware validates JWT on every request
- [x] **Pagination** — `?page=1&limit=10`
- [x] **Search** — `?search=meeting` (searches title & description)
- [x] **Status Filter** — `?status=pending` or `?status=completed`
- [x] **MongoDB Schema Design** — Proper validation, indexes, and references
- [x] **Clean Architecture** — Separated routes, controllers, models, middleware
- [x] **Error Handling** — Centralized error middleware with proper HTTP status codes
- [x] **Ownership Checks** — Users can only access/modify their own tasks

### ✅ Bonus Task
- [x] **`lastActiveAt` Tracking** — Updated on login and on every protected route access via middleware (async, non-blocking)

### ✅ Delivery Standards
- [x] `.env.example` file
- [x] `README.md` with complete setup instructions
- [x] Postman Collection for API testing
- [x] Proper project folder structure
- [x] Clean, modular, maintainable code (ES6 Modules)

### ✅ Frontend (Mobile App)
- [x] Beautiful dark-mode UI with professional styling
- [x] Login & Signup screens with form validation
- [x] Task dashboard with stats, filters, and status toggles
- [x] Create new task screen
- [x] Delete tasks with optimistic updates
- [x] Pull-to-refresh functionality
- [x] JWT token persistence across app restarts
- [x] Auto-redirect based on auth state

---

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/taskapp` |
| `JWT_SECRET` | Secret key for JWT signing | `my_super_secret_key` |

---

## 👨‍💻 Author

**Fakhir Iqbal**

---

## 📄 License

This project is built as a trial assignment submission.
