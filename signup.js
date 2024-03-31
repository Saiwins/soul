document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = new FormData(signupForm);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            // Add other form fields as needed
        };

        // Perform client-side form validation
        if (!userData.name || !userData.email || !userData.password) {
            // Display an error message if any field is empty
            alert('Please fill in all fields.');
            return; // Exit the function early if there are validation errors
        }

        // Send POST request to backend API endpoint
        fetch('/signup', {
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
                throw new Error('Failed to sign up');
            }
        })
        .then(data => {
            console.log(data); // Handle successful signup (optional)
            // Redirect to login page or display success message (optional)
            window.location.href = '/login.html'; // Redirect to login page after successful signup
        })
        .catch(error => {
            console.error('Error:', error); // Handle error (optional)
            // Display error message to the user (optional)
            alert('An error occurred during signup. Please try again later.');
        });
    });
});
