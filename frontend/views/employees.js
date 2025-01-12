export const EmployeesPage = () => {
  // Sample data for employees
  const employees = [
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@example.com",
      position: "Software Engineer",
      department: "Engineering",
      recruitmentStartDate: "2023-01-15",
      employmentStartDate: "2023-02-01",
      onboardingStage: "Orientation",
      onboardingProgress: "10 %",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      position: "Marketing Manager",
      department: "Marketing",
      recruitmentStartDate: "2023-02-01",
      employmentStartDate: "2023-03-01",
      onboardingStage: "Training",
      onboardingProgress: "60 %",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      position: "HR Specialist",
      department: "Human Resources",
      recruitmentStartDate: "2023-03-05",
      employmentStartDate: "2023-03-20",
      onboardingStage: "Policy Overview",
      onboardingProgress: "30 %",
    },
    {
      id: 4,
      fullName: "Bob Brown",
      email: "bob.brown@example.com",
      position: "Project Manager",
      department: "Engineering",
      recruitmentStartDate: "2023-04-10",
      employmentStartDate: "2023-04-25",
      onboardingStage: "Team Integration",
      onboardingProgress: "70 %",
    },
    {
      id: 5,
      fullName: "Charlie Davis",
      email: "charlie.davis@example.com",
      position: "UX Designer",
      department: "Design",
      recruitmentStartDate: "2023-05-01",
      employmentStartDate: "2023-05-15",
      onboardingStage: "Tools Setup",
      onboardingProgress: "50 %",
    },
  ];

  let lastSortedKey = "";

  // Function to sort employees by a given key
  const sortEmployees = (key) => {
    employees.sort((a, b) => {
      if (key === "recruitmentStartDate" || key === "employmentStartDate") {
        return new Date(a[key]) - new Date(b[key]);
      }
      if (key === "onboardingProgress") {
        return parseInt(a[key]) - parseInt(b[key]);
      }
      return a[key].localeCompare(b[key]);
    });
    lastSortedKey = key;
    renderEmployeeTable();
  };

  // Create the table and its structure
  const table = document.createElement("table");
  table.classList.add("employee-table");

  // Create table headers
  const headers = [
    { label: "Full Name", key: "fullName" },
    { label: "Email", key: "email" },
    { label: "Position", key: "position" },
    { label: "Department", key: "department" },
    { label: "Recruitment Start Date", key: "recruitmentStartDate" },
    { label: "Employment Start Date", key: "employmentStartDate" },
    { label: "Onboarding Stage", key: "onboardingStage" },
    { label: "Onboarding Progress", key: "onboardingProgress" },
  ];

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    const arrowSpan = document.createElement("span");
    arrowSpan.classList.add("sort-arrow");
    
    // Add arrow based on whether the column is the last sorted
    if (header.key === lastSortedKey) {
      arrowSpan.textContent = "↑↓"; // Visible sorting arrows
    }
  
    th.textContent = header.label;
    th.appendChild(arrowSpan);
    th.addEventListener("click", () => {
      sortEmployees(header.key);
      updateSortArrows(header.key); // Update arrows after sorting
    });
    headerRow.appendChild(th);
  });
  

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");

  // Function to render the employee table
  const renderEmployeeTable = () => {
    tbody.innerHTML = ""; // Clear previous rows
    employees.forEach((employee) => {
      const row = document.createElement("tr");
      row.addEventListener("click", () => {
        console.log(`Navigating to Employeey Page for ID: ${manager.id}`);
        // window.location.href = `employees/${employee.id}`;
        window.location.href = `employees/id`; //DEBUG- BEFORE API GET
      });

      headers.forEach((header) => {
        const cell = document.createElement("td");
        cell.textContent = employee[header.key];
        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });
  };


  // Function to update the sorting arrows
  const updateSortArrows = (sortedKey) => {
    document.querySelectorAll(".sort-arrow").forEach((arrow) => {
      arrow.textContent = ""; // Reset all arrows
    });
    
    // Set arrows for the current sorted column
    const sortedColumn = Array.from(document.querySelectorAll("th"))
      .find((th) => th.textContent.includes(headers.find(h => h.key === sortedKey).label));
      
    const arrowSpan = sortedColumn.querySelector(".sort-arrow");
    arrowSpan.textContent = "↑↓";
  };
  

  table.appendChild(tbody);

  // Initial render of the table
  renderEmployeeTable();

  // Main container for the page
  const container = document.createElement("div");
  container.classList.add("employees-page-container");
  container.appendChild(table);

  // Return the container for the router to handle rendering
  return container;
};

// Export EmployeesPage for routing
export default EmployeesPage;
