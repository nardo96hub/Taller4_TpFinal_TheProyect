package aus.taller4.TpFinal.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import aus.taller4.TpFinal.modal.respuesta.Login;
import aus.taller4.TpFinal.modal.respuesta.Registro;
import aus.taller4.TpFinal.modal.Usuario;

public interface Registro_Log_In_Out_Service {
	//Se encarga a realizar el login y retorna el token si se pudo registrar correctamente
	ResponseEntity<?> login(Login login);
	//Registro de un nuevo usuario
	ResponseEntity<?> registro (Registro registro);
	ResponseEntity<?> logout();
	//Genero 2 usuarios automaticamente, uno tiene rol:ROLE_ADMIN y el otro ROLE_USER
	List<Usuario> generarPerfiles();

}
