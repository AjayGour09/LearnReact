import bcrypt from "bcrypt";
import User from "../models/signUp.model.js";

export const SignUp = async (req, res, next) => {
  try {
    const { Username, email, number, password, confirmPassword } = req.body;

    if (!Username || !email || !number || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      Username,
      email,
      number,
      password: hashPassword,
    });

    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    next(error);
  }
};
