import mongoose from "mongoose";

export const Db = async () => {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("database connected ");
  });
};
