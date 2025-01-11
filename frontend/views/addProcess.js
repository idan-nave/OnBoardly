import { createSubmitModal } from "../assets/components/submitModal.js";

// Helper function to create a form group
const createFormGroup = (
  labelText,
  inputType,
  inputName,
  placeholder = "",
  isReadOnly = false,
  defaultValue = ""
) => {
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
  input.value = defaultValue; // Set default value here
  input.readOnly = isReadOnly; // Make it read-only if specified
  if (isReadOnly) {
    input.style.backgroundColor = "#f0f0f0"; // To visually distinguish read-only input
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

// Main AddProcessPage function
export const AddProcessPage = () => {
  const container = document.createElement("div");
  container.classList.add("add-process-page-container");

  const form = document.createElement("form");
  form.classList.add("add-process-form");

  // Initialize the number of stages as an editable input field
  const processName = createFormGroup(
    "Process Name",
    "text",
    "processName",
    "Enter process name"
  );
  const description = createFormGroup(
    "Description",
    "text",
    "description",
    "Enter description of the process"
  );
  const numberOfStagesField = createFormGroup(
    "Number of Stages",
    "number",
    "numberOfStages",
    "Number of stages",
    false,
    "3"
  ); // Editable input for stages

  const teamOptions = [
    { value: "n/a", label: "N/A" },
    { value: "team_a", label: "Department A" },
    { value: "team_b", label: "Department B" },
    { value: "team_c", label: "Department C" },
  ];
  const designatedTeam = createDropdown(
    "Designated Department",
    "designatedTeam",
    teamOptions
  );

  // Container for stages
  const stagesContainer = document.createElement("div");
  stagesContainer.classList.add("stages-container");

  // Initialize with a minimum of 3 stages
  let stageCount = 3;

  // Function to update stages based on the current number of stages
  const updateStages = () => {
    const currentStages = stagesContainer.querySelectorAll(".stage");

    // Remove extra stages
    if (currentStages.length > stageCount) {
      for (let i = currentStages.length - 1; i >= stageCount; i--) {
        currentStages[i].remove();
      }
    }

    // Add missing stages
    for (let i = currentStages.length; i < stageCount; i++) {
      const stage = createStage(i + 1);
      stagesContainer.appendChild(stage);
    }

    // Update the value in the numberOfStages input
    numberOfStagesField.querySelector("input").value = stageCount;
  };

  // Function to handle changes to the number of stages input
  const handleStageCountChange = (event) => {
    const newCount = parseInt(event.target.value, 10);
    if (!isNaN(newCount) && newCount >= 3) {
      stageCount = newCount;
      updateStages();
    } else {
      // Restore the current stage count value if invalid
      numberOfStagesField.querySelector("input").value = stageCount;
    }
  };

  // Helper function to create a single stage
  const createStage = (index) => {
    const stageDiv = document.createElement("div");
    stageDiv.classList.add("stage");

    const stageHeader = document.createElement("h4");
    stageHeader.textContent = `Stage ${index}`; // Header for each stage

    const goal = createFormGroup(
      "Goal",
      "text",
      `stage${index}Goal`,
      `Enter goal for stage ${index}`
    );
    const duration = createFormGroup(
      "Duration (days)",
      "number",
      `stage${index}Duration`,
      `Enter duration for stage ${index}`
    );

    const managerOptions = [
      { value: "n/a", label: "N/A" },
      { value: "manager_a", label: "Manager A" },
      { value: "manager_b", label: "Manager B" },
      { value: "manager_c", label: "Manager C" },
    ];
    const qualifyingManager = createDropdown(
      `Manager for Stage ${index}`,
      `stage${index}Manager`,
      managerOptions
    );

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete-stage");
    deleteButton.onclick = () => {
      stageDiv.remove();
      stageCount--; // Decrease stage count when a stage is deleted
      updateStages(); // Update stages and numberOfStages indicator
    };

    stageDiv.appendChild(stageHeader);
    stageDiv.appendChild(goal);
    stageDiv.appendChild(duration);
    stageDiv.appendChild(qualifyingManager);
    stageDiv.appendChild(deleteButton);

    return stageDiv;
  };

  // Add a new stage when the (+) button is clicked
  const addStageButton = document.createElement("button");
  addStageButton.type = "button";
  addStageButton.textContent = "(+) Add New Stage";
  addStageButton.classList.add("add-stage-button");
  addStageButton.onclick = () => {
    stageCount++; // Increase stage count
    updateStages(); // Update stages and numberOfStages indicator
  };

  // Real-time update when number of stages changes
  updateStages();

  // Add event listener to handle input change for number of stages
  numberOfStagesField
    .querySelector("input")
    .addEventListener("input", handleStageCountChange);

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
  submitButton.textContent = "Submit Process";
  submitButton.classList.add("submit-button");
  submitButton.onclick = handleSubmit;
  
  // Add form groups to the form
  form.appendChild(processName);
  form.appendChild(description);
  form.appendChild(numberOfStagesField);
  form.appendChild(designatedTeam);
  form.appendChild(stagesContainer);
  form.appendChild(addStageButton);
  // add the submit button to the form & list of stages
  form.appendChild(submitButton);
  // Append form to container
  container.appendChild(form);

  // Return the container for the router to handle rendering
  return container;
};

// Export AddProcessPage for routing
export default AddProcessPage;
