package com.sicolo.service;
import com.sicolo.dto.LoginResponse;
import com.sicolo.dto.LoginRequest;
import com.sicolo.model.Usuario;
import com.sicolo.repository.UsuarioAreaRepository;
import com.sicolo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioAreaRepository usuarioAreaRepository;

    public LoginResponse login(LoginRequest request) {

        Usuario usuario =
                usuarioRepository.findByDni(request.getDni())
                .orElse(null);

        if(usuario == null)
            return null;

        if(!usuario.getPassword()
                .equals(request.getPassword()))
            return null;

        boolean perteneceArea =
                usuarioAreaRepository
                .existsByUsuario_IdUsuarioAndArea_IdArea(
                        usuario.getIdUsuario(),
                        request.getIdArea()
                );

        if(!perteneceArea)
            return null;

        LoginResponse response =
                new LoginResponse();

        response.setIdUsuario(
                usuario.getIdUsuario());

        response.setDni(usuario.getDni());

        response.setNombres(
                usuario.getNombres());

        response.setRol(
                usuario.getRol().getNombre());

        return response;
    }
}