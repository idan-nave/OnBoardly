export const ManagerAccessPage = () => {
  const managers = [
    { id: 1, fullName: "Sophia Wilson" },
    { id: 2, fullName: "Liam Miller" },
    { id: 3, fullName: "Emma Davis" },
    { id: 4, fullName: "Oliver Brown" },
    { id: 5, fullName: "Ava Johnson" },
  ];

  const table = document.createElement("table");
  table.classList.add("access-control-table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Create main headers
  const mainHeaders = [
    "Manager Name",
    "Departments",
    "Onboarding Processes",
    "Incoming Employees",
    "Managers",
  ];

  mainHeaders.forEach((header, index) => {
    const th = document.createElement("th");
    th.textContent = header;
    th.colSpan = index === 0 ? 1 : 4; // Manager Name has 1 column, others have 4 sub-columns
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  // Create sub-headers for CRUD
  const subHeaderRow = document.createElement("tr");
  subHeaderRow.innerHTML = `
    <th></th> <!-- Empty for Manager Name -->
    <th>Create</th><th>Read</th><th>Update</th><th>Delete</th>
    <th>Create</th><th>Read</th><th>Update</th><th>Delete</th>
    <th>Create</th><th>Read</th><th>Update</th><th>Delete</th>
    <th>Create</th><th>Read</th><th>Update</th><th>Delete</th>
  `;
  thead.appendChild(subHeaderRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  managers.forEach((manager) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${manager.fullName}</td>
      <td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td>
      <td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td>
      <td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td>
      <td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td>
    `;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  const container = document.createElement("div");
  container.classList.add("manager-access-container");
  container.appendChild(table);

  return container;
};

export default ManagerAccessPage;
