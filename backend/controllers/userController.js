import { User } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { name, email, password, phone, username } = req.body;

  if (!name || !email || !password || !phone || !username) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  // chech if email or username exists

  let findUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (findUser) {
    res.status(400);
    throw new Error("Email or password already exists");
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

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  let findUser = await User.findOne({ email });

  if (!findUser) {
    res.status(404);
    throw new Error("Invalid Email");
  }

  // check if password exists

  if (password == findUser.password) {
    res.send(findUser);
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
};
