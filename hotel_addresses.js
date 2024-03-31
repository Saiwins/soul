document.getElementById("hotelForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedHotel = document.getElementById("hotel").value;

    // Assuming redirection logic to payment page
    window.location.href = "payment.html";
});
