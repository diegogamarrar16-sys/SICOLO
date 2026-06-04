package com.sicolo.repository;

import com.sicolo.model.UsuarioArea;
import com.sicolo.model.UsuarioAreaId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioAreaRepository
extends JpaRepository<UsuarioArea, UsuarioAreaId> {

    boolean existsByUsuario_IdUsuarioAndArea_IdArea(
            Integer idUsuario,
            Integer idArea
    );
}