package co.edu.javeriana.myapp.server.myappserver.service;

import co.edu.javeriana.myapp.server.myappserver.EmpleadoService;
import co.edu.javeriana.myapp.server.myappserver.LibroService;
import co.edu.javeriana.myapp.server.myappserver.model.Empleado;
import co.edu.javeriana.myapp.server.myappserver.model.Libro;
import co.edu.javeriana.myapp.server.myappserver.model.LibroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.core.net.SyslogOutputStream;


@RestController()
@RequestMapping("/api")
public class TestService {
	
	@Autowired
	private LibroService libroService;
	
	// UPDATE PRÉSTAMO Y TODOS LOS MÉTODOS QUE VENGAN DEL CLIENTE
	
	
	
	@RequestMapping(value = "/test", produces = "application/json")
	public String test() {
		return "{\"value\": \"ok\"}";
	}
    
    @PreAuthorize("hasRole('ROLE_BIBLIOTECARIO')") // TODO ver http://www.baeldung.com/spring-security-expressions-basic
	@RequestMapping(value = "/restricted-method", produces = "application/json")
    public String restrictedMethod() {
        return "{\"value\": \"ok admin\"}";
    }

	@RequestMapping(value = "/current-user", method = RequestMethod.GET, produces="application/json")
    @ResponseBody
    public Empleado currentUserName(Authentication authentication) {
        Empleado user = (Empleado) authentication.getPrincipal();
        return user;
    }
	
	 @PreAuthorize("hasRole('ROLE_ENCARGADO_PRESTAMOS')") // TODO ver http://www.baeldung.com/spring-security-expressions-basic
	 @ResponseBody
	 @RequestMapping(value = "/prestamos", method = RequestMethod.PUT)
	public ResponseEntity<Libro> updatePrestamo(@RequestBody Libro libro) {
//		System.out.println("RECIBI");
		return libroService.updatePrestamo(libro);
		
	}
	
	
}
