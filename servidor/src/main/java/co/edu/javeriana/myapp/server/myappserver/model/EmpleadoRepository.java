package co.edu.javeriana.myapp.server.myappserver.model;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmpleadoRepository extends CrudRepository<Empleado, Long> {

	@Query(value = "SELECT * FROM empleado WHERE USERNAME = username", nativeQuery = true)
	public Empleado findByUsername(@Param("username") String username);
	
}
