import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    messages: {
      type: Array,
    },
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Chat = mongoose.model("Chat", chatSchema);
