package com.servertk.server;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servertk.server.model.Empleado;
import com.servertk.server.model.EmpleadoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoService {
	
	@Autowired
	private EmpleadoRepository repository;
	
	@RequestMapping("/empleados")
	Iterable<Empleado> findAll() {
		return repository.findAll();
	}
	
	@RequestMapping("/empleados/{id}")
	Optional<Empleado> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}

}
