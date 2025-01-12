package com.company.onboarding.backend.handlers;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.OutputStream;
import com.company.onboarding.backend.utils.DatabaseUtil;

public class LoginHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        // הוספת כותרת CORS כדי לאפשר גישה מהדומיינים המתאימים
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");

        if ("OPTIONS".equals(exchange.getRequestMethod())) {
            // אם מדובר בבקשה OPTIONS (Preflight), יש להחזיר תשובה מיידית
            exchange.sendResponseHeaders(200, -1);
            exchange.getResponseBody().close();
            return;  // חוזרים מיד אחרי שליחת התשובה
        }

        if ("POST".equals(exchange.getRequestMethod())) {
            // קריאת הנתונים מהבקשה כ-JSON
            InputStreamReader reader = new InputStreamReader(exchange.getRequestBody());
            BufferedReader bufferedReader = new BufferedReader(reader);
            StringBuilder requestBody = new StringBuilder();
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                requestBody.append(line);
            }

            // פענוח JSON ידני
            String requestJson = requestBody.toString();
            String username = null;
            String password = null;

            try {
                username = extractJsonField(requestJson, "username");
                password = extractJsonField(requestJson, "password");
            } catch (Exception e) {
                String response = "{\"success\": false, \"message\": \"Invalid JSON format!\"}";
                exchange.sendResponseHeaders(400, response.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
                return;
            }

            // הדפסת הנתונים שנשלחו לצורך ניטור
            System.out.println("Received username: " + username);
            System.out.println("Received password: " + password);

            // קריאה לפונקציה כדי לבדוק אם המשתמש והסיסמה נכונים
            boolean isAuthenticated = DatabaseUtil.authenticateUser(username, password);

            // הדפסת התוצאה של האותנטיקציה
            System.out.println("Authentication result: " + isAuthenticated);

            // אם המשתמש קיים והסיסמה נכונה
            String response;
            int statusCode;
            if (isAuthenticated) {
                response = "{\"success\": true, \"message\": \"Login successful!\"}";
                statusCode = 200; // Success
            } else {
                response = "{\"success\": false, \"message\": \"Incorrect username or password!\"}";
                statusCode = 401; // Unauthorized
            }

            // שליחת התגובה
            exchange.sendResponseHeaders(statusCode, response.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        } else {
            // אם לא POST ולא OPTIONS, לשלוח שגיאה
            String response = "Only POST and OPTIONS methods are allowed.";
            exchange.sendResponseHeaders(405, response.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }

    // פונקציה פשוטה להוציא נתוני JSON
    private String extractJsonField(String json, String field) {
        String search = "\"" + field + "\":\"";
        int startIndex = json.indexOf(search);
        if (startIndex == -1) return null;
        startIndex += search.length();
        int endIndex = json.indexOf("\"", startIndex);
        return json.substring(startIndex, endIndex);
    }
}
