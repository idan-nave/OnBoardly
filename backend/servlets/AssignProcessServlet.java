import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AssignProcessServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Process request
        PrintWriter out = response.getWriter();
        out.println("Process Assigned Successfully");
    }
}
