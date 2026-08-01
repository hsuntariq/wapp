import { User } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { name, email, password, phone, username } = req.body;

  if (!name || !email || !password || !phone || !username) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  let createdUser = await User.create({
    name,
    email,
    password,
    phone,
    username,
  });

  res.send(createdUser);
};

export const loginUser = (req, res) => {
  res.send("user logged in");
};
