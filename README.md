# Blog App- Fullstack MERN Blog Platform


This is a full-stack Blog Web Application built with the MERN stack (MongoDB, Express.js, React, Node.js). It offers both user and admin functionality, making it suitable for personal blogging or managing a multi-author content platform.

Users can register, sign in, read blog posts, comment on articles, and manage their profiles. Admins can manage all users, posts, and comments through a dedicated dashboard interface.



## 📦 Features

- 🔐 Authentication with JWT (Signin, Signup)
- 🔗 Google Sign-In with Firebase Authentication
- 🧑‍💻 Admin + User dashboard with role-based access
- 📝 Create, update, and delete blog posts (Rich Text + Images)
- 💬 Comment system
- 🔎 Full-text Search
- ☁️ Cloudinary for image uploads
- 📊 Admin analytics (users, posts, comments)
- ⚙️ Environment-based config (dotenv)
- 🌍 Hosted with Render



## 🚀 Live Demo

👉 [Kunnal's Blog](https://blog-app-0smu.onrender.com/)

## 🛠️ Tech Stack Used

### 🎨 Frontend
![frontend](https://skillicons.dev/icons?i=react,tailwindcss,redux,vite,npm)

### 🖥️ Backend
![backend](https://skillicons.dev/icons?i=nodejs,expressjs,npm,postman)
### 📊 Database
![database](https://skillicons.dev/icons?i=mongodb)
### 🔐 Authentication
![auth](https://skillicons.dev/icons?i=firebase)

## 📁 Project Structure

```
Blog-App/
├── api/                 
│   ├── routes/
│   ├── controllers/
│   ├── models/
|   ├── utils/
│   └── index.js
├── client/                
│   ├── src/
│   ├── public/
|   ├── .env               # Frontend environment variables
|   ├── tailwind.config.js
│   ├── vite.config.js
│   └── index.html
├── .env                   # Backend environment variables         
├── package.json
└── README.md
```

## ⚙️ Environment variables
### Backend ```.env ```
```
MONGO=mongodb+srv://yourMongoURI
JWT_SECRET=yourSecretKey

```
### Frontend ```client/.env```
```
VITE_FIREBASE_API_KEY=yourFirebaseApiKey
```

## ⚙️ How to Run Locally

### 🔧 Prerequisites

- Node.js & npm installed
- MongoDB (local or Atlas)
- Firebase project 
- Git installed


### 🧑‍💻 Steps to Start

1. **🧬 Clone the repo**  
   ```
   git clone https://github.com/Kunnal23/Blog-App.git
   cd Blog-App
   ```

2. **📦 Install dependencies**

    ```
    # From root directory

    npm install
    cd client && npm install
    ```

3. **▶️ Run Backend**

    ```
    # from root
    npm run dev
    ```
4. **▶️ Run Frontend**

    ```
    # from root
    cd client
    npm run dev
    ```


## ✒️ Author
**Kunnal Kant Lal-** 
[kantkunnal2311@gmail.com](mailto:kantkunnal2311@gmail.com)

## 🖼️ Screenshots
<div style="display: flex; gap: 20px;">
<img width="1910" height="1014" alt="Screenshot 2025-07-26 155734" src="https://github.com/user-attachments/assets/7b57e5e3-a496-4e7b-86ff-b34cb4307000" />
<br>
<img width="1810" height="857" alt="Screenshot 2025-07-26 160154" src="https://github.com/user-attachments/assets/ca0f7b1f-a12d-4702-9696-b4a188a51ef2" />
<br>
<img width="1765" height="870" alt="Screenshot 2025-07-26 160137" src="https://github.com/user-attachments/assets/74bddb7c-50bd-452e-be5c-f17e0c22e802" />
<br>
<img width="1701" height="802" alt="Screenshot 2025-07-26 155840" src="https://github.com/user-attachments/assets/eb29fc2c-48c4-4a55-a69f-e4e04a23b365" />
<br>
<img width="1844" height="828" alt="Screenshot 2025-07-26 155823" src="https://github.com/user-attachments/assets/94a75d0f-490e-485b-9861-b7d0fe8de821" />
<br>
<img width="1854" height="417" alt="Screenshot 2025-07-26 155811" src="https://github.com/user-attachments/assets/b6c660e6-a84b-411a-bf96-40bfa8b0d2e2" />
<br>
<img width="1866" height="1023" alt="Screenshot 2025-07-26 155802" src="https://github.com/user-attachments/assets/b732c515-9492-4d07-a296-c2b35080ca1e" />
<br>
<img width="1861" height="999" alt="Screenshot 2025-07-26 155747" src="https://github.com/user-attachments/assets/01aaab8c-0d85-4214-8c2f-68743935eb49" />
</div>
