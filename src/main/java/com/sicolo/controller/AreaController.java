package com.sicolo.controller;

import com.sicolo.model.Area;
import com.sicolo.model.Usuario;
import com.sicolo.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/area")
@CrossOrigin(origins = "*")
public class AreaController {
    @Autowired
    private AreaService areaService;

    @GetMapping
    public List<Area> listarAreas(){
        return areaService.obtenerAreas();
    }

    @PostMapping
    public ResponseEntity<Area> crearArea(@RequestBody Area area) {
        Area nuevoArea = areaService.guardarArea(area);
        return ResponseEntity.ok(nuevoArea);
    }
}
