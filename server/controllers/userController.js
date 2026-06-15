import User from "../models/User.js";

// Register User
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already registered with this email.",
      });
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
    });

    res.status(201).json({
      message: "Registration successful!",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Incorrect password.",
      });
    }

    res.status(200).json({
      message: "Login successful!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};