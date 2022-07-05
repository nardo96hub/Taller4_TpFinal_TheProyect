package aus.taller4.TpFinal.service;

import java.util.List;
import java.util.Optional;


import aus.taller4.TpFinal.modal.Usuario;

public interface UsuarioService {
	//Obtener usuario por nombre de usuario
	 Optional<Usuario> obtenerUsuario(String usu);
	 //Retorna si existe usuario por nombre
	 Boolean exiteUsuario(String usu);
	 //Retorna si existe usuario por email
	 Boolean exiteUsuarioEmail(String email);
	 //Retorna si existe usuarios
	 Boolean existeUsuarios();
	 //Realiza un save
	 Usuario guardarUsuario(Usuario usuario);
	//Realiza un findAll
	List<Usuario> obtenerAllUsuario();
	//Retorna la cantidad de usuarios
	Long cantidadUsuarios();
	//Retorna solo 2 usuarios 1 con ROLE_ADMIN y otro con ROLE_USER
	List<Usuario> obtenerAlgunosUsuarios();

	
}
