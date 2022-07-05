package aus.taller4.TpFinal.modal.respuesta;

import java.util.Collection;


import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserInfoRespuesta {

	
	private String token;
	private String bearer="Bearer";
	private String username;
	private String email;
	private Collection<? extends GrantedAuthority> roles;

}
