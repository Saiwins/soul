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

document.getElementById("upiPaymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const upiId = document.getElementById("upiId").value;

    // Send a request to the server to verify the UPI ID
    fetch("/verify_upi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ upiId })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to verify UPI ID");
        }
    })
    .then(data => {
        // Check if the UPI ID is valid
        if (data.valid) {
            // UPI ID is valid, proceed with payment
            // Send a request to the server to initiate payment
            fetch("/initiate_payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ upiId })
            })
            .then(response => {
                if (response.ok) {
                    // Payment initiated successfully
                    // You can handle the response accordingly
                    console.log("Payment initiated successfully");
                } else {
                    throw new Error("Failed to initiate payment");
                }
            })
            .catch(error => console.error("Error initiating payment:", error));
        } else {
            // UPI ID is invalid
            console.log("UPI ID is invalid");
            // You can display an error message to the user or take any other action
        }
    })
    .catch(error => console.error("Error verifying UPI ID:", error));
});

