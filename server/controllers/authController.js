const Users = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");


const generateToken = (userId, secret, expiresIn) => {
  return jwt.sign({ userId }, secret, { expiresIn });
};

const generateOTP = (limit) => {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < limit; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};
const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not found" });
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log(user.id);
    if (user.verified) {
      const token = generateToken(
        user.id,
        process.env.JWT_SECRET,
        process.env.JWT_EXPIRES_IN
      );
      console.log(token);
      res.cookie("token", token, {
        httpOnly: false,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({ message: "Login successful", token });
    } else {
      const verification_otp = generateOTP(6);
      user.verification_otp = verification_otp;
      const newUser = await user.save();
      console.log(newUser)
      await sendEmail(
        user.email,
        "Verify Your AuthCrud Account",
        `Your OTP IS: ${verification_otp}`
      );
      return res.status(403).json({ message: "User not verified" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Login Error", error });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful" });
};

const signup = async (req, res) => {
  const { username, email, password, mobile_no } = req.body;
  console.log(username, email, password);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const verification_otp = generateOTP(6);
    const user = new Users({
      username,
      email,
      password: hashedPassword,
      mobile_no,
      verification_otp,
    });
    await user.save();
    await sendEmail(
      user.email,
      "Verify Your AuthCrud Account",
      `Your OTP IS: ${verification_otp}`
    );
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
};

const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  console.log(email, otp);
  try {
    const user = await Users.findOne({ email });
    console.log(user.verification_otp)
    if (!user) {
      return res.status(400).json({ message: "User Not found" });
    }
    if (user.verification_otp === otp) {
      user.verified = true;
      user.verification_otp = "";
      await user.save();
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ message: "Verification Error", error });
  }
};

module.exports = { login, logout, signup, verifyOTP };
