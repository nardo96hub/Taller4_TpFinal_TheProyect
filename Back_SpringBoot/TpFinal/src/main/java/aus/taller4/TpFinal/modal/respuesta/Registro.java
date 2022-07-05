package aus.taller4.TpFinal.modal.respuesta;



import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Registro {
	@NotBlank
	private String nombre;
	@NotBlank
	private String apellido;
	@Email
	private String email;
	private String fotoUrl;
	@NotBlank
	private String usuario;
	@NotBlank
	private String contrasena;

	
}
