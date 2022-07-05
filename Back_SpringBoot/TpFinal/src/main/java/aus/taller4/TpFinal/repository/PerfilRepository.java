package aus.taller4.TpFinal.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import aus.taller4.TpFinal.modal.Perfil;

public interface PerfilRepository extends JpaRepository<Perfil,Long>{

	//Obtener perfil por nombre de usuario
	@Query("select p from Perfil p where p.usuario.usuario=:usu")
	Optional<Perfil> buscarPerfilUsuario(@Param("usu")String usuario);


}
