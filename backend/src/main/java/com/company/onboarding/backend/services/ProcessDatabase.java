package com.company.onboarding.backend.services;

import java.sql.*;
import java.util.ArrayList;
import com.company.onboarding.backend.config.DBConfig;

public class ProcessDatabase {

    // Function to get all process names
    public ArrayList<String> getAllProcessNames() {
        ArrayList<String> processNames = new ArrayList<>();
        String query = "SELECT process_name FROM processes";

        try (Connection conn = DBConfig.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                String processName = rs.getString("process_name");
                processNames.add(processName);
            }

        } catch (SQLException e) {
            System.out.println("An error occurred while fetching process names: " + e.getMessage());
        }

        return processNames;
    }

    // Function to get process name by ID
    public String getProcessNameById(int processId) {
        String processName = null;
        String sql = "SELECT process_name FROM processes WHERE process_id = ?";

        try (Connection connection = DBConfig.getConnection();
             PreparedStatement stmt = connection.prepareStatement(sql)) {

            stmt.setInt(1, processId);  
            ResultSet resultSet = stmt.executeQuery();

            // If a result is returned, extract the process name
            if (resultSet.next()) {
                processName = resultSet.getString("process_name");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return processName;
    }

    public static void main(String[] args) {
        // // Create an instance of ProcessDatabase
        // ProcessDatabase processDatabase = new ProcessDatabase();

        // // Get all process names
        // ArrayList<String> processNames = processDatabase.getAllProcessNames();

        // // Print out the process names
        // for (String name : processNames) {
        //     System.out.println(name);
        // }
    }
}
