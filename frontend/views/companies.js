// Helper function to create a process card
const createProcessCard = (process) => {
  const card = document.createElement("div");
  card.classList.add("process-card");

  card.innerHTML = `
    <h2>${process.description}</h2>
    <p><strong>Number of Stages:</strong> ${process.numberOfStages}</p>
    <p><strong>Created At:</strong> ${new Date(process.createdAt).toLocaleDateString()}</p>
    <p><strong>Last Updated At:</strong> ${new Date(process.lastUpdatedAt).toLocaleDateString()}</p>
    <p><strong>Implemented By Departments:</strong> ${process.implementedByDepartments.join(", ")}</p>
  `;

  card.addEventListener("click", () => {
    window.location.href = `/processes/${process.id}`;
  });

  return card;
};

// Helper function to create the "Add New Process" card
const createAddProcessCard = () => {
  const card = document.createElement("div");
  card.classList.add("process-card", "add-card");

  card.innerHTML = `
    <h2>+</h2>
    <p>Add New Process</p>
  `;

  card.addEventListener("click", () => {
    window.location.href = "#/processes/new";
  });

  return card;
};

// Main CompaniesPage function
export const CompaniesPage = () => {
  // Sample data for processes
  const processes = [
    {
      id: 1,
      description: "Technical Bootcamp",
      numberOfStages: 5,
      createdAt: "2023-01-01T00:00:00Z",
      lastUpdatedAt: "2024-01-01T00:00:00Z",
      implementedByDepartments: ["Engineering", "HR"],
    },
    {
      id: 2,
      description: "Orientation Week",
      numberOfStages: 4,
      createdAt: "2023-02-01T00:00:00Z",
      lastUpdatedAt: "2024-01-05T00:00:00Z",
      implementedByDepartments: ["Marketing", "Sales"],
    },
  ];

  // Create the container for the page
  const container = document.createElement("div");
  container.classList.add("processes-page-container");

  // Create a grid to hold the process cards
  const grid = document.createElement("div");
  grid.classList.add("processes-grid");

  // Add process cards to the grid
  processes.forEach((process) => {
    const card = createProcessCard(process);
    grid.appendChild(card);
  });

  // Add the "Add New Process" card
  const addProcessCard = createAddProcessCard();
  grid.appendChild(addProcessCard);

  // Append grid to container
  container.appendChild(grid);

  // Return the container for the router to handle rendering
  return container;
};

// Export CompaniesPage for routing
export default CompaniesPage;
