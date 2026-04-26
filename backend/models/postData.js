import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
    timestamps: true
});

const Post = mongoose.model("posts", postSchema);
export default Post;