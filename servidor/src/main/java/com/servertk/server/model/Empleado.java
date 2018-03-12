package com.servertk.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import utils.RolesEmpleado;

@Entity
public class Empleado {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String nickname;
	private String password;
	private String nombre;
	private String apellido;
	private RolesEmpleado rol;
	
	@ManyToOne
	@JsonIgnore
	private Biblioteca empleador;
	
	/*------------------        ------------------------*/

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public RolesEmpleado getRol() {
		return rol;
	}

	public void setRol(RolesEmpleado rol) {
		this.rol = rol;
	}

	public Biblioteca getEmpleador() {
		return empleador;
	}

	public void setEmpleador(Biblioteca empleador) {
		this.empleador = empleador;
	}
	
	
}
