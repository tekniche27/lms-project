import Express from "express";
import mongoose from "mongoose";
import courseRouter from "./routes/course-route.js";
import categoryRouter from "./routes/category-route.js";
import chapterRouter from "./routes/chapter-route.js";
import StripeCustomerRouter from "./routes/stripeCustomer-route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = Express();

app.use(Express.json());

// // Enable CORS for all routes
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

app.use("/api/courses", courseRouter);
app.use("/api/category", categoryRouter);
app.use("/api/chapters", chapterRouter);
app.use("/api/stripeCustomers", StripeCustomerRouter);


mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(process.env.PORT, () => console.log("connected to node port:", process.env.PORT));
  })
  .catch((err) => {
    console.log("mg err", err);
  });
