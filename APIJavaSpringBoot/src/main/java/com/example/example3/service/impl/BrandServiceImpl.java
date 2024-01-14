package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.example3.entity.Brand;

import com.example.example3.service.BrandService;
import com.example.example3.repository.BrandRepository; // Đảm bảo bạn import BrandRepository thay vì ProductRepository

import java.util.Optional;

@Service
@AllArgsConstructor
public class BrandServiceImpl implements BrandService {

    private BrandRepository brandRepository; // Đảm bảo bạn inject BrandRepository

    @Override
    public Brand createBrand(Brand brand) {
        return brandRepository.save(brand);
    }

    @Override
    public Brand getBrandById(Long brandId) {
        Optional<Brand> optionalBrand = brandRepository.findById(brandId);
        return optionalBrand.get();
    }

    @Override
    public Page<Brand> getAllBrands(Pageable pageable) {
        return brandRepository.findAll(pageable);
    }

     @Override
    public Brand updateBrand(Brand brand) {
        Brand existingBrand= brandRepository.findById(brand.getId()).get();
        existingBrand.setTitle(brand.getTitle());
        existingBrand.setPhoto(brand.getPhoto());
       
      
        Brand updatedBrand = brandRepository.save(existingBrand);
        return updatedBrand;
    }

    @Override
    public void deleteBrand(Long brandId) {
        brandRepository.deleteById(brandId);
    }
}
