document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Here you can fetch the payment details from the form fields

    // Example: Assuming payment processing logic
    // Replace this with your actual backend request
    // Assuming backend endpoint is /process_payment
    fetch("/process_payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ /* Payment details here */ })
    })
    .then(response => {
        if (response.ok) {
            // Payment successful, now send OTP
            fetch("/send_otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ /* Payment details or user information here */ })
            })
            .then(response => {
                if (response.ok) {
                    // OTP sent successfully
                    document.getElementById("paymentStatus").innerText = "Payment successful! OTP sent for verification.";
                } else {
                    // Failed to send OTP
                    document.getElementById("paymentStatus").innerText = "Payment successful! Failed to send OTP.";
                }
            })
            .catch(error => console.error("Error sending OTP:", error));
        } else {
            document.getElementById("paymentStatus").innerText = "Payment failed. Please try again.";
        }
    })
    .catch(error => console.error("Error processing payment:", error));
});

// Event listener for PhonePe button click
document.querySelector(".phonepe").addEventListener("click", function() {
    window.location.href = "UPIPayments.html"; // Redirect to UPIPayments.html
});

// Event listener for Google Pay button click
document.querySelector(".gpay").addEventListener("click", function() {
    window.location.href = "UPIPayments.html"; // Redirect to UPIPayments.html
});
