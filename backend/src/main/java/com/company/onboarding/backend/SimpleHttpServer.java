package com.company.onboarding.backend;

import com.company.onboarding.backend.handlers.RegisterHandler;
import com.sun.net.httpserver.HttpServer;
import com.company.onboarding.backend.handlers.DashboardHandler;
import com.company.onboarding.backend.handlers.LoginHandler;

import java.net.InetSocketAddress;

public class SimpleHttpServer {
    public static void main(String[] args) throws Exception {
        // יצירת אובייקט HttpServer
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // הגדרת ה-Handlers
//        server.createContext("/register", new RegisterHandler());
        server.createContext("/login", new LoginHandler());
//        server.createContext("/worker", new WorkerHandler());
//        server.createContext("/process", new ProccessHandler());
//        server.createContext("/teams", new TeamsHandler());
//        server.createContext("/addWorker", new AddWorkerHandler());
//        server.createContext("/register", new RegisterHandler());
        // התחלת השרת
        server.start();
        System.out.println("Server started on http://localhost:8080");
    }
}

