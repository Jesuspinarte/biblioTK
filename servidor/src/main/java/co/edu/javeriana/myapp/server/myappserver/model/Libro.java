package co.edu.javeriana.myapp.server.myappserver.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Libro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nombre;
	private String isbn;
	private String autores;
	private Boolean prestado;
	private Date fechaPrestamo;
	private Date finPrestamo;
	private String prestadoA;
	
	
	
	/*---------------------------------------*/
	
	@ManyToOne
	@JsonIgnore
	private Biblioteca despensa;
	
	public Libro setLibro( Libro libro ) {
		this.nombre = libro.nombre;
		this.isbn = libro.isbn;
		this.autores = libro.autores;
		this.prestado = libro.prestado;
		this.fechaPrestamo = libro.fechaPrestamo;
		this.finPrestamo = libro.finPrestamo;
		this.prestadoA = libro.prestadoA;
		
		return this;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getAutores() {
		return autores;
	}

	public void setAutores(String autores) {
		this.autores = autores;
	}

	public Biblioteca getDespensa() {
		return despensa;
	}

	public void setDespensa(Biblioteca despensa) {
		this.despensa = despensa;
	}

	public Boolean getPrestado() {
		return prestado;
	}

	public void setPrestado(Boolean prestado) {
		this.prestado = prestado;
	}

	public Date getFechaPrestamo() {
		return fechaPrestamo;
	}

	public void setFechaPrestamo(Date fechaPrestamo) {
		this.fechaPrestamo = fechaPrestamo;
	}

	public Date getFinPrestamo() {
		return finPrestamo;
	}

	public void setFinPrestamo(Date finPrestamo) {
		this.finPrestamo = finPrestamo;
	}

	public String getPrestadoA() {
		return prestadoA;
	}

	public void setPrestadoA(String prestadoA) {
		this.prestadoA = prestadoA;
	}
	
	
	
	
}
