package com.sicolo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
@Embeddable
public class UsuarioAreaId {
    @NotNull
    @Column(name = "id_usuario", nullable = false)
    private Integer idUsuario;

    @NotNull
    @Column(name = "id_area", nullable = false)
    private Integer idArea;


}