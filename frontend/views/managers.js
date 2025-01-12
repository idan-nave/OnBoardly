export const ManagersPage = (navigateToManagerPage) => {
  const managers = [
    {
      id: 1,
      fullName: "Sophia Wilson",
      email: "sophia.wilson@example.com",
      position: "Engineering Manager",
      department: "Engineering",
      onboardingEmployees: 5,
      recruitmentCompletion: "80%",
    },
    {
      id: 2,
      fullName: "Liam Miller",
      email: "liam.miller@example.com",
      position: "Marketing Head",
      department: "Marketing",
      onboardingEmployees: 3,
      recruitmentCompletion: "60%",
    },
    {
      id: 3,
      fullName: "Emma Davis",
      email: "emma.davis@example.com",
      position: "HR Director",
      department: "Human Resources",
      onboardingEmployees: 4,
      recruitmentCompletion: "90%",
    },
    {
      id: 4,
      fullName: "Oliver Brown",
      email: "oliver.brown@example.com",
      position: "Design Manager",
      department: "Design",
      onboardingEmployees: 2,
      recruitmentCompletion: "50%",
    },
    {
      id: 5,
      fullName: "Ava Johnson",
      email: "ava.johnson@example.com",
      position: "Operations Manager",
      department: "Operations",
      onboardingEmployees: 6,
      recruitmentCompletion: "100%",
    },
  ];

  const table = document.createElement("table");
  table.classList.add("manager-table");

  const headers = [
    { label: "Full Name", key: "fullName" },
    { label: "Email", key: "email" },
    { label: "Position", key: "position" },
    { label: "Department", key: "department" },
    { label: "Onboarding Employees", key: "onboardingEmployees" },
    { label: "Recruitment Completion", key: "recruitmentCompletion" },
  ];

  let lastSortedKey = null;

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    const arrowSpan = document.createElement("span");
    arrowSpan.classList.add("sort-arrow");
    th.textContent = header.label;
    th.appendChild(arrowSpan);

    th.addEventListener("click", () => {
      sortManagers(header.key);
      updateSortArrows(header.key);
    });

    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  const renderManagerTable = () => {
    tbody.innerHTML = ""; // Clear previous rows
    managers.forEach((manager) => {
      const row = document.createElement("tr");
      row.addEventListener("click", () => navigateToManagerPage(manager.id));

      headers.forEach((header) => {
        const cell = document.createElement("td");
        cell.textContent = manager[header.key];
        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });
  };

  const sortManagers = (key) => {
    if (key === lastSortedKey) {
      managers.reverse(); // Reverse order if the same column is clicked again
    } else {
      managers.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
      lastSortedKey = key;
    }
    renderManagerTable();
  };

  const updateSortArrows = (sortedKey) => {
    document.querySelectorAll(".sort-arrow").forEach((arrow) => {
      arrow.textContent = ""; // Clear all arrows
    });

    const sortedColumn = Array.from(document.querySelectorAll("th"))
      .find((th) => th.textContent.includes(headers.find(h => h.key === sortedKey).label));

    const arrowSpan = sortedColumn.querySelector(".sort-arrow");
    arrowSpan.textContent = "↑↓";
  };

  table.appendChild(tbody);
  renderManagerTable();

  const container = document.createElement("div");
  container.classList.add("managers-page-container");
  container.appendChild(table);

  return container;
};

const navigateToManagerPage = (managerId) => {
  console.log(`Navigating to Manager Page for ID: ${managerId}`);
  window.location.href = `managers/${managerId}`;
};

export default ManagersPage;
