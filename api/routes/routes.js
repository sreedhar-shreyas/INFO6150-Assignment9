const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/models.js');


router.post('/user/create', async (req, res) => {
    const { fullName, email, password } = req.body;
  
    if (!fullName || !email || !password) {
      return res.status(400).send('Missing required fields in the request body');
    }
  
    if (!email || typeof email !== 'string' || !email.match(/^[a-zA-Z0-9._-]+@northeastern\.edu$/)) {
      return res.status(400).send('Invalid emailid - Please use your northeastern email');
    }
  
    if (password.length < 8) {
      return res.status(400).send('Password must be at least 8 characters long');
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({ fullName, email, password: hashedPassword, salt });
      await user.save();
      res.send(`User ${user.email} created successfully`);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send('Internal Server Error - Error creating user - Check Email Id, User might already exist');
    }
  });
router.put('/user/edit', async (req, res) => {
    const { email, fullName, password } = req.body;
    if (!fullName && !password) {
      return res.status(400).send('Please enter data to update!');
    }
  
    if (!email || typeof email !== 'string') {
      return res.status(400).send('Invalid email ');
    }
  
    if (fullName && typeof fullName !== 'string') {
      return res.status(400).send('Invalid name');
    }
  
    if (password && (typeof password !== 'string' || password.length < 8)) {
      return res.status(400).send('Invalid password. Password must be at least 8 characters long');
    }
  
    try {
  
      const user = await User.findOne({ email });
  
    
      if (!user) {
        return res.status(404).send(' User not found');
      }
  
  
      if (fullName) {
        user.fullName = fullName;
      }
  
      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }
  
  
      await user.save();
  
      res.send(`User ${user.fullName} details updated successfully`);
    } catch (error) {
      console.error('Error updating user details:', error);
      res.status(500).send('Error in updating user details');
    }
  });
  
  
  
router.delete('/user/delete', async (req, res) => {
    const { email } = req.body;
  
    if (!email || typeof email !== 'string') {
      return res.status(400).send('Invalid email format');
    }
  
    try {
      const deletedUser = await User.findOneAndDelete({ email });
  
      if (!deletedUser) {
        return res.status(404).send('User not found');
      }
  
      res.send('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Error in deleting user');
    }
  });
  
  router.get('/user/getAll', async (req, res) => {
    try {
      const users = await User.find({}, 'fullName email password salt');
      res.json(users);
    } catch (error) {
      console.error('Error in getting all users:', error);
      res.status(500).send('Error in getting All users');
    }
  });


  module.exports = router;