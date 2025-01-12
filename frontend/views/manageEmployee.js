const createOnboardingStages = (stages, currentStageIndex) => {
  const stagesContainer = document.createElement('div');
  stagesContainer.classList.add('onboarding-stages-unique');

  stages.forEach((stage, index) => {
    const stageDiv = document.createElement('div');
    stageDiv.classList.add('stage-unique');
    if (index < currentStageIndex) {
      stageDiv.classList.add('completed-unique'); // Grey out previous stages
    } else if (index === currentStageIndex) {
      stageDiv.classList.add('current-unique'); // Highlight current stage
    }
    stageDiv.innerText = stage;
    stagesContainer.appendChild(stageDiv);
  });

  return stagesContainer;
};

const createEditableField = (label, value, fieldType = 'text') => {
  const fieldContainer = document.createElement('div');
  fieldContainer.classList.add('editable-field-unique');

  const labelElement = document.createElement('label');
  labelElement.classList.add('label-unique');
  labelElement.innerText = label;
  fieldContainer.appendChild(labelElement);

  const inputElement = document.createElement('input');
  inputElement.type = fieldType;
  inputElement.value = value;
  fieldContainer.appendChild(inputElement);

  const editIcon = document.createElement('img');
  editIcon.src = 'pencil-icon.png'; // Replace with actual path to pencil image
  editIcon.classList.add('edit-icon-unique');
  fieldContainer.appendChild(editIcon);

  return fieldContainer;
};

export const ManageEmployeePage = (employee, stages, currentStageIndex) => {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('employee-profile-unique');

  // Employee Image
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('employee-image-unique');
  const img = document.createElement('img');
  img.src = employee.imageUrl; // Ensure you have the employee image URL
  imageContainer.appendChild(img);
  profileContainer.appendChild(imageContainer);

  // Employee Data Fields
  profileContainer.appendChild(createEditableField('Full Name', employee.fullName));
  profileContainer.appendChild(createEditableField('Email', employee.email, 'email'));
  profileContainer.appendChild(createEditableField('Position', employee.position));
  profileContainer.appendChild(createEditableField('Department', employee.department));
  profileContainer.appendChild(createEditableField('Recruitment Start Date', employee.recruitmentStartDate, 'date'));
  profileContainer.appendChild(createEditableField('Employment Start Date', employee.employmentStartDate, 'date'));
  profileContainer.appendChild(createEditableField('Onboarding Stage', employee.onboardingStage));
  profileContainer.appendChild(createEditableField('Onboarding Progress', `${employee.onboardingProgress}%`, 'number'));

  // Interview Summaries
  const technicalSummary = document.createElement('div');
  technicalSummary.classList.add('summary-unique');
  technicalSummary.innerHTML = `
    <h3>Technical Interview Summary</h3>
    <p>${employee.technicalInterviewSummary}</p>
  `;
  profileContainer.appendChild(technicalSummary);

  const hrSummary = document.createElement('div');
  hrSummary.classList.add('summary-unique');
  hrSummary.innerHTML = `
    <h3>HR Interview Summary</h3>
    <p>${employee.hrInterviewSummary}</p>
  `;
  profileContainer.appendChild(hrSummary);

  // Onboarding Stages
  profileContainer.appendChild(createOnboardingStages(stages, currentStageIndex));

  // Buttons for Approve/Terminate Onboarding
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('action-buttons-unique');

  const approveButton = document.createElement('button');
  approveButton.innerText = 'Approve for Next Page';
  approveButton.addEventListener('click', () => {
    employee.onboardingStage = stages[currentStageIndex + 1];
    employee.onboardingProgress = ((currentStageIndex + 1) / stages.length) * 100;
    alert('Employee approved for the next stage');
  });

  const terminateButton = document.createElement('button');
  terminateButton.innerText = 'Terminate Onboarding';
  terminateButton.addEventListener('click', () => {
    const note = prompt("Manager's Note for termination:");
    if (note) {
      alert(`Onboarding terminated. Manager's note: ${note}`);
    }
  });

  buttonsContainer.appendChild(approveButton);
  buttonsContainer.appendChild(terminateButton);

  profileContainer.appendChild(buttonsContainer);

  return profileContainer;
};

export default ManageEmployeePage;
