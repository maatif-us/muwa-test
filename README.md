# Muwa Video Enconding and On-boarding System

This is a full-stack web application built for video encoding/uploading tasks. It allows users to upload videos in different resoultions i.e 480, 720, 1080p and in different formats as Mp4, AVI, mov, m4v, webm, ogv etc. The system supports multiple resolutions and formats as input as well as output. The user can regsiter and upload the videos to their profile. A seem-less experience for video transcoding and streaming.

## Features

- Register a new user.
- Upload video.
- Transcdoing of video into different formats.
- Upscale's the video into different resolutions.
- Streaming of the uploaded video.
- Retrieve the list of uploaded videos.
- User authentication and authorization for API endpoints.
- Secure API implementation to protect against common web application attacks.
- User friendly interface.

## Technologies Used

- Backend:
  - Node.js
  - BullMQ
  - Express

- Frontend:
  - React
  - Redux toolkit
  - TailwindCSS

- Database:
  - MongoDB

- Authentication and Authorization:
  - JSON Web Tokens (JWT)
  - Passport

- Version Control:
  - Git (Hosted on GitHub)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/maatif-us/muwa-test
2. Backend Setup:
  - Install Docker
  - Install MongoDB
  - cd to server directory
  - Run npm install
  - Run docker compose build --no-cache
  - Run docker compose up
  - Server will start at http://localhost:3000
3. Frontend Setup:
  - cd /client
  - Run npm install
  - Run npm run dev
  - Server will start at http://localhost:5173

4. Database Setup:
  - Local
    - Install MongoDB
    - Install MongoDB Compass
    - Connect to your local MongoDB
    - Connecttion String:- mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2
  - Production
    - Update the DB_CONNECT in .env with your cluster
    - Start the server

5. Access the Application:

- Open your web browser and visit http://localhost:5173 to access the application.
- Open your web browser and visit http://localhost:3000/admin to access the bull dashboard.

## Backend
The backend of the application is built using Node.js and Express. It provides the API endpoints for managing tasks.

The backend directory contains the following files and folders:

- server.js: The entry point of the backend application.

- routes/: Defines the routes and handlers for the following:-
  - /auth.js: Defines the routes and handlers for the auth-related API
  - /video.js: Defines the routes and handlers for the video-related API

- controllers/: Contains the controller functions for the following.
  - /auth.js: controller functions for handling the logic of auth operations.
  - /videos.js: controller functions for handling the logic of video operations.

- models/: Defines the model for the follwoing to interacting with the MongoDB database.
  - Video.js: Defines the video schema
  - User.js: Defines the user schema

- middleware/: Defines the middleware functions for the follwoing
  - /jwtAuthenticate.js: Middleware for authentication and authorization.
  - /validation.js: Middleware for initialization of validation package.
  - /multerUpload.js: Multer Middleware for uploading and diskStorage.
  - /errorHandler.js: Error handling middleware.
- config/: Defines the configuration for database, BullMQ and passport

## Security Considerations
The application implements secure authentication and authorization using JSON Web Tokens (JWT).
Proper validation and sanitization of user inputs are performed to prevent common web application attacks, such as cross-site scripting (XSS) and SQL injection.
Contributing
