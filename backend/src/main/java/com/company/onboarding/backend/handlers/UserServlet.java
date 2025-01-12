package com.company.onboarding.backend.servlets;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import com.company.onboarding.backend.dtos.AssignProcessDTO;
import com.company.onboarding.backend.services.TeamService;
import com.fasterxml.jackson.databind.ObjectMapper; // For parsing JSON

@WebServlet("/assignProcess") // Servlet mapped to /assignProcess URL
public class AssignProcessServlet extends HttpServlet {

    // Create a TeamService instance to use the business logic
    private TeamService teamService = new TeamService();
    private ObjectMapper objectMapper = new ObjectMapper(); // Reusable ObjectMapper instance
    
    // Override the doGet method - unsupported
    // @Override
    // protected void doGet(HttpServletRequest request, HttpServletResponse response)
    //         throws ServletException, IOException {
    //     response.setContentType("application/json");
    //     response.getWriter().write("{\"message\": \"GET method is not supported. Use POST instead.\"}");
    // }

    // Override the doPost method to handle the POST request
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Set the response content type to JSON
        response.setContentType("application/json");

        // Read the incoming JSON request body using request.getReader()
        StringBuilder sb = new StringBuilder();
        String line;

        try (BufferedReader reader = request.getReader()) {
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        } catch (IOException e) {
            // Log and return an error response if reading the request fails
            handleError(response, HttpServletResponse.SC_BAD_REQUEST, "Invalid JSON data");
            return;
        }

        // Deserialize the JSON request to AssignProcessDTO object
        AssignProcessDTO assignRequest;
        try {
            assignRequest = objectMapper.readValue(sb.toString(), AssignProcessDTO.class);
        } catch (Exception e) {
            // Handle JSON parsing errors
            handleError(response, HttpServletResponse.SC_BAD_REQUEST, "Failed to parse request body");
            return;
        }

        // Validate the input data (e.g., teamId and processId must not be null or
        // negative)
        if (assignRequest.getTeamId() <= 0 || assignRequest.getProcessId() <= 0) {
            handleError(response, HttpServletResponse.SC_BAD_REQUEST, "Invalid department ID or process ID");
            return;
        }

        // Call the service to assign the process to the department
        boolean success = teamService.assignProcessToTeam(assignRequest.getTeamId(), assignRequest.getProcessId());

        // Prepare the response based on the result of the assignment operation
        if (success) {
            response.setStatus(HttpServletResponse.SC_OK);
            sendResponse(response, "Onboarding process assigned successfully");
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            sendResponse(response, "Failed to assign onboarding process");
        }
    }

    /**
     * Helper method to send JSON response with a message
     * 
     * @param response The HTTP response object
     * @param message  The message to send in the response body
     * @throws IOException
     */
    private void sendResponse(HttpServletResponse response, String message) throws IOException {
        PrintWriter out = response.getWriter();
        out.println("{\"message\": \"" + message + "\"}");
    }

    /**
     * Helper method to handle error responses
     * 
     * @param response     The HTTP response object
     * @param statusCode   The HTTP status code (e.g., 400, 500)
     * @param errorMessage The error message to include in the response
     * @throws IOException
     */
    private void handleError(HttpServletResponse response, int statusCode, String errorMessage) throws IOException {
        response.setStatus(statusCode);
        sendResponse(response, errorMessage);
    }
}
