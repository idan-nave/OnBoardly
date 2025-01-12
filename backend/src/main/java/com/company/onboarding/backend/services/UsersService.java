package com.company.onboarding.backend.services;

import java.sql.Connection;
// import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;

import com.company.onboarding.backend.config.DBConfig;

public class UsersService {

    // adds user to users table
    public boolean addUser(int userId, int companyId, String username, String password, String role, Timestamp createdAt) {
    String sql = "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set query parameters
        stmt.setInt(1, userId);
        stmt.setInt(2, companyId);
        stmt.setString(3, username);
        stmt.setString(4, password);
        stmt.setString(5, role);
        stmt.setTimestamp(6, createdAt);

        // Execute the update
        int rowsAffected = stmt.executeUpdate();
        System.out.println("Rows affected: " + rowsAffected);

        return rowsAffected > 0; // True if insert is successful

    } catch (SQLException e) {
        e.printStackTrace();
        System.err.println("SQLState: " + e.getSQLState());
        System.err.println("Error Code: " + e.getErrorCode());
        System.err.println("Message: " + e.getMessage());
        return false;
    }
    }
     
    // in - user id
    // out - returns username based on id
    public String getUsername(int userId) {
        String sql = "SELECT username FROM users WHERE user_id = ?";
        
        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set the query parameter for team_id
            stmt.setInt(1, userId);

            // Execute the query
            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet.next()) {
                    // Retrieve and return the team name
                    return resultSet.getString("username");
                } else {
                    // No team found with the given team_id
                    System.err.println("No username found with ID: " + userId);
                    return null;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return null;
        }
    }

    // in - user id
    // out - returns password based on id
    public String getPassword(int userId) {
        String sql = "SELECT password FROM users WHERE user_id = ?";
        
        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set the query parameter for team_id
            stmt.setInt(1, userId);

            // Execute the query
            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet.next()) {
                    // Retrieve and return the team name
                    return resultSet.getString("password");
                } else {
                    // No team found with the given team_id
                    System.err.println("No password found with ID: " + userId);
                    return null;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return null;
        }
    }

    // in - user id
    // out - returns role based on id
    public String getRole(int userId) {
        String sql = "SELECT role FROM users WHERE user_id = ?";

        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set the query parameter for user_id
            stmt.setInt(1, userId);

            // Execute the query
            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet.next()) {
                    // Retrieve and return the role
                    return resultSet.getString("role");
                } else {
                    // No role found with the given user_id
                    System.err.println("No role found with ID: " + userId);
                    return null;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return null;
        }
    }

    // in - user id
    // out - returns createdAt based on id
    public Timestamp getCreatedAt(int userId) {
        String sql = "SELECT createdAt FROM users WHERE user_id = ?";

        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set the query parameter for user_id
            stmt.setInt(1, userId);

            // Execute the query
            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet.next()) {
                    // Retrieve and return the createdAt timestamp
                    return resultSet.getTimestamp("created_at");
                } else {
                    // No createdAt found with the given user_id
                    System.err.println("No createdAt found with ID: " + userId);
                    return null;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return null;
        }
    }

    // in - username
    // out - returns user_id based on username
    public Integer getUserId(String username) {
        String sql = "SELECT user_id FROM user WHERE username = ?";
        
        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set the query parameter for username
            stmt.setString(1, username);

            // Execute the query
            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet.next()) {
                    // Retrieve and return the user_id
                    return resultSet.getInt("user_id");
                } else {
                    // No user found with the given username
                    System.err.println("No user found with username: " + username);
                    return null;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return null;
        }
    }

    // in - user id
    // out - returns company id based on id
    public Integer getCompanyId(int userId) {
        String sql = "SELECT company_id FROM users WHERE user_id = ?";

        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set the query parameter for user_id
            stmt.setInt(1, userId);

            // Execute the query
            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet.next()) {
                    // Retrieve and return the createdAt timestamp
                    return resultSet.getInt("company_id");
                } else {
                    // No companyId found with the given user_id
                    System.err.println("No companyId found with ID: " + userId);
                    return null;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return null;
        }
    }

    // in - user id
    // out - returns arraylist of usernames
    public ArrayList<String> getAllUsernames(int userId) {
        String sql = "SELECT username FROM users";
        ArrayList<String> usernames = new ArrayList<>();

        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set the query parameter for user_id
            stmt.setInt(1, userId);

            // Execute the query
            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet != null) {
                    
                    // create arraylist of usernames
                    while (resultSet.next())
                        usernames.add(resultSet.getString("username"));     
                } 
                else {
                    // No companyId found with the given user_id
                    System.err.println("No companyId found with ID: " + userId);
                    return null;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return null;
        }

        return usernames;
    }

    // in - user id and username to add
    // out - true if username was set successfully, else false
    public boolean setUsername(int userId, String newUsername) {
        String sql = "UPDATE users SET username = ? WHERE user_id = ?";

        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {

            // Debugging connection
            System.out.println("Connection Test: " + connection);

            // Set query parameters
            stmt.setString(1, newUsername);   // Set the new username
            stmt.setInt(2, userId);           // Set the user_id for which we are updating the name

            // Execute the update
            int rowsAffected = stmt.executeUpdate();
            System.out.println("Rows affected: " + rowsAffected);

            return rowsAffected > 0;  // Return true if update was successful

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("SQLState: " + e.getSQLState());
            System.err.println("Error Code: " + e.getErrorCode());
            System.err.println("Message: " + e.getMessage());
            return false;  // Return false in case of an error
        }
    }

    // Set company_id for a user
    public boolean setCompanyId(int userId, int newCompanyId) {
        String sql = "UPDATE users SET company_id = ? WHERE user_id = ?";
        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, newCompanyId);
            stmt.setInt(2, userId);
            int rowsAffected = stmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // Set password for a user
    public boolean setPassword(int userId, String newPassword) {
        String sql = "UPDATE users SET password = ? WHERE user_id = ?";
        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, newPassword);
            stmt.setInt(2, userId);
            int rowsAffected = stmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // Set role for a user
    public boolean setRole(int userId, String newRole) {
        String sql = "UPDATE users SET role = ? WHERE user_id = ?";
        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, newRole);
            stmt.setInt(2, userId);
            int rowsAffected = stmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // Set created_at timestamp for a user
    public boolean setCreatedAt(int userId, Timestamp newCreatedAt) {
        String sql = "UPDATE users SET created_at = ? WHERE user_id = ?";
        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setTimestamp(1, newCreatedAt);
            stmt.setInt(2, userId);
            int rowsAffected = stmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static void main(String[] args) {
        // Create an instance of the class
        // UsersService teamService = new UsersService();
    
        // // Fake data for testing
        // int userId = 101; // Example user ID
        // int companyId = 1; // Example company ID
        // String username = "testUser"; // Example username
        // String password = "password123"; // Example password
        // String role = "admin"; // Example role
        // Timestamp createdAt = new Timestamp(System.currentTimeMillis()); // Current timestamp
    
        // // Call the addUser method and print the result
        // boolean result = teamService.addUser(userId, companyId, username, password, role, createdAt);
    
        // if (result) {
        //     System.out.println("User added successfully!");
        // } else {
        //     System.out.println("Failed to add user.");
        // }
    }
    
}

