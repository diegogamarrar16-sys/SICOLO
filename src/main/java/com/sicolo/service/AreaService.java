package com.sicolo.service;

import com.sicolo.model.Area;
import com.sicolo.model.Usuario;
import com.sicolo.repository.AreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreaService {

    @Autowired
    private AreaRepository areaRepository;

    public List<Area> obtenerAreas(){
        return areaRepository.findAll();
    }

    public Area guardarArea(Area area) {
        return areaRepository.save(area);
    }
}
