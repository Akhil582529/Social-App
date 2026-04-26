import express from "express";
import Post from "../../models/postData.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const post = await Post.create({
      title,
      content,
      author: req.user.id, 
    });

    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;