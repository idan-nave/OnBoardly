// Helper function to create a department card
const createDepartmentCard = (department) => {
  const card = document.createElement("div");
  card.classList.add("department-card");

  card.innerHTML = `
    <h2>${department.name}</h2>
    <p><strong>Department Leader:</strong> ${department.manager}</p>
    <p><strong>Onboarding Process:</strong> ${department.onboardingProcess}</p>
    <p><strong>Onboarding Workers:</strong> ${department.onboardingWorkers} / ${department.currentWorkers}</p>
    <p><strong>Growth Factor:</strong> ${department.growthFactor}%</p>
  `;

  card.addEventListener("click", () => {
    window.location.href = `/departments/${department.id}`;
  });

  return card;
};

// Helper function to create the "Add New Department" card
const createAddCard = () => {
  const card = document.createElement("div");
  card.classList.add("department-card", "add-card");

  card.innerHTML = `
    <h2>+</h2>
    <p>Add New Department</p>
  `;

  card.addEventListener("click", () => {
    window.location.href = "#/departments/new";
  });

  return card;
};

// Main DepartmentsPage function
export const DepartmentsPage = () => {
  // Sample data for departments
  const departments = [
    {
      id: 1,
      name: "Engineering",
      manager: "Alice Johnson",
      onboardingProcess: "Technical Bootcamp",
      onboardingWorkers: 10,
      currentWorkers: 50,
      growthFactor: 20,
    },
    {
      id: 2,
      name: "Marketing",
      manager: "Bob Smith",
      onboardingProcess: "Orientation Week",
      onboardingWorkers: 5,
      currentWorkers: 20,
      growthFactor: 15,
    },
  ];

  // Create the container for the page
  const container = document.createElement("div");
  container.classList.add("departments-page-container");

  // Create a grid to hold the department cards
  const grid = document.createElement("div");
  grid.classList.add("departments-grid");

  // Add department cards to the grid
  departments.forEach((department) => {
    const card = createDepartmentCard(department);
    grid.appendChild(card);
  });

  // Add the "Add New Department" card
  const addCard = createAddCard();
  grid.appendChild(addCard);

  // Append grid to container
  container.appendChild(grid);

  // Return the container for the router to handle rendering
  return container;
};

// Export DepartmentsPage for routing
export default DepartmentsPage;
