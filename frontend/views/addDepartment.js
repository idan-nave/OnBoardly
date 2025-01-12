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

// Main AddDepartmentPage function
export const AddDepartmentPage = () => {
  // Create the container for the page
  const container = document.createElement("div");
  container.classList.add("add-department-page-container");

  // Create a form
  const form = document.createElement("form");
  form.classList.add("add-department-form");

  // Form fields
  const departmentName = createFormGroup("Department Name", "text", "departmentName", "Enter department name");
  const teamLeader = createFormGroup("Department Leader", "text", "teamLeader", "Enter department leader's name");
  const currentWorkers = createFormGroup("Current Number of Workers", "number", "currentWorkers", "Enter current workers count");
  const goalWorkers = createFormGroup("Department Standard (Goal Workers)", "number", "goalWorkers", "Enter goal workers count");
  const occupancyRate = createFormGroup("Occupancy Rate (%)", "text", "occupancyRate", "", true); // Read-only

  // Dropdown for onboarding process
  const onboardingOptions = [
    { value: "n/a", label: "N/A" },
    { value: "technical_bootcamp", label: "Technical Bootcamp" },
    { value: "orientation_week", label: "Orientation Week" },
    { value: "project_integration", label: "Project Integration" },
  ];
  const onboardingProcess = createDropdown("Onboarding Process", "onboardingProcess", onboardingOptions);

  // Real-time occupancy rate calculation
  form.addEventListener("input", () => {
    const currentWorkersValue = parseInt(form.currentWorkers.value, 10) || 0;
    const goalWorkersValue = parseInt(form.goalWorkers.value, 10) || 1; // Avoid division by zero
    const occupancy = ((currentWorkersValue / goalWorkersValue) * 100).toFixed(2);
    form.occupancyRate.value = `${occupancy}%`;
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
submitButton.textContent = "Submit Department";
submitButton.classList.add("submit-button");
submitButton.onclick = handleSubmit;

// Add form groups to the form
form.appendChild(departmentName);
form.appendChild(teamLeader);
form.appendChild(onboardingProcess);
form.appendChild(currentWorkers);
form.appendChild(goalWorkers);
form.appendChild(occupancyRate);
// add the submit button to the form & list of stages
form.appendChild(submitButton);
  // Append form to container
  container.appendChild(form);

  // Return the container for the router to handle rendering
  return container;
};

// Export AddDepartmentPage for routing
export default AddDepartmentPage;
