import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

/* -------------------------------------------------------------------------- */
/*                              // ? Custom Hooks                             */
/* -------------------------------------------------------------------------- */

// ! Methods to Encrypt Password : Before Saving User
// Pre middleware for 'save' operation
userSchema.pre("save", async function (next) {
  const user = this;
  // check is password is modified or a new user is created
  if (!user.isModified("password")) return next();
  try {
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// ! Methods to Compare Password during Authentication

userSchema.methods.isPasswordCorrect = async function (password) {
  try {
    // Use bcrypt to compare password with hashed password.
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new ApiError(400, "Password is incorrect");
  }
};

// ! Methods to Generate Access Token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// ! Methods to Generate Refresh Token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
