import { createSubmitModal } from "../assets/components/submitModal.js";

// Helper function to create a form group

const createFormGroup = (labelText, inputType, inputName, placeholder = "", isReadOnly = false) => {
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = labelText;
  label.htmlFor = inputName;

  const input = document.createElement("input");
  input.type = inputType;
  input.name = inputName;
  input.placeholder = placeholder;
  input.id = inputName;
  if (isReadOnly) {
    input.readOnly = true;
  }

  formGroup.appendChild(label);
  formGroup.appendChild(input);

  return formGroup;
};

// Helper function to create a dropdown
const createDropdown = (labelText, inputName, options) => {
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = labelText;
  label.htmlFor = inputName;

  const select = document.createElement("select");
  select.name = inputName;
  select.id = inputName;

  // Add options to the dropdown
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.label;
    select.appendChild(opt);
  });

  formGroup.appendChild(label);
  formGroup.appendChild(select);

  return formGroup;
};

// Main AddEmployeePage function
export const AddEmployeePage = () => {
  // Create the container for the page
  const container = document.createElement("div");
  container.classList.add("add-employee-page-container");

  // Create a form
  const form = document.createElement("form");
  form.classList.add("add-employee-form");

  // Form fields
  const fullName = createFormGroup("Employee Full Name", "text", "fullName", "Enter full name");
  const email = createFormGroup("Email", "email", "email", "Enter email address");
  const position = createFormGroup("Designated Position", "text", "position", "Enter position");

  // Dropdown for Designated Department
  const departmentOptions = [
    { value: "", label: "Select Department" },
    { value: "hr", label: "HR" },
    { value: "tech", label: "Technical" },
    { value: "finance", label: "Finance" },
  ];
  const designatedDepartment = createDropdown("Designated Department", "designatedDepartment", departmentOptions);

  // Recruitment and Employment Start Date fields
  const recruitmentDate = createFormGroup("Recruitment Start Date", "date", "recruitmentDate");
  const employmentDate = createFormGroup("Employment Start Date", "date", "employmentDate");

  // Dropdown for Current On-boarding Stage
  const onboardingStageOptions = [
    { value: "n/a", label: "N/A" },
    { value: "initial_training", label: "Initial Training" },
    { value: "probation", label: "Probation" },
    { value: "full_integration", label: "Full Integration" },
  ];
  const onboardingStage = createDropdown("Current On-boarding Stage", "onboardingStage", onboardingStageOptions);

  // Form validation
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullNameInput = form.fullName.value.trim();
    const emailInput = form.email.value.trim();

    // Validate full name (text only)
    if (!/^[a-zA-Z\s]+$/.test(fullNameInput)) {
      alert("Please enter a valid full name (letters and spaces only).");
      return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate position (text only)
    const positionInput = form.position.value.trim();
    if (!/^[a-zA-Z\s]+$/.test(positionInput)) {
      alert("Please enter a valid position (letters and spaces only).");
      return;
    }

    // If validation passes
    console.log("Form submitted successfully");
  });

// Function to show the modal
const handleSubmit = () => {
  const onConfirm = () => {
    // Proceed with the submit process (e.g., form submission)
    console.log("Process submitted");
  };
  
  const onCancel = () => {
    console.log("Process submission cancelled");
  };

  // Create the modal and append it to the body
  const modal = createSubmitModal(onConfirm, onCancel);
  document.body.appendChild(modal);
  modal.classList.add("show"); // Show the modal
};

// Create the submit button and add the handleSubmit logic
const submitButton = document.createElement("button");
submitButton.type = "button";
submitButton.textContent = "Submit Employee";
submitButton.classList.add("submit-button");
submitButton.onclick = handleSubmit;

  // Add form groups to the form
  form.appendChild(fullName);
  form.appendChild(email);
  form.appendChild(position);
  form.appendChild(designatedDepartment);
  form.appendChild(recruitmentDate);
  form.appendChild(employmentDate);
  form.appendChild(onboardingStage);
  form.appendChild(submitButton);

  // Append form to container
  container.appendChild(form);

  // Return the container for the router to handle rendering
  return container;
};

// Export AddEmployeePage for routing
export default AddEmployeePage;
