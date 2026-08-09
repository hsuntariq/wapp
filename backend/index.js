import express from "express";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import { userRouter } from "./apis/userApis.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { connectDB } from "./config/connect.js";
import dns from "dns";
import cors from "cors";
import { chatRouter } from "./apis/chatApi.js";

dns.setServers(["8.8.8.8"]);

const app = express();

app.use(cors());

// convert/parse to json

app.use(express.json());
app.use(express.urlencoded());

// connect to db

connectDB();

//apis => users,chats ...

app.use("/", userRouter);
app.use("/", chatRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT.yellow}`);
});
