package co.edu.javeriana.myapp.server.myappserver;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Biblioteca;
import co.edu.javeriana.myapp.server.myappserver.model.BibliotecaRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BibliotecaService {
	
	@Autowired
	private BibliotecaRepository repository;
	
	@PreAuthorize("hasRole('ROLE_BIBLIOTECARIO')")
	@RequestMapping("/bibliotecas")
	Iterable<Biblioteca> findAll() {
		return repository.findAll();
	}
	
	@RequestMapping("/todas-bibliotecas")
	Iterable<String> nombreBibliotecas() {
		return repository.nombreBibliotecas();
	}
	
	@PreAuthorize("hasRole('ROLE_BIBLIOTECARIO')")
	@RequestMapping("/bibliotecas/{id}")
	Optional<Biblioteca> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}

}
