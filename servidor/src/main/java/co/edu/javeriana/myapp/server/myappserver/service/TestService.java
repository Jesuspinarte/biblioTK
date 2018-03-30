package co.edu.javeriana.myapp.server.myappserver.service;

import co.edu.javeriana.myapp.server.myappserver.model.Empleado;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController()
@RequestMapping("/api")
public class TestService {
	@RequestMapping(value = "/test", produces = "application/json")
	public String test() {
		return "{\"value\": \"ok\"}";
	}
    
    @PreAuthorize("hasRole('BIBLIOTECARIO')") // TODO ver http://www.baeldung.com/spring-security-expressions-basic
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
	
}