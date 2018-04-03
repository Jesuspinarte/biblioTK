package co.edu.javeriana.myapp.server.myappserver;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.persistence.NamedQuery;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Empleado;
import co.edu.javeriana.myapp.server.myappserver.model.EmpleadoRepository;
import co.edu.javeriana.myapp.server.myappserver.model.Libro;

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

	public Empleado findByUsername(String username) {
//		System.out.println("QUERY");
//		if (repository == null)
//			System.out.println("sadsad");
		return repository.findByUsername(username);
	}

	@RequestMapping("/current/{username}")
	Empleado findCurrent(@PathVariable("username") String username) {
//		System.out.println("ENTRA");
//		System.out.println("USER: " + username);
		
		Empleado e = repository.findByUsername(username);
//		System.out.println("USER BUSCADO: " + e.getNombre() + ", ROL: " + e.getNombre());
		
		return repository.findByUsername(username);

	}

}
