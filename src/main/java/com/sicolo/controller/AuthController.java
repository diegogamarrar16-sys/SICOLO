package com.sicolo.controller;
import com.sicolo.dto.LoginRequest;
import com.sicolo.dto.LoginResponse;
import com.sicolo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins="*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request){

        LoginResponse response =
                authService.login(request);

        if(response == null){

            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Credenciales incorrectas");
        }

        return ResponseEntity.ok(response);
    }
}