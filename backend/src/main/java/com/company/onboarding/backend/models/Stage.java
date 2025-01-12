package com.company.onboarding.backend.models;

public class Stage {
    
    // Fields
    private int id;
    private String name;
    private String content;  // Content or description for this stage
    
    // Default constructor
    public Stage() {
    }

    // Parameterized constructor for initializing stage with id, name, and content
    public Stage(int id, String name, String content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }

    // Getters and Setters
    
    /**
     * Get the ID of the stage
     * @return id
     */
    public int getId() {
        return id;
    }

    /**
     * Set the ID of the stage
     * @param id The ID to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Get the name of the stage
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name of the stage
     * @param name The name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the content of the stage
     * @return content
     */
    public String getContent() {
        return content;
    }

    /**
     * Set the content of the stage
     * @param content The content to set
     */
    public void setContent(String content) {
        this.content = content;
    }

    // Optional: Override toString method for easier debugging and logging
    @Override
    public String toString() {
        return "Stage{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", content='" + content + '\'' +
               '}';
    }
}
