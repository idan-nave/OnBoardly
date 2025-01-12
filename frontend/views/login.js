export const LoginPage = () => {
  const container = document.createElement("div");
  container.classList.add("login-container");

  const form = document.createElement("form");
  form.id = "loginform";

  const usernameLabel = document.createElement("label");
  usernameLabel.setAttribute("for", "username");
  usernameLabel.textContent = "Username:";
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.name = "username";
  usernameInput.placeholder = "Enter your Username";
  usernameInput.required = true;

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "loginpassword");
  passwordLabel.textContent = "Password:";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "loginpassword";
  passwordInput.name = "password";
  passwordInput.placeholder = "Enter your Password";
  passwordInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Login";

  // יצירת errorContainer
  const errorContainer = document.createElement("div");
  errorContainer.id = "errorContainer";
  errorContainer.style.color = "red";

  // הוספת שדות הטופס והכפתור
  form.appendChild(usernameLabel);
  form.appendChild(usernameInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);

  // הוספת errorContainer
  form.appendChild(errorContainer);

  container.appendChild(form);

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
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            window.location.href = "/dashboard"; // הפנייה לעמוד הבא
        } else {
            // עדכון הודעה ב-errorContainer
            errorContainer.textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorContainer.textContent = "An error occurred during login.";
    });
  });

  return container;
};
