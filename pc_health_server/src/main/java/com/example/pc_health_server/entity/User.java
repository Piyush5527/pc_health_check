package com.example.pc_health_server.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Table(name = "users")
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User extends MasterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    UUID userId;

    @Column(name = "username")
    String username;

    @Column(name = "password")
    String password;
}
