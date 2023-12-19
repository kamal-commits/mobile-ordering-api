import express from "express";

import mongoose from "mongoose";
const app = express();
import cors from "cors";
// import dataRoutes from "./routes/routes.js";

import productRoute from "./routes/productRoute.js";
import dotenv from "dotenv";
import { insertDummyData } from "./controllers/productController.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then((db) => {
    console.log("Database Connected");
    // insertDummyData();
    app.listen(PORT, () => {
      console.log(db?.connection?.host);
      console.log(`server running on port ${PORT}`);

    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/v1/product", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Mobile Ordering API server");
});
