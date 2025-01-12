package services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import config.DBConfig;

public class StagesService {

public boolean addStage(int stageId, int processId, String stageName, String stageDescription, int orderNumber) {
    String sql = "INSERT INTO stages VALUES (?, ?, ?, ?, ?)";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        stmt.setInt(1, stageId);
        stmt.setInt(2, processId);
        stmt.setString(3, stageName);
        stmt.setString(4, stageDescription);
        stmt.setInt(5, orderNumber);

        int rowsAffected = stmt.executeUpdate();
        System.out.println("Rows affected: " + rowsAffected);

        return rowsAffected > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}

public String getStageName(int stageId) {
    String sql = "SELECT stage_name FROM stages WHERE stage_id = ?";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        stmt.setInt(1, stageId);

        try (ResultSet resultSet = stmt.executeQuery()) {
            if (resultSet.next()) {
                return resultSet.getString("stage_name");
            } else {
                System.err.println("No stage found with ID: " + stageId);
                return null;
            }
        }
    } catch (SQLException e) {
        e.printStackTrace();
        return null;
    }
}

public boolean setStageName(int stageId, String newStageName) {
    String sql = "UPDATE stages SET stage_name = ? WHERE stage_id = ?";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set the query parameters
        stmt.setString(1, newStageName);
        stmt.setInt(2, stageId);

        // Execute the update
        int rowsAffected = stmt.executeUpdate();
        System.out.println("Rows affected: " + rowsAffected);

        // Return true if the update was successful
        return rowsAffected > 0;

    } catch (SQLException e) {
        e.printStackTrace();
        System.err.println("SQLState: " + e.getSQLState());
        System.err.println("Error Code: " + e.getErrorCode());
        System.err.println("Message: " + e.getMessage());
        return false;
    }
}

public boolean setStageOrderNumber(int stageId, int newOrderNumber) {

    String sql = "UPDATE stages SET order_number = ? WHERE stage_id = ?";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set query parameters
        stmt.setInt(1, newOrderNumber);
        stmt.setInt(2, stageId);

        // Execute the update
        int rowsAffected = stmt.executeUpdate();
        System.out.println("Rows affected: " + rowsAffected);

        return rowsAffected > 0; // True if update is successful

    } catch (SQLException e) {
        e.printStackTrace();
        System.err.println("SQLState: " + e.getSQLState());
        System.err.println("Error Code: " + e.getErrorCode());
        System.err.println("Message: " + e.getMessage());
        return false;
    }
}

public boolean setStageDescription(int stageId, String newDescription) {
    String sql = "UPDATE stages SET stage_description = ? WHERE stage_id = ?";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set the query parameters
        stmt.setString(1, newDescription);
        stmt.setInt(2, stageId);

        // Execute the update
        int rowsAffected = stmt.executeUpdate();
        System.out.println("Rows affected: " + rowsAffected);

        return rowsAffected > 0; // True if the update is successful

    } catch (SQLException e) {
        e.printStackTrace();
        System.err.println("SQLState: " + e.getSQLState());
        System.err.println("Error Code: " + e.getErrorCode());
        System.err.println("Message: " + e.getMessage());
        return false;
    }
}

public String getStageDescription(int stageId) {
    String sql = "SELECT stage_description FROM stages WHERE stage_id = ?";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set the query parameter
        stmt.setInt(1, stageId);

        // Execute the query
        try (ResultSet resultSet = stmt.executeQuery()) {
            if (resultSet.next()) {
                // Retrieve and return the stage description
                return resultSet.getString("stage_description");
            } else {
                // No stage found
                System.err.println("No stage found with ID: " + stageId);
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

public static List<Map<String, Object>> getAllStages() {
    String sql = "SELECT * FROM stages";
    List<Map<String, Object>> stages = new ArrayList<>();

    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql);
         ResultSet resultSet = stmt.executeQuery()) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Iterate through the result set
        while (resultSet.next()) {
            // Create a map to store each stage's details
            Map<String, Object> stage = new HashMap<>();
            stage.put("stage_id", resultSet.getInt("stage_id"));
            stage.put("process_id", resultSet.getInt("process_id"));
            stage.put("stage_name", resultSet.getString("stage_name"));
            stage.put("stage_description", resultSet.getString("stage_description"));
            stage.put("order_number", resultSet.getInt("order_number"));

            // Add the stage to the list
            stages.add(stage);
        }

    } catch (SQLException e) {
        e.printStackTrace();
        System.err.println("SQLState: " + e.getSQLState());
        System.err.println("Error Code: " + e.getErrorCode());
        System.err.println("Message: " + e.getMessage());
    }

    return stages;
}

public Integer getStageIdByName(String stageName) {
    String sql = "SELECT stage_id FROM stages WHERE stage_name = ?";
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Set the query parameter
        stmt.setString(1, stageName);

        // Execute the query
        try (ResultSet resultSet = stmt.executeQuery()) {
            if (resultSet.next()) {
                // Retrieve and return the stage ID
                return resultSet.getInt("stage_id");
            } else {
                // No stage found with the given name
                System.err.println("No stage found with name: " + stageName);
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


public static void main(String[] args) {

    // List<Map<String, Object>> stages = getAllStages();
    // for (Map<String, Object> stage : stages) {
    //     System.out.println(stage + "\n");
    // }
 }
    
}
