import { Chat } from "../models/chatModels.js";

export const addMessage = async (req, res) => {
  const { message } = req.body;
  const { sender_id, receiver_id } = req.params;

  //   check if the chat already exists

  let checkExisting = await Chat.findOne({
    $or: [
      { $and: [{ sender_id: sender_id }, { receiver_id: receiver_id }] },
      { $and: [{ sender_id: receiver_id }, { receiver_id: sender_id }] },
    ],
  });

  //   if the chat is present,use the same chat
  if (checkExisting) {
    checkExisting.messages.push({ message, time: Date.now() });
    checkExisting.save();
    res.send(checkExisting);
  } else {
    let createdChat = await Chat.create({
      sender_id,
      receiver_id,
      messages: { message, time: Date.now() },
    });
    res.send(createdChat);
  }
};

// get my chats
export const getMyChats = async (req, res) => {
  const { user_id } = req.params;

  let myChats = await Chat.find({
    $or: [{ sender_id: user_id }, { receiver_id: user_id }],
  }).populate("receiver_id");

  res.send(myChats);
};
