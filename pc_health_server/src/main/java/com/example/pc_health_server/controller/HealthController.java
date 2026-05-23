package com.example.pc_health_server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping()
    public String health() {
        return "OK";
    }
}
