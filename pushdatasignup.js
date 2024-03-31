// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Parse incoming request bodies
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Mongoose schema for User
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

// Handle POST requests to '/signup' endpoint
app.post('/signup', async (req, res) => {
    try {
        // Extract user data from request body
        const userData = req.body;

        // Create a new User document with the extracted data
        const newUser = new User(userData);

        // Save the new User document to the database
        await newUser.save();

        // Respond with a success message
        res.json({ message: 'User signed up successfully' });
    } catch (error) {
        // Respond with an error message if an error occurs
        console.error(error);
        res.status(500).json({ error: 'An error occurred during signup' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
