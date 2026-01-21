import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import ConnectDb from "./src/config/db.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/auth", authrouter);

app.get("/", (req, res) => {
  res.json({ message: "Server Connected" });
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;

  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("Servet Connected At Port :", port);
  ConnectDb();
});
