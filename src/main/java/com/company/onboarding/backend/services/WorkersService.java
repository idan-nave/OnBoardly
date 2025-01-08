package com.company.onboarding.backend.services;
import com.company.onboarding.backend.config.DBConfig;
import java.sql.*;
import java.util.ArrayList;

public class WorkersService {


   public boolean addWorker(int workerId, int teamId, String workerName, String status, Date startDate, Date endDate) {
    String sql = "INSERT INTO workers VALUES (?, ?, ?, ?, ?, ?)";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set query parameters
        stmt.setInt(1, workerId);
        stmt.setInt(2, teamId);
        stmt.setString(3, workerName);
        stmt.setString(4, status);

        // Convert dates to SQL Date
        java.sql.Date sqlStartDate = new java.sql.Date(startDate.getTime());
        java.sql.Date sqlEndDate = (endDate != null) ? new java.sql.Date(endDate.getTime()) : null;

        stmt.setDate(5, sqlStartDate);
        stmt.setDate(6, sqlEndDate);

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


    // returns array of worker names
    public ArrayList<String> getAllWorkerNames() {
        String sql = "SELECT worker_name FROM workers";
        ArrayList<String> names = new ArrayList<>(); // Initialize the ArrayList

        try (Connection connection = DBConfig.getConnection();
            PreparedStatement stmt = connection.prepareStatement(sql);
            ResultSet response = stmt.executeQuery()) {

            // Process the ResultSet
            while (response.next()) {
                names.add(response.getString("worker_name"));
            }

        } catch (SQLException e) {
            // Log or handle SQL exceptions
            System.err.println("Error while fetching worker names: " + e.getMessage());
        }

        return names; // Return the list, empty if no workers or on failure
    }

    public static void main(String[] args) {
        WorkersService ws = new WorkersService();
        
        // Define start and end dates
        Date startDate = Date.valueOf("2025-01-08");
        Date endDate = Date.valueOf("2025-01-11");

        boolean success = ws.addWorker(6, 1, "Daniel", "pending", startDate, endDate);
        
        // Print the result
        System.out.println("Worker added successfully: " + success);

        ArrayList<String> a =  ws.getAllWorkerNames();
        for(int i = 0; i < a.size(); i++){
            System.out.println(a.get(i));
        }
    }
}

