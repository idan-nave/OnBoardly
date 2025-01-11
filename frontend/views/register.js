// login.js - Controller for the login form
export const RegisterPage = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  // Title
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = 'OnBoardly Registration';
  container.appendChild(title);

  // Content
  const content = document.createElement('div');
  content.classList.add('content');
  container.appendChild(content);

  // Form
  const form = document.createElement('form');
  form.id = 'registrationForm';
  content.appendChild(form);

  // User details
  const userDetails = document.createElement('div');
  userDetails.classList.add('user-details');
  form.appendChild(userDetails);

  // Input fields
  const fields = [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Enter your company name' },
    { id: 'address', label: 'Address', type: 'text', placeholder: 'Enter your address' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { id: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', minlength: 8 },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password', minlength: 8 },
  ];

  fields.forEach(({ id, label, type, placeholder, minlength }) => {
    const inputBox = document.createElement('div');
    inputBox.classList.add('input-box');

    const span = document.createElement('span');
    span.classList.add('details');
    span.textContent = label;
    inputBox.appendChild(span);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    input.required = true;
    if (minlength) input.minLength = minlength;
    inputBox.appendChild(input);

    userDetails.appendChild(inputBox);
  });

  // Submit button
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button');
  form.appendChild(buttonContainer);

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.id = 'submit';
  submitButton.value = 'Register';
  buttonContainer.appendChild(submitButton);

  // Error message
  const errorMessage = document.createElement('div');
  errorMessage.id = 'errorMessage';
  errorMessage.style.color = 'red';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.marginTop = '10px';
  form.appendChild(errorMessage);

  // Back to home link
  const backToHomeContainer = document.createElement('div');
  backToHomeContainer.classList.add('back-to-home');
  form.appendChild(backToHomeContainer);

  const backToHomeLink = document.createElement('a');
  backToHomeLink.href = '#';
  backToHomeLink.textContent = 'Back to Home';
  backToHomeLink.addEventListener('click', (event) => {
    event.preventDefault();
    import('../assets/router.js').then((module) => module.navigateTo('/'));
  });
  backToHomeContainer.appendChild(backToHomeLink);

  // Form submission handling
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

  return container;
};

const validateForm = () => {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const errorMessage = document.getElementById('errorMessage');
  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match!';
  } else {
    errorMessage.textContent = '';
    alert('Registration Successful!');
  }
};

export default RegisterPage;
