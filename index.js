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
// const corsOptions = {
//   origin: "http://localhost:3000", // Frontend origin
//   origin: "https://incandescent-selkie-a51894.netlify.app", // Frontend origin
//   credentials: true,              // Allow cookies to be sent
// };
// app.use(cors(corsOptions));

// const allowedOrigins = ['http://localhost:3000', 'https://serene-daffodil-5eaf62.netlify.app'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   credentials: true
// }));
const allowedOrigins = [
  'http://localhost:3000',
  'https://serene-daffodil-5eaf62.netlify.app',
  'https://incandescent-selkie-a51894.netlify.app'
];
// https://incandescent-selkie-a51894.netlify.app

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// app.use(cors({
//   origin: true,
//   credentials: true
// }));


// Logging middleware (optional for debugging)
// app.use((req, res, next) => {
//   console.log("Request Cookies:", req.cookies);
//   console.log("Request Headers:", req.headers.authorization);
//   next();
// });

app.get('/',(req,res)=>{
  res.send("Welcome to the API")
})

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