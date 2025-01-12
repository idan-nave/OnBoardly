package com.company.onboarding.backend.models;

import java.util.List;

public class Process {
    
    // Fields
    private int id;
    private String name;
    private String description;
    private List<Stage> stages; // List of stages associated with this process
    
    // Default constructor
    public Process() {
    }

    // Parameterized constructor for initializing process with an ID and name
    public Process(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Full parameterized constructor for initializing all fields
    public Process(int id, String name, String description, List<Stage> stages) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.stages = stages;
    }

    // Getters and Setters
    
    /**
     * Get the ID of the process
     * @return id
     */
    public int getId() {
        return id;
    }

    /**
     * Set the ID of the process
     * @param id The ID to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Get the name of the process
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name of the process
     * @param name The name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the description of the process
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Set the description of the process
     * @param description The description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Get the list of stages associated with this process
     * @return stages
     */
    public List<Stage> getStages() {
        return stages;
    }

    /**
     * Set the list of stages associated with this process
     * @param stages The list of stages to set
     */
    public void setStages(List<Stage> stages) {
        this.stages = stages;
    }

    // Optional: Override toString method for easier debugging and logging
    @Override
    public String toString() {
        return "Process{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", description='" + description + '\'' +
               ", stages=" + stages +
               '}';
    }
}
