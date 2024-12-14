package com.example.weatherapp;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        // For simplicity, hardcode user check
        if ("user".equals(user.getUsername()) && "password".equals(user.getPassword())) {
            return "Login successful!";
        }
        return "Invalid credentials!";
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        // For demo purposes, just return success
        return "Registration successful!";
    }
}
