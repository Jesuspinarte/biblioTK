package co.edu.javeriana.myapp.server.myappserver.model;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BibliotecaRepository extends CrudRepository<Biblioteca, Long> {

	@Query(value = "SELECT nombre FROM biblioteca", nativeQuery = true)
	public List<String> nombreBibliotecas();
	
}
