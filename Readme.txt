######### MERN Stack Todo App




## Introduction
This is a simple Todo application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app allows users to create, read, update, and delete their tasks efficiently.









## Prerequisites
To run this application, ensure you have the following installed on your machine:
- **Node.js**: [Download here](https://nodejs.org/)
- **MongoDB**: You can either install a local MongoDB GUI (like MongoDB Compass) or use an online service such as MongoDB Atlas.







## Setup Instructions
### 1. Configure Environment Variables

Before running the application, create a `.env` file in the root of your backend project and include the following variables:
===========
PORT=4000
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongodb://localhost:27017/prod2  # Replace with your MongoDB Atlas URI if using online
FRONTEND_URL=http://localhost:3000
==========









### 2. Install Dependencies
Navigate to your project directory in the terminal and install the required Node.js packages. Run the following command for both the backend and frontend:

=========
cd backend
npm install
==========


Then, navigate to your frontend folder:
=============
cd ../frontend
npm install
=============












### 3. Running the Application
To run both the frontend and backend applications, you can use Visual Studio Code or any text editor of your choice.










#### Backend
To start the backend server, navigate to the backend directory and run:

==========
npm run dev
==========







#### Frontend
To start the frontend application, navigate to the frontend directory and run:

===========
npm start
===========






### 4. Access the Application
Once both servers are running, you can access your Todo app by opening your browser and navigating to:
=====================
http://localhost:3000
=====================




## Conclusion
Your Todo app should now be running smoothly! Feel free to explore the features and functionalities. For any issues or suggestions, please reach out.