package com.capstone.backendapp.controller;

import com.capstone.backendapp.entity.User;
import com.capstone.backendapp.service.UserService;
import com.capstone.backendapp.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User loginRequest) {
        User user = userService.findByUsername(loginRequest.getUsername());
        if (user != null && new BCryptPasswordEncoder().matches(loginRequest.getPassword(), user.getPassword())) {
            return jwtUtil.generateToken(user.getUsername());
        }
        throw new RuntimeException("Invalid credentials");
    }

    @GetMapping("/me")
    public User getUserDetails(@RequestHeader("Authorization") String token) {
        String username = jwtUtil.extractUsername(token);
        return userService.findByUsername(username);
    }
}
