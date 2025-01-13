form.addEventListener('submit', (event) => {
    event.preventDefault(); // מונע את הגשת הטופס הרגילה

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("loginpassword").value;

    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            window.location.href = "/dashboard"; // הפנייה לעמוד הבא
        } else {
            const errorContainer = document.getElementById("errorContainer");
            if (errorContainer) {
                errorContainer.textContent = data.message;
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const errorContainer = document.getElementById("errorContainer");
        if (errorContainer) {
            errorContainer.textContent = "An error occurred during login.";
        }
    });
});