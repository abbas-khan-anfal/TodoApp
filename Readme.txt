Sure! Here’s the updated README:

---

# Todo App

A simple web application for managing tasks, featuring full CRUD operations and user authentication. The app consists of a React frontend and a Node.js/Express backend, with data stored in MongoDB Atlas.

## Features

- **User Authentication**: Secure user registration and login.
- **Task Management**: 
  - **Create**: Add new tasks.
  - **Read**: View all tasks.
  - **Update**: Edit tasks.
  - **Delete**: Remove tasks.

## Project Structure

- **Frontend**: Located in the `todo` folder, built with React.
- **Backend**: Located in the `backend` folder, built with Node.js and Express.

## Requirements

- Node.js
- Visual Studio Code

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd todo-app
   ```

3. **Install dependencies**:

   - **Frontend**:
     ```bash
     cd todo
     npm install
     ```

   - **Backend**:
     ```bash
     cd backend
     npm install
     ```

## Running the Application

1. **Start the frontend**:
   ```bash
   cd todo
   npm start
   ```

2. **Start the backend**:
   ```bash
   cd backend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the app.

## Environment Variables

Ensure the following environment variables are set in the `backend/.env` file:

```
PORT = 4000
JWT_SECRET = keyjwtsecret
MONGODB_URI = mongodb://localhost:27017/prod2
FRONTEND_URL = http://localhost:3000
```

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.

--- 
