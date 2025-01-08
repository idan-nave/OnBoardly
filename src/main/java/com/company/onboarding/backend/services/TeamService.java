package com.company.onboarding.backend.services;

import com.company.onboarding.backend.config.DBConfig;

import java.sql.*;

// public class TeamService {

//     // Method to assign a process to a team
//     public boolean assignProcessToTeam(int teamId, int processId) {
//         try (Connection connection = DBConfig.getConnection()) {
//             String sql = "UPDATE teams SET process_id = ? WHERE id = ?";
//             try (PreparedStatement stmt = connection.prepareStatement(sql)) {
//                 stmt.setInt(1, processId);
//                 stmt.setInt(2, teamId);
//                 int rowsAffected = stmt.executeUpdate();

//                 return rowsAffected > 0; // If rows affected > 0, the update was successful
//             }
//         } catch (SQLException e) {
//             e.printStackTrace();
//             return false; // If an error occurs, return false
//         }
//     }

//     @Override
//     public String toString() {
//         return "TeamService []";
//     }
// }

import java.sql.*;

public class DatabaseConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/database_name";
    private static final String USER = "username";
    private static final String PASSWORD = "password";

    public static void getTeamsNames() {
        String query = "SELECT team_id, team_name FROM teams";

        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) {

            while (resultSet.next()) {
                int teamId = resultSet.getInt("team_id");
                String teamName = resultSet.getString("team_name");
                System.out.println("ID: " + teamId + ", Name: " + teamName);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        getTeamsNames();
    }
}

