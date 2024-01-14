package com.example.example3.entity;

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


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


 @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

   //  @Column(nullable = false, unique = true)
   //  private String phone;

   //  @Column(nullable = false, unique = true)
   //  private String username;

    @Column(nullable = false)
    private String password;

    private String status;
}
