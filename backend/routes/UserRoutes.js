import express from "express";
import {
  Google,
  Login,
  Register,
  requestPasswordReset,
  resetPassword,
  verifyEmail,
} from "../contollers/UserControllers.js";

const UserRoute = express.Router();

UserRoute.post("/register", Register);
UserRoute.get("/verify-email/:token", verifyEmail);
UserRoute.post("/login", Login);
UserRoute.post("/google", Google);
UserRoute.post("/request-password-reset", requestPasswordReset);
UserRoute.post("/reset-password", resetPassword);

export default UserRoute;
