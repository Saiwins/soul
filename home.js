document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = new FormData(loginForm);
        const userData = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Send POST request to backend API endpoint for login
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            console.log(data); // Handle successful login (optional)
            // Redirect to the cities page after successful login
            window.location.href = '/cities.html';
        })
        .catch(error => {
            console.error('Error:', error); // Handle error (optional)
            // Display error message to the user (optional)
            errorMessage.style.display = 'block';
        });
    });
});
