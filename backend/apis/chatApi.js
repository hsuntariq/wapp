import express from "express";
import {
  addMessage,
  getMyChats,
  getSpecificChat,
} from "../controllers/chatController.js";

export const chatRouter = express.Router();

chatRouter.post("/add-message/:sender_id/:receiver_id", addMessage);
chatRouter.get("/get-chats/:user_id", getMyChats);
chatRouter.get("/get-specific-chat/:sender_id/:receiver_id", getSpecificChat);
