# Alpha Furniture E-Commerce App

## Overview

Alpha Furniture is an e-commerce platform for furniture, designed to offer a seamless shopping experience for customers and efficient management tools for administrators. This application leverages a robust tech stack to ensure high performance, security, and user satisfaction.

## Technologies Used

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Payment Gateway:** Stripe
- **API Management:** React Query
- **Languages:** JavaScript

## Features

### General Features

- **User Authentication & Authorization:** Secure login and registration using JWT. Email verification and password reset functionalities are included.
- **Product Management:** Admins can add, update, and delete products.
- **Order Management:** Admins can track the status of orders, and users can view their order history.
- **Dynamic Search:** Enhanced search functionality with filtering, sorting, and pagination.
- **Payment Integration:** Secure and efficient payment processing using the Stripe payment gateway.

### User Features

- **Browse Products:** Users can browse through a wide range of furniture products.
- **Order Products:** Users can place orders for products, track their order status, and view their order history.
- **Profile Management:** Users can manage their profile information and view their purchase history.

### Admin Features

- **Product Addition:** Admins can add new products to the catalog.
- **Order Tracking:** Admins can track and update the status of customer orders.
- **User Management:** Admins can manage user accounts.

## Installation

### Prerequisites

- Node.js
- MongoDB
- Stripe Account

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/michealken30/e-comm-funiture.git

   ```

2. **Install dependencies:**

   ```bash
   npm install
   cd backend
   npm install
   cd ..
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email_user
   EMAIL_PASS=your_email_password
   ```

4. **Run the application:**

   ```bash
   npm run dev
   ```

   Frontend Live 'https://e-comm-funiture.vercel.app/'
   The application will be available at `http://localhost:5173`.

## Usage

### Frontend

- The frontend of the application is built using React. React Query is used to manage API calls efficiently while maintaining high code quality.

### Backend

- The backend is built using Node.js and Express. MongoDB is used as the database to store user, product, and order information.

### API Endpoints

- **User Authentication:**

  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - User login
  - `POST /api/auth/verify-email` - Email verification
  - `POST /api/auth/forgot-password` - Forgot password
  - `POST /api/auth/reset-password` - Reset password

- **Product Management:**

  - `GET /api/products` - Get all products with support for filtering, sorting, and pagination
  - `POST /api/products` - Add a new product (Admin only)
  - `PUT /api/products/:id` - Update a product (Admin only)
  - `DELETE /api/products/:id` - Delete a product (Admin only)

- **Order Management:**
  - `POST /api/orders` - Place a new order
  - `GET /api/orders` - Get all orders (Admin only)
  - `GET /api/orders/:id` - Get a single order
  - `PUT /api/orders/:id` - Update order status (Admin only)

### Payment Integration

- Stripe is integrated for handling payments. Users can pay for their orders securely through the Stripe payment gateway.

## Contributing

We welcome contributions to Alpha Furniture. To contribute, please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

## Contact

For any inquiries or issues, please contact us at kenneth.oshoogwe@gmail.com

---

Thank you for using Alpha Furniture!
