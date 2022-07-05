package aus.taller4.TpFinal.modal;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Entity
@Data
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_usuario;
	@NotBlank
	private String usuario;
	@NotBlank
	private String contrasena;
	@NotBlank
	private String email;
	@ManyToMany(fetch = FetchType.LAZY)
	  @JoinTable(name = "user_roles", 
	             joinColumns = @JoinColumn(name = "user_id"),
	             inverseJoinColumns = @JoinColumn(name = "role_id"))
	  private Set<Roles> roles = new HashSet<>();


	
	public Usuario() {
		
	}
	public Usuario(String usuario,String contrasena,String email) {
		this.usuario=usuario;
		this.contrasena=contrasena;
		this.email=email;
	}

}
