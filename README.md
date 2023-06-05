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

## Key Accpmplishments Achieved
I wanted to share some of the key accomplishments I achieved during this test project :
- Keeping the scalability and the security in my mind I decided to use passport.js for authentication and authorization.
- I used BullMQ along with its Flow-Jobs to provide the user with a seamless experience for its video trans-coding and stream processing.  I used BullMQ workers to run the compute intensive task in the background so that user gets the best experience while using the application.
- Integrated the bull dashboard as well so that the dev can see and mange the background jobs.
- Decided to use fluent-ffmpeg for the video trans-coding and streaming processing since it provides so many out of the box features which - can enhance the user experience and the developers workflow.
- Transcoded the uploaded video into HLS compatible format to allow for adaptive bit rate compliance following the industry standards for a media streaming server.
- Used the express-json-validator-middleware which is an abstraction on AJV , and provides one of the fastest schema validations and scalability.
- For the front-end I decided to use React since it offers a component-based architecture, virtual DOM, unidirectional data flow, large community and ecosystem, and cross-platform support for building modern web applications.
- I integrated Redux toolkit since it is one of the best state management library along with high scalability as well.
- RTK Query was also used which allows us to update our stored state by polling the server for any updated values to provide the user with real-time-updates.
- For the styling I used TailwindCSS to give life to the web application so that it is appealing to the end user.
- Used proper separations of concerns by delegating our state management and server queries separately. (Redux toolkit and RTK query)
- Furthermore I used the PLYR react video player and configured it to make it compatible with HLS, which handles on the fly quality changes depending on your internet connection as well as handling the buffer amount.

## Improvements
- We can go with a micro service architecture approach to improve the future scalability.
- We can use Amazon CloudFront media streaming for low latency video on demand.
- We can use PM2 module to horizontally scale our Nodejs application so that we can fully utilise our instance resources.

