import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
function dbConnect() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.error(err);
    });
}

export default dbConnect;
