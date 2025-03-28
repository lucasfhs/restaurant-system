# Order Control Panel

A complete **Order Management System** for restaurants and delivery services. Orders appear instantly in the kitchen as soon as they are placed by customers.

## Features

- **Real-time Order Processing:** Customers place orders, and they appear instantly in the kitchen.
- **Order Status Management:** The kitchen can update order status to "In Preparation" or "Ready".
- **(Optional) Notifications:** Customers receive real-time updates on their order status.

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, MUI, Socket.io-client, Chart.js or Recharts
- **Backend:** Node.js (Fastify or Express), Socket.io, PostgreSQL, Redis (for real-time notifications)
- **Extras (Optional):** Google Maps API (for delivery tracking), Stripe or Mercado Pago (for online payments), OAuth authentication

## System Modules

### **Customer Module (Order Placement)**

- Product catalog (restaurant menu)
- Product selection and customization (e.g., no onions, extra sauce)
- Shopping cart
- Order checkout with optional online payment
- Real-time notifications for order status updates

### **Kitchen Module (Order Management)**

- Live order panel with real-time updates
- Order status options: **Received → In Preparation → Ready → Out for Delivery**
- Estimated completion time
- Filters to sort orders by status

### **Delivery Module (If applicable)**

- List of ready orders for delivery
- Update status to **Order Delivered**
- Route tracking via Google Maps API

### **Admin Module (System Management)**

- Product and pricing management
- Order history and reports
- User management (kitchen staff, delivery personnel, customers)
- Dashboard with statistics (daily orders, average ticket, best-selling products)

## Installation & Setup

### **Backend Setup**

1. Clone the repository:
   ```sh
   git clone <repository url>
   ```
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables in a `.env` file:
   ```env
   DATABASE_URL=your_postgresql_url
   REDIS_URL=your_redis_url
   SOCKET_PORT=your_socket_port
   ```
5. Start the backend server:
   ```sh
   npm run dev
   ```

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm run dev
   ```

## Contributing

Feel free to submit issues, feature requests, or pull requests to enhance the project!

## License

This project is licensed under the MIT License.

---

### Notes:

- WebSockets ensure real-time updates for all users.
- PostgreSQL is used for structured data storage, and Redis is utilized for caching and notifications.
- Additional modules (Delivery, Online Payment, Authentication) can be enabled as needed.

