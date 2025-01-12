#!/bin/bash

# Project name
PROJECT_NAME="OnboardingManagementPlatform"
BACKEND_DIR="backend"
FRONTEND_DIR="frontend"
DB_DIR="backend/db"
SERVLETS_DIR="backend/servlets"
MODELS_DIR="backend/models"
CONTROLLERS_DIR="backend/controllers"
VIEWS_DIR="frontend/views"
ASSETS_DIR="frontend/assets"
JS_DIR="frontend/assets/js"
CSS_DIR="frontend/assets/css"

# Create the project directory
echo "Creating project directory: $PROJECT_NAME"
mkdir -p $PROJECT_NAME

# Navigate into project directory
cd $PROJECT_NAME

# Create the backend folder structure
echo "Creating backend folder structure"
mkdir -p $BACKEND_DIR/{models,controllers,services,utils,config,servlets}

# Create the frontend folder structure
echo "Creating frontend folder structure"
mkdir -p $FRONTEND_DIR/{views,assets/js,assets/css,assets/images}

# Create backend model files (Java entities)
echo "Creating backend model files"
cat > $BACKEND_DIR/models/User.java <<EOL
public class User {
    private int id;
    private String username;
    private String email;
    private String password;

    // Constructors, getters, and setters
}
EOL

cat > $BACKEND_DIR/models/Department.java <<EOL
public class Department {
    private int id;
    private String name;

    // Constructors, getters, and setters
}
EOL

cat > $BACKEND_DIR/models/Process.java <<EOL
public class Process {
    private int id;
    private String name;
    private String description;

    // Constructors, getters, and setters
}
EOL

cat > $BACKEND_DIR/models/Worker.java <<EOL
public class Worker {
    private int id;
    private String name;
    private String teamAssigned;

    // Constructors, getters, and setters
}
EOL

cat > $BACKEND_DIR/models/Company.java <<EOL
public class Company {
    private int id;
    private String name;
    private String email;

    // Constructors, getters, and setters
}
EOL

# Create backend servlet files
echo "Creating backend servlet files"
cat > $BACKEND_DIR/servlets/AssignProcessServlet.java <<EOL
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AssignProcessServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Process request
        PrintWriter out = response.getWriter();
        out.println("Process Assigned Successfully");
    }
}
EOL

cat > $BACKEND_DIR/servlets/UserServlet.java <<EOL
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class UserServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Handle user login
        PrintWriter out = response.getWriter();
        out.println("User logged in successfully");
    }
}
EOL

# Create backend controller files
echo "Creating backend controller files"
cat > $BACKEND_DIR/controllers/CompanyController.java <<EOL
public class CompanyController {
    public void createCompany() {
        // Create company logic
    }
}
EOL

cat > $BACKEND_DIR/controllers/TeamController.java <<EOL
public class TeamController {
    public void createTeam() {
        // Create department logic
    }
}
EOL

# Create frontend HTML views
echo "Creating frontend HTML views"
cat > $FRONTEND_DIR/views/companyDashboard.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Company Dashboard</title>
</head>
<body>
    <h1>Welcome to the Company Dashboard</h1>
    <div id="teams"></div>
</body>
</html>
EOL

cat > $FRONTEND_DIR/views/teamDashboard.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Department Dashboard</title>
</head>
<body>
    <h1>Department Dashboard</h1>
    <div id="processes"></div>
</body>
</html>
EOL

cat > $FRONTEND_DIR/views/processDashboard.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process Dashboard</title>
</head>
<body>
    <h1>Onboarding Process Dashboard</h1>
    <div id="assignedTeams"></div>
</body>
</html>
EOL

cat > $FRONTEND_DIR/views/addEditForm.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add/Edit Form</title>
</head>
<body>
    <h1>Create or Edit a Department or Process</h1>
    <form id="createForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
EOL

# Create frontend JavaScript files
echo "Creating frontend JavaScript files"
cat > $FRONTEND_DIR/assets/js/app.js <<EOL
document.addEventListener("DOMContentLoaded", () => {
    console.log("App loaded");
});
EOL

cat > $FRONTEND_DIR/assets/js/common.js <<EOL
function makeRequest(url, method, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(data));
}
EOL

# Create basic CSS styles
echo "Creating basic CSS files"
cat > $FRONTEND_DIR/assets/css/style.css <<EOL
body {
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}
EOL

# Initialize a git repository
echo "Initializing Git repository"
git init
git add .
git commit -m "Initial project structure"

# Completion message
echo "Project structure created successfully!"
echo "You can now start implementing the functionality!"

