const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Account = require('../models/account');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAccount = new Account({ username, password: hashedPassword });

    await newAccount.save();
    res.status(201).json({ message: 'Account created' });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const account = await User.findOne({ username });
    if (!account || !(await bcrypt.compare(password, account.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: account._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
    res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in' });
});

module.exports = router;