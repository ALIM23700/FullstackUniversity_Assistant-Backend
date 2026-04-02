# Fullstack University Assistant Backend

Express.js + MongoDB backend for the Fullstack University Assistant application.  
Handles user authentication, class management, assignments, notices, and admin operations.

## ⚡ Base URL & Frontend Link

- **Backend Base URL:**  
[(https://fullstackuniversity-assistant-backend-1.onrender.com)]

Frontend repo link: [FullstackUniversity_Assistant-Frontend](https://github.com/ALIM23700/FullstackUniversity_Assistant-Frontend)

## 🛠 Tech Stack

- Node.js & Express.js  
- MongoDB (Atlas / Cloud)  
- Mongoose for database modeling  
- JWT (JSON Web Tokens) for authentication  
- Bcrypt for password hashing  
- CORS for cross-origin requests  
- Dotenv for environment variables  

---

## ✨ Features

- Role-based authentication (student / teacher/admin)  
- Students: view classes, assignments, class tests, CGPA, resources, next-day notice  
- Teachers/Admin: add/edit/delete classes, assignments, class tests, routines  
- Approve next-day classes for automatic student notification  
- Department-based access control  
- CRUD for academic resources  

---

# ⚙️ Setup Instructions

1. Clone the backend repo  
git clone https://github.com/ALIM23700/FullstackEcommers_Backend.git

2. Navigate into the project folder  
cd FullstackEcommers_Backend

3. Install dependencies  
npm install

4. Create a `.env` file with the following variables  
Example:  
MONGO_URI=<your_mongodb_connection_string>  
JWT_SECRET=<your_jwt_secret>  
PORT=4000

5. Run the server locally  
npm start

6. Server will run at:  
http://localhost:4000

---

## 📁 Project Structure

FullstackUniversity_Backend/  
├── controllers/       → Handles request logic  
├── models/            → MongoDB schemas  
├── routes/            → API routes  
├── middleware/        → Authentication & error handling  
├── utils/             → Helper functions  
├── .env               → Environment variables  
├── server.js          → Entry point  
└── package.json  

---

## 🚀 Future Improvements

- Add unit and integration tests  
- Enhance error handling and logging  
- Implement file upload for academic resources  
- Improve performance & query optimization  
- Add email notifications for class updates  

---

## 📄 License

MIT License  
You are free to use, modify, and distribute this project
