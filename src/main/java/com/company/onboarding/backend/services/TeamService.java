package com.company.onboarding.backend.services;

import com.company.onboarding.backend.config.DBConfig;

import java.sql.*;

public class TeamService {

    // Method to assign a process to a team
    public boolean assignProcessToTeam(int teamId, int processId) {
        try (Connection connection = DBConfig.getConnection()) {
            String sql = "UPDATE teams SET process_id = ? WHERE id = ?";
            try (PreparedStatement stmt = connection.prepareStatement(sql)) {
                stmt.setInt(1, processId);
                stmt.setInt(2, teamId);
                int rowsAffected = stmt.executeUpdate();

                return rowsAffected > 0; // If rows affected > 0, the update was successful
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return false; // If an error occurs, return false
        }
    }

    @Override
    public String toString() {
        return "TeamService []";
    }
}
}

