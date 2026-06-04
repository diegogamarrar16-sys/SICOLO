package com.sicolo.model;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Entity
    @Table(name = "usuarios")

    public class Usuario {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="id_usuario")
        private Integer idUsuario;

        @Column(name="dni", length = 8, unique = true)
        private String dni;

        @Column(nullable = false)
        private String nombres;

        @Column(nullable = false)
        private String apellidos;

        @Column(unique = true,  nullable = false, length = 150)
        private String correo;

        @Column(nullable = false)
        private String password;

        @Column(nullable = false)
        private String rol;

        @Column(nullable = false)
        private boolean estado;

        @Column(name="ruc", length = 11, unique = true)
        private String ruc;

        @Column(updatable = false, name="fecha_creacion")
        private LocalDateTime fechaCreacion;

        @PrePersist
        public void prePersist() {
        this.fechaCreacion = LocalDateTime.now();
    }

}


