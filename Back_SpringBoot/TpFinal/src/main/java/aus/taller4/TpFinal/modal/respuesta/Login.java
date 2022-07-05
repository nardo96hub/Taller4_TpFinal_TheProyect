package aus.taller4.TpFinal.modal.respuesta;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Login {
	@NotBlank
	private String usuario;
	@NotBlank
	private String contrasena;
}
