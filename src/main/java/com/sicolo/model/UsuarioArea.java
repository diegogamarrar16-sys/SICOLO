package com.sicolo.model;
import jakarta.persistence.*;

@Entity
@Table(name="usuario_area")
public class UsuarioArea {

    @EmbeddedId
    private UsuarioAreaId id;

    @ManyToOne
    @MapsId("idUsuario")
    @JoinColumn(name="id_usuario")
    private Usuario usuario;

    @ManyToOne
    @MapsId("idArea")
    @JoinColumn(name="id_area")
    private Area area;
}