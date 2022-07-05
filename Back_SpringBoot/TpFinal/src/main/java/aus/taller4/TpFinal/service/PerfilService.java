package aus.taller4.TpFinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import aus.taller4.TpFinal.modal.Perfil;


public interface PerfilService {
	
	//Realizo un save a la base de datos
	Perfil guardarPerfil(Perfil perfil);
	Optional<Perfil> buscarPerfilUsuario(String usu);
	Optional<Perfil> buscarPerfilId(Long id);
	List<Perfil> findAllPerfil();
	ResponseEntity<?> enviarPerfilFront(Long idP);
	ResponseEntity<?> getAllFront();
	//Retorna la lista de usuarios con ROL_ADMIN y ROL_USER guardandolo en un List<List<Perfil>>
	ResponseEntity<?> listasAdmin(String username);
	//Cambia entre rol ROLE_ADMIN/ROLE_USER
	ResponseEntity<?> cambiarRol(Perfil perfil, String user);
	//Borrar un perfil por su id
	ResponseEntity<?> borrarPerfil(Long idP);
	
}
