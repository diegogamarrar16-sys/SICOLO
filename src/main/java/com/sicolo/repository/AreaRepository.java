package com.sicolo.repository;

import com.sicolo.model.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AreaRepository extends JpaRepository<Area,Integer> {

    Optional<Area> findByNombre(String nombre);
}

