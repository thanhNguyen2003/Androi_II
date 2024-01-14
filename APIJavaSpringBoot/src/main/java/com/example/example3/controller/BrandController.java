package com.example.example3.controller;

import lombok.AllArgsConstructor;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.example3.entity.Brand;

import com.example.example3.service.BrandService;

@RestController
@AllArgsConstructor
@RequestMapping("api/brands")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")
public class BrandController {

    private BrandService brandService;

    // Create Brand REST API
    @PostMapping
    public ResponseEntity<Brand> createBrand(@RequestBody Brand Brand) {
        // Tùy chỉnh logic tạo Brand theo thực tế của bạn
              Brand.setPhoto(Brand.getPhoto() + ".png");
        
        Brand savedBrand = brandService.createBrand(Brand);
        return new ResponseEntity<>(savedBrand, HttpStatus.CREATED);
    }

    @PostMapping("/image")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file,
            @RequestParam("customName") String customName) {
        try {
            // Lưu hình ảnh đã tải lên vào cơ sở dữ liệu hoặc hệ thống tệp
            String uploadDir = "src/main/resources/static/dataImage"; // Đặt đường dẫn thư mục mong muốn của bạn

            // Tạo thư mục nếu nó không tồn tại
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String filePath = uploadDir + File.separator + customName + ".png";

            // Lưu hình ảnh đã tải lên vào thư mục đã chỉ định
            try (FileOutputStream fos = new FileOutputStream(filePath)) {
                fos.write(file.getBytes());
            }
            return ResponseEntity.ok("Hình ảnh đã tải lên thành công");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Không thể tải lên hình ảnh");
        }
    }

    @GetMapping("/image/{imageName}")
    public ResponseEntity<byte[]> getImage(@PathVariable String imageName) throws IOException {
        // Bạn nên kiểm tra và kiểm tra imageName để ngăn chặn tấn công xâm nhập thư mục.
        // Trong ví dụ này, giả sử rằng imageName chỉ là tên tệp hình ảnh.

        Resource resource = new ClassPathResource("static/dataImage/" + imageName);
        byte[] imageBytes = Files.readAllBytes(resource.getFile().toPath());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Đặt loại phương tiện hình ảnh thích hợp

        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    // Lấy Brand bằng ID REST API
     // http://localhost:8080/api/Brands/1
    @GetMapping("{id}")
    public ResponseEntity<Brand> getBrandById(@PathVariable("id") Long BrandId) {
        Brand Brand = brandService.getBrandById(BrandId);
        return new ResponseEntity<>(Brand, HttpStatus.OK);
    }

    // Lấy tất cả các Brand REST API
    @GetMapping
    public ResponseEntity<Page<Brand>> getAllBrands(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Brand> brandPage = brandService.getAllBrands(pageable);

        return new ResponseEntity<>(brandPage, HttpStatus.OK);
    }

    // Cập nhật Brand REST API
    @PutMapping("{id}")
    public ResponseEntity<Brand> updateBrand(@PathVariable("id") Long BrandId, @RequestBody Brand Brand) {
        Brand.setId(BrandId);
        Brand updatedBrand = brandService.updateBrand(Brand);
        return new ResponseEntity<>(updatedBrand, HttpStatus.OK);
    }

    // Xóa Brand REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBrand(@PathVariable("id") Long BrandId) {
        brandService.deleteBrand(BrandId);
        return new ResponseEntity<>("Brand đã được xóa thành công!", HttpStatus.OK);
    }
}
