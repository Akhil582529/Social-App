import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODBURI) {
      throw new Error("MONGODBURI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // stop app if DB fails
  }
};

export default connectDB;