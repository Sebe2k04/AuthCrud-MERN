# AuthCrud-MERN  

A full-stack authentication and CRUD (Create, Read, Update, Delete) application built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). This project provides user authentication with JWT and essential CRUD operations.  

## 🚀 Features  

- User Authentication (Register/Login/Logout)  
- JWT-based Authentication  
- Protected Routes  
- CRUD Operations on User Data  
- Secure Password Hashing (bcrypt)  
- MongoDB for Data Storage  
- Express.js Backend API  
- React Frontend  

## 🛠️ Tech Stack  

- **Frontend:** React, React Router, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Authentication:** JWT, bcrypt  
- **Others:** CORS, dotenv  

## 📌 Installation  

### 1️⃣ Clone the Repository  

```bash
git clone https://github.com/Sebe2k04/AuthCrud-MERN.git
cd AuthCrud-MERN
```

### 2️⃣ Backend Setup  

```bash
cd backend
npm install
```

#### Create a `.env` file in the `server` folder and add:  

```
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER_NAME="AuthCrud"
JWT_EXPIRES_IN="1d"
NODE_ENV="production"
EMAIL_USER=
EMAIL_PASS=
CLIENT_URL="http://localhost:5173"
```

#### Start the Backend Server  

```bash
npm start
```

### 3️⃣ Frontend Setup  

```bash
cd frontend
npm install
npm start
```
#### Create a `.env` file in the `server` folder and add:  

```
VITE_API_URL = "http://localhost:5555"
```

## 🚀 Usage  

- Open `http://localhost:3000` in your browser.  
- Register or login using valid credentials.  
- Perform CRUD operations on the data.  

## 💡 Future Improvements  

- Role-based authentication  
- Improved UI/UX  
- Deployment on cloud platforms  

## 📜 License  

This project is **open-source** under the [MIT License](LICENSE).  

## Ownership

This project is developed by @Sebe2k04 only

## 🤝 Contributing  

Feel free to fork this repo and submit pull requests.  
