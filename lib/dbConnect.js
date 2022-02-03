import mongoose from "mongoose";
const { model, Schema } = mongoose;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
function dbConnect() {
  mongoose
    .connect(MONGODB_URI)
    // .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.error(err);
    });
}

export default dbConnect;

// const MONGODB_URI =
//   "mongodb+srv://josecruzigle:clPhOsceZck2wFgz@cluster0.wpivt.mongodb.net/blomail?retryWrites=true&w=majority";
