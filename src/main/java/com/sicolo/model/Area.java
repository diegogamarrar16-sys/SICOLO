package com.sicolo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "area")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_area")
    private Integer idArea;

    @Column(nullable = false, length = 100)
    private String nombre;
    @Column(length = 100)
    private String descripcion;
    @Column(length = 100)
    private String estado;
}