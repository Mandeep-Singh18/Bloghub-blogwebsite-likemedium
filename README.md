# 📝 BlogHub – A Medium-like Blogging Platform

**BlogHub** is a full-stack blogging application inspired by Medium. It enables users to create, edit, delete and share blog posts with a clean and intuitive interface.

## 🌐 Live Demo

Check out the live version here: [bloghub-eta.vercel.app](https://bloghub-eta.vercel.app)

## 🖼️ Demo

   Here’s a quick look at the UI:
   ![Screenshot 2025-05-14 122304](https://github.com/user-attachments/assets/8490aecd-28e3-4603-b304-16aac98a1c90)
   ![Screenshot 2025-05-14 122323](https://github.com/user-attachments/assets/48e9d5ee-9c0b-4252-8e45-0c4e5a98ebf5)
   ![Screenshot 2025-05-14 123127](https://github.com/user-attachments/assets/5e2bbf82-98a7-4d5e-a71e-62322d72e1e0)
   ![Screenshot 2025-05-14 123148](https://github.com/user-attachments/assets/110ee0ee-0028-42f8-a357-774387fb26f6)

## 🚀 Tech Stack

- **Frontend**: React, TypeScript,  
- **Backend**: Hono (a lightweight web framework) running on Cloudflare Workers
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: JWT
- **Deployment**: Vercel (Frontend), Cloudflare Workers (Backend)

## ✨ Features

- User authentication (Sign up, Sign in, Sign out)
- Create, edit, and delete blog posts
- Rich text editing experience
- Responsive design
- View blogs by different authors

# Project Setup Guide

## Backend Setup

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Install Dependencies:**

   Install all the necessary Node.js packages by running:

   ```bash
   npm install
   ```

3. **Configure the Environment Variables:**

   - **Update the `.env` file:** Add your database connection string to the `.env` file. It should look something like this:

     ```env
     DATABASE_URL="your-database-connection-string"
     ```

   - **Update the `wrangler.jsonc` file:** Configure the `wrangler.toml` file with your compatibility date and environment variables. Here’s an example of how it should look:

     ```toml
     "vars":{
        DATABASE_URL = "your-connection-pool-string"
        JWT_SECRET = "your-jwt-secret"
        }
     ```

4. **Set Up Prisma:**

   Initialize and apply your Prisma schema migrations:

   ```bash
   npx prisma migrate dev --name init_schema
   ```

   Generate the Prisma client:

   ```bash
   npx prisma generate --no-engine
   ```

5. **Start the Backend Server:**

   Run the development server:

   ```bash
   npm run dev
   ```

6. **Test Your Backend:**

   Import the `medium.postman_collection` file into Postman to test your backend endpoints.

## Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   Install all necessary Node.js packages for the frontend:

   ```bash
   npm install
   ```

3. **Start the Frontend Server:**

   Run the frontend development server:

   ```bash
   npm run dev
   ```

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
