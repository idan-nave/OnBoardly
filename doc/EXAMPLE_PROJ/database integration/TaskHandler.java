package handlers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import backendServer.DatabaseIntegration;
import backendServer.Task;
import backendServer.ValidationException;



public class TaskHandler implements HttpHandler {
	
	@Override
	public void handle(HttpExchange exchange) throws IOException {
    	Handler handler = new Handler(exchange);
		String method = exchange.getRequestMethod();
        String path = exchange.getRequestURI().getPath();
        String[] pathParts = path.split("/");
        
//        switch(method) {
//        case "GET":
//        	if(pathParts.length == 2) {
//        		handleGetAllTasks(handler);
//        	} else {
//        		 handleGetTaskById(handler, Integer.parseInt(pathParts[2]));
//        	}
//        }
        try {
            if ("POST".equalsIgnoreCase(method) && pathParts.length == 2) {
                handleCreateTask(handler);
            } else if ("GET".equalsIgnoreCase(method) && pathParts.length == 2) {
                handleGetAllTasks(handler);
            } else if ("GET".equalsIgnoreCase(method) && pathParts.length == 3) {
                handleGetTaskById(handler, Integer.parseInt(pathParts[2]));
            } else if ("PUT".equalsIgnoreCase(method) && pathParts.length == 3) {
                handleUpdateTask(handler, Integer.parseInt(pathParts[2]));
            } else if ("DELETE".equalsIgnoreCase(method) && pathParts.length == 3) {
                handleDeleteTask(handler, Integer.parseInt(pathParts[2]));
            } else {
                handler.sendMsg("Invalid endpoint or method", 404);
            }
        } catch (Exception e) {
            handler.sendMsg("Error: " + e.getMessage(), 500);
        }
	}

	private void handleCreateTask(Handler handler) throws IOException {
	    try {
	        String description = handler.getStr("description");
	        int daysToDeadline = handler.getInt("daysToDeadline");

	        if (daysToDeadline < 0) {
	            handler.sendMsg("'daysToDeadline' must be a positive integer!", 400);
	            return;
	        }

	        Task task = new Task(description, daysToDeadline);
        	if(DatabaseIntegration.createTask(task)) {
        		handler.sendMsg("Task created successfully: " + task, 201);
        	} else {
        		handler.sendMsg("Task couldnt be created", 401);
	        } 
	    } catch (SQLException e) {
        	e.printStackTrace();
        } catch (ValidationException e) {
	        handler.sendMsg("Validation Error: " + e, 400);
	    }
	}

	private void handleGetAllTasks(Handler handler) throws IOException, SQLException, ValidationException {
	    ArrayList<Task> tasks = DatabaseIntegration.getAll();
	    StringBuilder response = new StringBuilder("Tasks List:\n");
	    for (Task task : tasks) {
	        response.append(task).append("\n");
	    }

	    handler.sendMsg(response.toString(), 200);
	}

	private void handleGetTaskById(Handler handler, int id) throws IOException {
	    if (id <= 0 || id > tasks.size()) {
	        handler.sendMsg("Task not found with ID: " + id, 404);
	        return;
	    }

	    handler.sendMsg(tasks.get(id-1).toString(), 200);
	}

	private void handleUpdateTask(Handler handler, int id) throws IOException, SQLException {
	    String description = handler.getStr("description");
		int daysToDeadline = handler.getInt("daysToDeadline");

		if(DatabaseIntegration.updateOne(id, description, daysToDeadline)) {
			handler.sendMsg("Task updated successfully", 200);	        	
		} else {
			handler.sendMsg("Task didnt update", 400);	        	
		}
	}

	private void handleDeleteTask(Handler handler, int id) throws IOException {
	    if (id <= 0 || id > tasks.size()) {
	        handler.sendMsg("Task not found with ID: " + id, 404);
	        return;
	    }

	    Task removedTask = tasks.remove(id-1);
	    handler.sendMsg("Task deleted successfully: " + removedTask, 200);
	}

}
