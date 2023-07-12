# Backend Node.js Express API

This repository contains the backend code for a Node.js Express API. It provides various routes and functionality for authentication, user management, product management, cart management, order management, and Stripe integration for checkout.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js 
- MongoDB 

### Installation

1. Clone the repository:

   ```bash
   https://github.com/Nomekuma/Backend.git
   ```

2. Install the dependencies:

   ```bash
   cd Backend
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and provide the following environment variables:

   ```
   JWT_SEC=<your_JWT_secret_key>
   PASS_SEC=<your_CryptoJS_password>
   STRIPE_KEY=<your_Stripe_API_key>
   PORT=<server_port>
   MONGO_URL=<your_MongoDB_connection_URL>
   ```

   Make sure to replace `<your_JWT_secret_key>`, `<your_CryptoJS_password>`, `<your_Stripe_API_key>`, `<server_port>`, and `<your_MongoDB_connection_URL>` with your actual values.

### Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will start running on the specified port (`PORT`) or at default 5000.

2. Access the API routes:

   - Authentication: `/api/auth`
   - User management: `/api/users`
   - Product management: `/api/products`
   - Cart management: `/api/carts`
   - Order management: `/api/orders`
   - Checkout with Stripe: `/api/checkout`

   Use an API testing tool like [Postman](https://www.postman.com/) to interact with the API endpoints.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, feel free to contact me at t.gunness35@gmail.com.
