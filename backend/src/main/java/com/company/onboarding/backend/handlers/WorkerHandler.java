//
//
//package com.company.onboarding.backend.handlers;
//
//import com.sun.net.httpserver.HttpHandler;
//import com.sun.net.httpserver.HttpExchange;
//import java.io.IOException;
//import java.io.OutputStream;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import com.google.gson.Gson;
//
//    public class WorkerHandler implements HttpHandler {
//
//        @Override
//        public void handle(HttpExchange exchange) throws IOException {
//            // בודק אם מדובר בבקשת GET
//            if ("GET".equals(exchange.getRequestMethod())) {
//                try {
//                    // שלוף את המידע מה-DB
//                    String jsonResponse = getWorkersFromDatabase();
//
//                    // הגדר את קודי הסטטוס והכותרות
//                    exchange.sendResponseHeaders(200, jsonResponse.getBytes().length);
//                    OutputStream os = exchange.getResponseBody();
//                    os.write(jsonResponse.getBytes());
//                    os.close();
//                } catch (SQLException e) {
//                    // טיפול בשגיאות SQL
//                    exchange.sendResponseHeaders(500, 0); // שגיאה פנימית
//                    exchange.getResponseBody().close();
//                }
//            } else {
//                exchange.sendResponseHeaders(405, -1); // Method Not Allowed אם לא GET
//                exchange.getResponseBody().close();
//            }
//        }
//
//        // פונקציה לשלוף את כל העובדים מה-DB
//        private String getWorkersFromDatabase() throws SQLException {
//            StringBuilder jsonResponse = new StringBuilder();
//            jsonResponse.append("[");
//
//            String query = "SELECT * FROM workers"; // שאילתת SQL לשלוף את כל העובדים
//
//            // התחברות לבסיס הנתונים
//            try (Connection connection = DatabaseConnection.getConnection(); // חיבור ל-DB
//                 PreparedStatement stmt = connection.prepareStatement(query)) {
//
//                ResultSet rs = stmt.executeQuery();
//
//                // מייצר JSON לכל עובד
//                while (rs.next()) {
//                    String workerJson = String.format("{\"id\":%d, \"full_name\":\"%s\", \"email\":\"%s\", \"position\":\"%s\", \"department\":\"%s\", \"recruitment_start_date\":\"%s\", \"employment_start_date\":\"%s\", \"onboarding_stage\":\"%s\", \"onboarding_progress\":\"%s\"}",
//                            rs.getInt("id"),
//                            rs.getString("full_name"),
//                            rs.getString("email"),
//                            rs.getString("position"),
//                            rs.getString("department"),
//                            rs.getDate("recruitment_start_date").toString(),
//                            rs.getDate("employment_start_date").toString(),
//                            rs.getString("onboarding_stage"),
//                            rs.getString("onboarding_progress"));
//
//                    jsonResponse.append(workerJson);
//                    if (!rs.isLast()) {
//                        jsonResponse.append(","); // מפריד בין העובדים
//                    }
//                }
//            }
//
//            jsonResponse.append("]");
//            return jsonResponse.toString(); // מחזיר את המידע כ-JSON
//        }
//    }
//
//
//}
