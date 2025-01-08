package com.company.onboarding.backend.models;

public class User {
    
    // Fields
    private int id;           // Unique identifier for the user
    private String username;  // Username for login
    private String email;     // Email associated with the user account
    private String password;  // Password for the user account

    // Default constructor
    public User() {
    }

    // Parameterized constructor for initializing user with id, username, email, and password
    public User(int id, String username, String email, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Getters and Setters

    /**
     * Get the ID of the user
     * @return id
     */
    public int getId() {
        return id;
    }

    /**
     * Set the ID of the user
     * @param id The ID to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Get the username of the user
     * @return username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Set the username of the user
     * @param username The username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * Get the email of the user
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Set the email of the user
     * @param email The email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Get the password of the user
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Set the password of the user
     * @param password The password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    // Optional: Override toString method for easier debugging and logging
    @Override
    public String toString() {
        return "User{" +
               "id=" + id +
               ", username='" + username + '\'' +
               ", email='" + email + '\'' +
               '}';
    }
}
