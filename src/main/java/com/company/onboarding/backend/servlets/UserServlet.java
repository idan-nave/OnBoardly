package com.company.onboarding.backend.servlets;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class UserServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Handle user login
        PrintWriter out = response.getWriter();
        out.println("User logged in successfully");
    }
}
