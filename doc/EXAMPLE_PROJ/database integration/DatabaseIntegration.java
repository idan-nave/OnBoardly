package backendServer;

import java.awt.Taskbar;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class DatabaseIntegration {

	private static String url = "jdbc:sqlite:statics/bin/db.db";
	private Connection conn;
	
	public DatabaseIntegration() throws SQLException {
		this.conn = DriverManager.getConnection(url);
		createTables();
	}

	private void createTables() {
		String query = "CREATE TABLE IF NOT EXISTS tasks ("
				+ "id INTEGER PRIMARY KEY AUTOINCREMENT,"
				+ "description TEXT,"
				+ "deadline DATE);";
		try {
			Statement st= this.conn.createStatement();
			st.executeQuery(query);
			st.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static Task getOne() {
		
	}
	
	// Make a get all tasks request from the server
	public static ArrayList<Task> getAll() throws SQLException, ValidationException {
		ArrayList<Task> tasks = new ArrayList<Task>();
		String query = "SELECT * FROM tasks;";
		PreparedStatement prst = conn.prepareStatement(query);
		ResultSet rs = prst.executeQuery();
		while(rs.next()) {
			Task newT = new Task(rs.getString("description"), rs.getDate("deadline"), rs.getInt("id"));
			tasks.add(newT);
		}
		prst.close();
		rs.close();
		return tasks;
	}
	
	public static boolean deleteOne() {
		
	}

	public static boolean updateOne(int id, String desc, int days) throws SQLException {
		String query;
		PreparedStatement prst;
		if(desc == "0") {
			query = "UPDATE tasks SET deadline = ? WHERE id = ?";			
			prst = conn.prepareStatement(query);
			prst.setDate(1, new Date(System.currentTimeMillis()+(days * 24L * 60 * 60 * 1000)));
			prst.setInt(2, id);
			
		} else if (days <= 0) {
			query = "UPDATE tasks SET description = ? WHERE id = ?";			
			prst = conn.prepareStatement(query);
			prst.setString(1, desc);
			prst.setInt(2, id);
			
		} else {
			query = "UPDATE tasks SET description = ?, deadline = ? WHERE id = ?";			
			prst = conn.prepareStatement(query);
			prst.setString(1, desc);
			prst.setDate(2, new Date(System.currentTimeMillis()+(days * 24L * 60 * 60 * 1000)));
			prst.setInt(3, id);
		}
		int row = prst.executeUpdate();
		if(row == 1) {
			return true;
		}
		return false;
	}
	
	// Make a create task request from the server
	public static boolean createTask(Task newTask) throws SQLException {
		String query = "INSERT INTO tasks (description, deadline) "
				+ "VALUES (?, ?)";
		PreparedStatement prst = conn.prepareStatement(query);
		prst.setString(1, newTask.getDescription());
		prst.setDate(2, (Date) newTask.getDeadline());
		int rows = prst.executeUpdate();
		if(rows == 1) {
			return true;
		}
		return false;
	}
}
