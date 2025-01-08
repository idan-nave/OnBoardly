package com.company.onboarding.backend.models;

// /backend/models/Team.java
public class Team {
    private int id;
    private String name;
    private int processId; // The ID of the process assigned to this team

    // Constructor
    public Team(int id, String name, int processId) {
        this.id = id;
        this.name = name;
        this.processId = processId;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getProcessId() {
        return processId;
    }

    public void setProcessId(int processId) {
        this.processId = processId;
    }
}
