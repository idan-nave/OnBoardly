package com.company.onboarding.backend.models;

public class Company {

    // Class fields
    private int id;
    private String name;
    private String email;

    // Default constructor
    public Company() {
    }

    // Parameterized constructor for initializing the fields
    public Company(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getters and Setters

    /**
     * Get the ID of the company
     * @return id
     */
    public int getId() {
        return id;
    }

    /**
     * Set the ID of the company
     * @param id The ID to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Get the name of the company
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name of the company
     * @param name The name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the email of the company
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Set the email of the company
     * @param email The email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    // Optional: Override toString method for easier debugging and logging
    @Override
    public String toString() {
        return "Company{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", email='" + email + '\'' +
               '}';
    }
}
