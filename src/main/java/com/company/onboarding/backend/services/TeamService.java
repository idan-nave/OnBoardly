package com.company.onboarding.backend.services;
import com.company.onboarding.backend.config.DBConfig;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList; 


public class TeamService {

public ArrayList<String> getAllTeamNames() {
    String sql = "SELECT team_name FROM teams";
    ArrayList<String> teamNames = new ArrayList<>(); // Initialize the ArrayList

    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql);
         ResultSet response = stmt.executeQuery()) {

        // Process the ResultSet
        while (response.next()) {
            teamNames.add(response.getString("team_name"));
        }

    } catch (SQLException e) {
        // Log or handle SQL exceptions
        System.err.println("Error while fetching team names: " + e.getMessage());
    }

    return teamNames; // Return the list, empty if no teams or on failure
}


public boolean addTeam(int teamId, int companyId, String teamName, int processId, Timestamp createdAt) {
    String sql = "INSERT INTO teams (team_id, company_id, team_name, process_id, created_at) VALUES (?, ?, ?, ?, ?)";

    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set query parameters
        stmt.setInt(1, teamId);
        stmt.setInt(2, companyId);
        stmt.setString(3, teamName);
        stmt.setInt(4, processId);
        stmt.setTimestamp(5, createdAt);

        // Execute the update
        int rowsAffected = stmt.executeUpdate();
        System.out.println("Rows affected: " + rowsAffected);

        return rowsAffected > 0; // True if the insert is successful

    } catch (SQLException e) {
        e.printStackTrace();
        System.err.println("SQLState: " + e.getSQLState());
        System.err.println("Error Code: " + e.getErrorCode());
        System.err.println("Message: " + e.getMessage());
        return false;
    }
}


public String getTeamName(int teamId) {
    String sql = "SELECT team_name FROM teams WHERE team_id = ?";
    
    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set the query parameter for team_id
        stmt.setInt(1, teamId);

        // Execute the query
        try (ResultSet resultSet = stmt.executeQuery()) {
            if (resultSet.next()) {
                // Retrieve and return the team name
                return resultSet.getString("team_name");
            } else {
                // No team found with the given team_id
                System.err.println("No team found with ID: " + teamId);
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


public boolean setTeamName(int teamId, String newTeamName) {
    String sql = "UPDATE teams SET team_name = ? WHERE team_id = ?";

    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set query parameters
        stmt.setString(1, newTeamName);  // Set the new team name
        stmt.setInt(2, teamId);  // Set the team_id for which we are updating the name

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


public Integer getTeamIdByProcessId(int processId) {
    String sql = "SELECT team_id FROM teams WHERE process_id = ?";

    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set the query parameter for process_id
        stmt.setInt(1, processId);

        // Execute the query
        try (ResultSet resultSet = stmt.executeQuery()) {
            if (resultSet.next()) {
                // Retrieve and return the team_id
                return resultSet.getInt("team_id");
            } else {
                // No team found with the given process_id
                System.err.println("No team found with process_id: " + processId);
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


public Integer getProcessIdByTeamId(int teamId) {
    String sql = "SELECT process_id FROM teams WHERE team_id = ?";

    try (Connection connection = DBConfig.getConnection();
         PreparedStatement stmt = connection.prepareStatement(sql)) {

        // Debugging connection
        System.out.println("Connection Test: " + connection);

        // Set the query parameter for team_id
        stmt.setInt(1, teamId);

        // Execute the query
        try (ResultSet resultSet = stmt.executeQuery()) {
            if (resultSet.next()) {
                // Retrieve and return the process_id
                return resultSet.getInt("process_id");
            } else {
                // No process found with the given team_id
                System.err.println("No process found with team_id: " + teamId);
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
    TeamService t = new TeamService();

    // int teamId1 = 4;
    // int companyId = 101;
    // String companyName1 = "Kafka";
    // int process_id = 2;
    // Timestamp createdAt1 = new Timestamp(System.currentTimeMillis()); // Current timestamp

    // // System.out.println(t.getAllTeamNames());
    // t.addTeam(teamId1, companyId, companyName1, process_id, createdAt1);
    // System.out.println(t.getTeamName(1));
// t.setTeamName(4, "ZIM Digital");
// System.out.println(t.getTeamIdByProcessId(1));
// System.out.println(t.getProcessIdByTeamId(2));

}
}
