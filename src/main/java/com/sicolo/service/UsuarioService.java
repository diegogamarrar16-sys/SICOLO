package com.sicolo.service;
import com.sicolo.model.Usuario;
import com.sicolo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
    }
}