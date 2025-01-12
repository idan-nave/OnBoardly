package com.company.onboarding.backend.dtos;

// /backend/models/AssignProcessRequest.java
public class AssignProcessDTO {
    private int teamId;
    private int processId;

    // Getters and Setters
    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public int getProcessId() {
        return processId;
    }

    public void setProcessId(int processId) {
        this.processId = processId;
    }
}
