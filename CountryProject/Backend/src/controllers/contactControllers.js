import ContactUser from "../models/contact.model.js";

export const submitContact = async (req, res, next) => {
  try {
    const { fullname, email, number, message } = req.body;

    if (!fullname || !email || !number || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await ContactUser.create({
      fullname,
      email,
      number,
      message,
    });

    return res
      .status(201)
      .json({ message: "Query submitted successfully" });
  } catch (error) {
    next(error);
  }
};
