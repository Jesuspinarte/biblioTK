package com.servertk.server;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servertk.server.model.Biblioteca;
import com.servertk.server.model.BibliotecaRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BibliotecaService {
	
	@Autowired
	private BibliotecaRepository repository;
	
	@RequestMapping("/bibliotecas")
	Iterable<Biblioteca> findAll() {
		return repository.findAll();
	}
	
	@RequestMapping("/bibliotecas/{id}")
	Optional<Biblioteca> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}

}
