document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example: Send credentials to backend for validation
    // Replace this with your actual backend request
    // Assuming backend endpoint is /login
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "cities.html"; // Redirect to cities page
        } else {
            document.getElementById("errorMessage").style.display = "block";
        }
    })
    .catch(error => console.error("Error:", error));
});
