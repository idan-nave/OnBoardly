// login.js

export const LoginPage = () => {
  // Create a container for the login page
  const container = document.createElement("div");
  container.classList.add("login-page-container"); // Optional class for styling

  // Create the form
  const form = document.createElement("form");
  form.id = "loginform";

  // Username label and input
  const usernameLabel = document.createElement("label");
  usernameLabel.setAttribute("for", "username");
  usernameLabel.textContent = "Username:";
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.name = "username";
  usernameInput.placeholder = "Enter your Username";
  usernameInput.required = true;

  // Password label and input
  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "loginpassword");
  passwordLabel.textContent = "Password:";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "loginpassword";
  passwordInput.name = "password";
  passwordInput.placeholder = "Enter your Password";
  passwordInput.required = true;

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "loginbutton";
  submitButton.textContent = "Login";

  // Append inputs and button to form
  form.appendChild(usernameLabel);
  form.appendChild(usernameInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);

  // Append the form to the container
  container.appendChild(form);

  // Return the container for the router to handle rendering
  return container;
};

export default LoginPage;
