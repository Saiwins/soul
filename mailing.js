const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Process payment endpoint
app.post('/process_payment', (req, res) => {
    // Payment processing logic
    // Assuming payment is successful
    const paymentDetails = req.body.paymentDetails;

    // Send email after successful payment
    sendEmail(paymentDetails.email, paymentDetails.hotelDetails)
        .then(() => {
            res.status(200).json({ message: 'Payment successful. Email sent with hotel details.' });
        })
        .catch(error => {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email.' });
        });
});

// Send email function
function sendEmail(email, hotelDetails) {
    // Configure transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Your Gmail email address
            pass: 'your-password' // Your Gmail password or App Password
        }
    });

    // Email content
    const mailOptions = {
        from: 'your-email@gmail.com', // Sender address
        to: email, // Recipient address
        subject: 'Hotel Booking Confirmation', // Email subject
        html: `<p>Thank you for your booking!</p>
               <p>Hotel Details:</p>
               <p>${hotelDetails}</p>` // HTML content with hotel details
    };

    // Send email
    return transporter.sendMail(mailOptions);
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
