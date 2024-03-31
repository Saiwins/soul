const nodemailer = require('nodemailer');

// Create a transporter with your SMTP configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Your Gmail email address
        pass: 'your_password' // Your Gmail password or app password
    }
});

// Function to send an email
async function sendEmail(to, subject, text) {
    try {
        // Send email
        await transporter.sendMail({
            from: 'your_email@gmail.com', // Sender email address
            to: to, // Recipient email address
            subject: subject, // Email subject
            text: text // Email body
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Example usage
const recipientEmail = 'recipient@example.com'; // The recipient's email address
const emailSubject = 'Hotel Booking Confirmation';
const emailBody = 'Dear guest, Your hotel booking has been confirmed. Here is the address: Hotel ABC, 123 Main St, City: XYZ.';
sendEmail(recipientEmail, emailSubject, emailBody);
