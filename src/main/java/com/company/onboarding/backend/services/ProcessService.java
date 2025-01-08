package com.company.onboarding.backend.services;

import com.company.onboarding.backend.config.DBConfig;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProcessService {

    public static List<String> getAllProcessNames() {
        List<String> processNames = new ArrayList<>();
        try (Connection connection = DBConfig.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT process_name FROM processes")) { // שינוי בשאילתה

            while (resultSet.next()) {
                String processName = resultSet.getString("process_name"); // שינוי בשם המשתנה
                processNames.add(processName);
            }

        } catch (SQLException e) {
            e.printStackTrace(); // טיפול בשגיאות
        }
        return processNames;
    }

    public static void main(String[] args) {
        List<String> processes = getAllProcessNames();
        System.out.println(processes);
    }
}