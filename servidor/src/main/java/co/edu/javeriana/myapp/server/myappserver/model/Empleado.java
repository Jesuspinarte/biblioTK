package co.edu.javeriana.myapp.server.myappserver.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import co.edu.javeriana.myapp.server.myappserver.utils.RolesEmpleado;


@Entity
public class Empleado implements UserDetails {
	
	private static final long serialVersionUID = 1987040876334251017L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String username;
	private String password;
	private String nombre;
	private String apellido;
	private RolesEmpleado rol;
	
	@ManyToOne
	@JsonIgnore
	private Biblioteca empleador;
	
	
	private boolean accountNonExpired;
	private boolean accountNonLocked;
	private boolean credentialsNonExpired;
	private boolean enabled;
	
	@ElementCollection(targetClass=GrantedAuthority.class)
	private List<GrantedAuthority> authorities = new ArrayList<>();
	
	public Empleado() {}

	public  Empleado(String username, String password, String... authorities) {
		super();
		this.username = username;
		this.password = password;
		
		for (String auth : authorities) {
			GrantedAuthority ga = new GrantedAuthority(){
				private static final long serialVersionUID = -3483137563784976405L;

				@Override
				public String getAuthority() {
					return auth;
				}
			};
			this.authorities.add(ga);
		}
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String nickname) {
		this.username = nickname;
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

	public boolean isAccountNonExpired() {
		return accountNonExpired;
	}

	public void setAccountNonExpired(boolean accountNonExpired) {
		this.accountNonExpired = accountNonExpired;
	}

	public boolean isAccountNonLocked() {
		return accountNonLocked;
	}

	public void setAccountNonLocked(boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}

	public boolean isCredentialsNonExpired() {
		return credentialsNonExpired;
	}

	public void setCredentialsNonExpired(boolean credentialsNonExpired) {
		this.credentialsNonExpired = credentialsNonExpired;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
//		System.out.println(username + ": " + authorities);
		return authorities;
	}

	public void setAuthorities(List<GrantedAuthority> authorities) {
		this.authorities = authorities;
	}
	
	public List<GrantedAuthority> getAuth(){
		return this.authorities;
	}

	@Override
	public String toString() {
		return "Empleado [id=" + id + ", username=" + username + ", password=" + password + ", nombre=" + nombre
				+ ", apellido=" + apellido + ", rol=" + rol + ", empleador=" + empleador + ", accountNonExpired="
				+ accountNonExpired + ", accountNonLocked=" + accountNonLocked + ", credentialsNonExpired="
				+ credentialsNonExpired + ", enabled=" + enabled + ", authorities=" + authorities + "]";
	}
	
	
	/*------------------        ------------------------*/

	
	
	
}
