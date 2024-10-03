# Service-Provider_App

## Note:
- I successfully developed a full-fledged service provider app, covering both the frontend and backend, using the MERN stack in a short time.
- The app includes essential features like OTP-based sign-up/login, KYC verification, booking management, and user authentication, ensuring a seamless user experience.
- With a bit more time, I could have refined the UI further to make it more visually appealing and enhanced the overall functionality to make it even better.
  

## Technologies Used

- Backend:
  - Node.js: A server-side JavaScript runtime environment.
  - Express: A web application framework for Node.js.
  - Dotenv: A module for loading environment variables from a .env file.
  - nodemon - For automatically restarting the server during development.
  - jsonwebtoken - For generating and verifying JSON Web Tokens for user authentication.
 
- Testing the Controller:
  - Use Postman or any other API testing tool to make HTTP requests and test the endpoints.
  - POST /api/bookings/create: Create a booking.
  - GET /api/bookings/requests: Get booking requests.
  - POST /api/bookings/:id/accept: Accept a booking.
  - POST /api/bookings/:id/reject: Reject a booking.
  - GET /api/bookings/history: Get booking history.
 
