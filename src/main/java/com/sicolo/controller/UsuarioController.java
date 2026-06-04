package com.sicolo.controller;
import com.sicolo.model.Usuario;
import com.sicolo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // Temporalmente permite peticiones de cualquier frontend (como tu React)
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioService.obtenerTodos();
    }

    @PostMapping
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario){

        Usuario nuevoUsuario = usuarioService.crearUsuario(usuario);

        return new ResponseEntity<>(nuevoUsuario, HttpStatus.CREATED);
    }
}
