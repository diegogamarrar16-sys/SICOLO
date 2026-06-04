package com.sicolo.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class RegistroUsuarioOsDTO {
    // Datos del Usuario a registrar
    private Integer dni;
    private String nombres;
    private String apellidos;
    private String correo;
    private String password;
    private String rol;
    private String estado;
    private Long ruc;

    // Datos de la Orden de Servicio
    private Integer numeroOs;
    private Integer anio;
    private Integer idArea; // Solo requerimos el ID del área para asociarla
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private BigDecimal monto;
    private Integer cantidadEntregables;
    private String actividades;
}
