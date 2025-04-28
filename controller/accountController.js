import Account from '../models/accountModel.js';

// Create a new user account
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await Account.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    const newUser = await Account.create({ username, password });
    res.status(201).json({ message: 'Account created', user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user (basic check)
// Login user (basic check)
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Account.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Respond with userId and username
    res.status(200).json({
      message: 'Login successful',
      userId: user._id,
      username: user.username  // Add the username to the response
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

