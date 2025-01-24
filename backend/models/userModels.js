import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    emailVerificationToken: { type: String },
    emailVerificationExpires: { type: Date },
    storedResetToken: { type: String },
    resetTokenExpiry: { type: Date },

    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
