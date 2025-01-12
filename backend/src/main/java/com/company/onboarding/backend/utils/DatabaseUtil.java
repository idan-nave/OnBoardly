package com.company.onboarding.backend.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DatabaseUtil {
    // פרטי חיבור למסד הנתונים
    private static final String DB_URL = "jdbc:mysql://localhost:8889/onboardly_db";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "secretpassword";

    // פונקציה לחיבור למסד הנתונים
    public static Connection getConnection() throws Exception {
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }

    // פונקציה לאימות משתמש
    public static boolean authenticateUser(String username, String password) {
        String query = "SELECT * FROM users WHERE username = ? AND password = ?;";
        try (Connection connection = getConnection();
             PreparedStatement stmt = connection.prepareStatement(query)) {

            stmt.setString(1, username); // הכנסת שם המשתמש לשאילתה
            stmt.setString(2, password); // הכנסת הסיסמה לשאילתה

            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next(); // אם יש תוצאה, המשתמש מאומת
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false; // במקרה של שגיאה, החזר false
        }
    }

    // פונקציית בדיקה - חיבור למסד הנתונים
    public static void testConnection() {
        try {
            Connection connection = getConnection();
            if (connection != null) {
                System.out.println("Connection successful!");
            } else {
                System.out.println("Connection failed!");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // פונקציית בדיקה - אימות משתמש
    public static void testAuthentication(String testUsername, String testPassword) {
        boolean isAuthenticated = authenticateUser(testUsername, testPassword);
        if (isAuthenticated) {
            System.out.println("User authenticated successfully!");
        } else {
            System.out.println("Authentication failed.");
        }
    }

    // פונקציה ראשית להרצת בדיקות
    public static void main(String[] args) {
        // בדיקת חיבור למסד הנתונים
        testConnection();

        // בדיקת אימות משתמש
        String testUsername = "testuser"; // שם משתמש לבדיקה
        String testPassword = "testpass"; // סיסמה לבדיקה

        testAuthentication(testUsername, testPassword);
    }
}
