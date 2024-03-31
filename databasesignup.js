// Assuming you have set up a MongoDB database connection
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Assuming you have a User model

const app = express();
app.use(express.json());

// Route to handle user signup
app.post('/signup', async (req, res) => {
    try {
        // Extract user signup data from request body
        const { username, password, email } = req.body;

        // Check if username or email already exists in the database
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ error: 'Username or email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        });

        // Save the user document to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
