import mongoose from "mongoose";
const { models, model, Schema } = mongoose;

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
//modifica el objeto que devuelve mongo, en este caso cambiamos _id * id
//y eliminamos _id y __v
postSchema.set("toJSON", {
  transform: (document, returnedObjet) => {
    returnedObjet.id = returnedObjet._id;
    delete returnedObjet._id;
    delete returnedObjet.__v;
  },
});

module.exports = models.Post || model("Post", postSchema);
