package co.edu.javeriana.myapp.server.myappserver;

import java.util.List;
import java.util.Optional;

import javax.persistence.NamedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Empleado;
import co.edu.javeriana.myapp.server.myappserver.model.EmpleadoRepository;


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
	
	
	public Empleado findByUsername(String username)
	{
		System.out.println("QUERY");
		if( repository == null )
			System.out.println("sadsad");
		return repository.findByUsername(username);
	}
	

}
