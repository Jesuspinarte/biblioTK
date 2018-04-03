package co.edu.javeriana.myapp.server.myappserver;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Libro;
import co.edu.javeriana.myapp.server.myappserver.model.LibroRepository;


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
	public ResponseEntity<Libro> addLibro(@RequestBody Libro libro) {
		
//		System.out.println(libro.getId());
//		System.out.println(libro.getNombre());
//		System.out.println(libro.getAutores());
//		System.out.println(libro.getIsbn());
		Long aux = new Long(1);
		//libro.setDespensa( repository.findById(aux).get().getDespensa() );
		
			
		repository.save(libro);
		
	    return new ResponseEntity<Libro>(libro, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/libros", method = RequestMethod.PUT)
	public ResponseEntity<Libro> updateLibro(@RequestBody Libro libro) {
		
//		System.out.println(libro.getId());
//		System.out.println(libro.getNombre());
//		System.out.println(libro.getAutores());
//		System.out.println(libro.getIsbn());
			
		libro = repository.findById(libro.getId()).get().setLibro(libro);
		repository.save(libro);
		
	    return new ResponseEntity<Libro>(libro, HttpStatus.OK);
	}
	

	@PreAuthorize("hasRole('ROLE_ENCARGADO_PRESTAMOS')") // TODO ver http://www.baeldung.com/spring-security-expressions-basic
	@RequestMapping(value = "/libros/prestamos", method = RequestMethod.PUT)
	public ResponseEntity<Libro> updatePrestamo(@RequestBody Libro libro) {
		
//		System.out.println(libro.getId());
//		System.out.println(libro.getNombre());
//		System.out.println(libro.getAutores());
//		System.out.println(libro.getIsbn());
//		System.out.println(libro.getPrestado());
//		System.out.println(libro.getPrestadoA());
//		System.out.println(libro.getFechaPrestamo().toString());
//		System.out.println(libro.getFinPrestamo().toString());
			
		libro = repository.findById(libro.getId()).get().setLibro(libro);
		repository.save(libro);
//		System.out.println(repository.findById(libro.getId()).get().getPrestado());
		
	    return new ResponseEntity<Libro>(libro, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/libros/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Libro> deleteLibro(@PathVariable("id") Long id) {
		
//		System.out.println(id);
			
		Libro libro = repository.findById(id).get();
		repository.delete(libro);
		
	    return new ResponseEntity<Libro>(libro, HttpStatus.OK);
	}
	
}
