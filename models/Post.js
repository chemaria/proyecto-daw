import mongoose from "mongoose";
const { model, Schema } = mongoose;

const postSchema = new Schema({
  img: String,
  tittle: String,
  subtittle: String,
  description: String,
  shortdesc: String,
  visible: Boolean,
  date_publish: Date,
  likes: Number,
});

const Post = model("Post", postSchema);
