package aus.taller4.TpFinal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import aus.taller4.TpFinal.modal.Usuario;

public interface UserRepository extends JpaRepository<Usuario, Long> {

	//Obtener objeto Usuario por nombre del usuario
	Optional<Usuario> findByUsuario(String usu);
	//Comprobar si existe un Usuario por su nombre de usuario
	Boolean existsByUsuario(String usu);	
	//Comprobar si existe un Usuario por su email
	Boolean existsByEmail(String email);
	//Obtener la cantidad de usuarios que hay en la BDD
	@Query("SELECT COUNT(u) from Usuario u")
	Long cantidadUsuario();
	//Obtener lista de los usuarios solo si tienen usuario es admin o user1
	@Query("SELECT u from Usuario u where u.usuario='admin' or u.usuario='user1' ")
	List<Usuario> algunosUsuarios();

}