package co.edu.javeriana.myapp.server.myappserver.security;

import co.edu.javeriana.myapp.server.myappserver.EmpleadoService;
import co.edu.javeriana.myapp.server.myappserver.model.Empleado;
import co.edu.javeriana.myapp.server.myappserver.model.EmpleadoRepository;
import co.edu.javeriana.myapp.server.myappserver.model.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.id.CompositeNestedGeneratedValueGenerator.GenerationContextLocator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class RESTUserDetailsService implements UserDetailsService {
	
	@Autowired
	private EmpleadoService es;
	Map<String, Empleado> users = new HashMap<>();

	public RESTUserDetailsService() {
		super();
	}
	
	@Override
	public Empleado loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO En este método debería recuperarlse la info del usuario desde la base de datos
		
//		System.out.println("*** Retrieving user");
		Empleado e = null;
		
		if( !users.containsKey(username) ) {
			//EmpleadoService es = new EmpleadoService();
			
			e = es.findByUsername(username);
			
//			System.out.println(e.getUsername() + " " + e.getPassword() + " " + e.getId() + " " + e.getRol().toString() );
			
			if( e != null ) {
				Empleado ne = new Empleado( e.getUsername(), e.getPassword(), e.getRol().toString() );
				e.setAuthorities( ne.getAuth() );
				//es.addAuth(e);
//				System.out.println("Rol  "+ e.getRol());
//				System.out.println("AUTH  "+ e.getAuth());
				users.put(e.getUsername(), e);
				
			}
			
		} else
			e = users.get(username);
		
		
		return ( e );
	}	

}
