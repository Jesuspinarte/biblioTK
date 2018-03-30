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

	public RESTUserDetailsService() {
		super();

	}
	@Override
	public Empleado loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO En este método debería recuperarlse la info del usuario desde la base de datos
		
		System.out.println("*** Retrieving user");
		
		//EmpleadoService es = new EmpleadoService();
		
		
		System.out.println("***SERVICE");
		Empleado e = es.findByUsername(username);
		if( e == null )
			System.out.println("NULL");
		//else if (ems.isEmpty())
		//	System.out.println("ASDSad");
		else
			System.out.println("HAS SOMETHING");
		
		
		//for( Empleado e :  ems ) {
			System.out.println(e.getUsername() + " " + e.getPassword() + " " + e.getId() + " " + e.getRol().toString() );
		//}
		
		Empleado ne = new Empleado( e.getUsername(), e.getPassword(), e.getRol().toString() );
		e.setAuthorities( ne.getAuth() );
		
		return ( e );
	}	

}
