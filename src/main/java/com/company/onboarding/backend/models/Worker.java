package com.company.onboarding.backend.models;

public class Worker {

    // Fields
    private int id;              // Unique identifier for the worker
    private String name;         // Name of the worker
    private String teamAssigned; // The team that the worker is assigned to

    // Default constructor
    public Worker() {
    }

    // Parameterized constructor for initializing worker with id, name, and teamAssigned
    public Worker(int id, String name, String teamAssigned) {
        this.id = id;
        this.name = name;
        this.teamAssigned = teamAssigned;
    }

    // Getters and Setters

    /**
     * Get the ID of the worker
     * @return id
     */
    public int getId() {
        return id;
    }

    /**
     * Set the ID of the worker
     * @param id The ID to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Get the name of the worker
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name of the worker
     * @param name The name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the team assigned to the worker
     * @return teamAssigned
     */
    public String getTeamAssigned() {
        return teamAssigned;
    }

    /**
     * Set the team assigned to the worker
     * @param teamAssigned The team to assign
     */
    public void setTeamAssigned(String teamAssigned) {
        this.teamAssigned = teamAssigned;
    }

    // Optional: Override toString method for easier debugging and logging
    @Override
    public String toString() {
        return "Worker{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", teamAssigned='" + teamAssigned + '\'' +
               '}';
    }
}
