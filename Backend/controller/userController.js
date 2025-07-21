import userModel from '../models/userModel.js';
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Function to create a token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Set token expiration
};

// Controller for user registration
const registerUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    // Validate input fields
    if ([name, email, password].some((field) => !field || field.trim() === '')) {
      return response.status(400).json({ success: false, msg: 'All fields are mandatory' });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ $or: [{ name }, { email }] });
    if (existingUser) {
      return response.status(409).json({ success: false, msg: 'User already registered' });
    }

    // Validate email and password
    if (!validator.isEmail(email)) {
      return response.status(400).json({ success: false, msg: 'Please enter a valid email' });
    }
    if (password.length < 8) {
      return response.status(400).json({ success: false, msg: 'Password length must be at least 8 characters' });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user
    const newUser = new userModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    // Generate a token
    const token = createToken(savedUser._id);

    response.status(201).json({ success: true, token, msg: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
  }
};

// Controller for user login
const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    // Validate input fields
    if (!email || !password) {
      return response.status(400).json({ success: false, msg: 'Email and password are requestuired' });
    }

    // Find the user in the database
    const user = await userModel.findOne({ email });
    if (!user) {
      return response.status(404).json({ success: false, msg: 'User is not registered' });
    }

    // Validate the password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return response.status(401).json({ success: false, msg: 'Invalid credentials' });
    }

    // Generate a token
    const token = createToken(user._id);

    response.status(200).json({ success: true, token, msg: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
  }
};

export { registerUser, loginUser };
