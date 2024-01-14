package com.example.example3.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.example3.entity.User;





@Repository
public interface UserRepository extends JpaRepository<User,Long> {
 Page<User> findAll(Pageable pageable);

    

}



