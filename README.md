# ShopFusion - Full Stack MERN E-Commerce Application

A full-stack e-commerce web application built using the MERN stack. Users can browse products, register/login, add items to cart, place orders, make payments, and receive email notifications. The application also includes an admin dashboard for managing products, users, and orders.
---
## Features
- User Authentication (JWT)
- Product Management (Admin)
- Shopping Cart
- Order Management
- Razorpay Payment Integration
- Email Notifications (Nodemailer)
- Admin Dashboard
## Tech Stack
### Frontend
- React.js (Create React App)
- React Router
- Redux Toolkit
- Axios
- Bootstrap
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Nodemailer
- Razorpa
## Installation
### Clone Repository
```bash
git clone <repository-url>
cd ShopFusion
``
### Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```
Run Backend
```bash
npm start
```
### Frontend Setup
```bash
cd frontend
npm install
npm start
```
---
## Folder Structure
```
backend/
frontend/
```
---
## Future Improvements
- Product Reviews
- Search & Filter
- Order Tracking
- Coupon System
---
## Author
Konala Doshnavi Devi