package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.example3.entity.Brand;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BrandRepository extends JpaRepository<Brand, Long> {
    Page<Brand> findAll(Pageable pageable);

}
