import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";

dotenv.config({ path: ".env" });
const port = process.env.PORT || 4000;
// Connect to DB
databaseConnection();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // Frontend origin
  credentials: true,              // Allow cookies to be sent
};
app.use(cors(corsOptions));

// Logging middleware (optional for debugging)
app.use((req, res, next) => {
  console.log("Request Cookies:", req.cookies);
  console.log("Request Headers:", req.headers.authorization);
  next();
});

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});































// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./config/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import tweetRoute from "./routes/tweetRoute.js";
// import cors from "cors";
// dotenv.config({
//     path:".env"
// })
// databaseConnection();
// const app = express(); 
// // middlewares
// app.use(express.urlencoded({
//     extended:true
// }));
// app.use(express.json());
// app.use(cookieParser());
// const corsOptions = {
//     origin:"http://localhost:3000",
//     credentials:true
// }
// app.use(cors(corsOptions));
// // api
// app.use("/api/v1/user",userRoute);
// app.use("/api/v1/tweet", tweetRoute);
 

// app.listen(process.env.PORT,() => {
//     console.log(`Server listen at port ${process.env.PORT}`);
// })