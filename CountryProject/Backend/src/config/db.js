import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected At :", conn.connection.host);
    console.log("Database Name :", conn.connection.name);
  } catch (error) {
    console.log("Error connecting DB", error);
    process.exit(1);
  }
};

export default ConnectDb;
