import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is a test message to check the server")
})

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};

startServer();