// Example server-side implementation using Express.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to verify the UPI ID
app.post('/verify_upi', (req, res) => {
    const { upiId } = req.body;
    // Call the verify_upi function to validate the UPI ID
    const valid = verify_upi(upiId);
    res.json({ valid }); // Respond with the validation result
});

// Endpoint to initiate the payment
app.post('/initiate_payment', (req, res) => {
    // Logic to initiate the payment
    // This could involve interacting with a payment gateway or bank API
    // For demonstration purposes, we'll simply return a success response
    res.sendStatus(200); // Respond with a success status code
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Function to verify the UPI ID
function verify_upi(upiId) {
    // Assume some validation logic here
    if (upiId.includes('@')) {
        // UPI ID is valid
        return true;
    } else {
        // UPI ID is not valid
        return false;
    }
}
