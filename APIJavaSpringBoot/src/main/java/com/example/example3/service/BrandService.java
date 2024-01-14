package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.Brand;

public interface BrandService {
    Brand createBrand(Brand brand);

    Brand getBrandById(Long brandId);

    Page<Brand> getAllBrands(Pageable pageable);

    Brand updateBrand(Brand brand);

    void deleteBrand(Long brandId);
}
