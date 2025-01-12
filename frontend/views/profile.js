export const ProfilePage = () => {
    const container = document.createElement('div');
    container.classList.add('profile-container');
    
    // Title
    const title = document.createElement('h1');
    title.textContent = 'My Company Dashboard';
    container.appendChild(title);
    
    // Content Section
    const contentSection = document.createElement('div');
    contentSection.classList.add('content-section');
    container.appendChild(contentSection);
    
    // Left Container (Teams)
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');
    contentSection.appendChild(leftContainer);
  
    const leftTitle = document.createElement('h2');
    leftTitle.textContent = 'Departments';
    leftContainer.appendChild(leftTitle);
  
    const departmentList = document.createElement('ul');
    const departments = ['Department Alpha', 'Department Beta', 'Department Gamma', 'Department Delta'];
    departments.forEach(department => {
      const departmentItem = document.createElement('li');
      departmentItem.textContent = department;
      departmentList.appendChild(departmentItem);
    });
    leftContainer.appendChild(departmentList);
  
    // Add Department Button
    const addTeamLink = document.createElement('a');
    addTeamLink.href = 'addTeamPage.html';
    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Add Department';
    addTeamLink.appendChild(addButton);
    leftContainer.appendChild(addTeamLink);
  
    // Right Container (Processes)
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');
    contentSection.appendChild(rightContainer);
  
    const rightTitle = document.createElement('h2');
    rightTitle.textContent = 'Processes';
    rightContainer.appendChild(rightTitle);
  
    const processList = document.createElement('ul');
    const processes = ['Onboarding', 'Training', 'Evaluation', 'Feedback'];
    processes.forEach(process => {
      const processItem = document.createElement('li');
      processItem.textContent = process;
      processList.appendChild(processItem);
    });
    rightContainer.appendChild(processList);
  
    // Add Process Button
    const addProcessButton = document.createElement('button');
    addProcessButton.classList.add('add-button');
    addProcessButton.textContent = 'Add Process';
    rightContainer.appendChild(addProcessButton);
  
    return container;
  };
  
  export default ProfilePage;
  