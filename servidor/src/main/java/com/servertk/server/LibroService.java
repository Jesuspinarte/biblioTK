package com.servertk.server;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.servertk.server.model.Biblioteca;
import com.servertk.server.model.Libro;
import com.servertk.server.model.LibroRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LibroService {

	@Autowired
	private LibroRepository repository;
	
	@RequestMapping("/libros")
	Iterable<Libro> findAll() {
		return repository.findAll();
	}
	
	@RequestMapping("/libros/{id}")
	Optional<Libro> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}
	@RequestMapping(value = "/libros", method = RequestMethod.POST)
	public ResponseEntity<Libro> update(@RequestBody Libro libro) {
		
		System.out.println(libro.getId());
		System.out.println(libro.getNombre());
		System.out.println(libro.getAutores());
		System.out.println(libro.getIsbn());
		
			
		repository.save(libro);
		
	    return new ResponseEntity<Libro>(libro, HttpStatus.OK);
	}
}
