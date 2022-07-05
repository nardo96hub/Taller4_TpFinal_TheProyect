package aus.taller4.TpFinal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import aus.taller4.TpFinal.modal.Roles;
import aus.taller4.TpFinal.modal.enumeracion.Rol;

public interface RolRepository extends JpaRepository<Roles, Long> {
	//Retornar Roles si existe en la BDD
	Optional<Roles> findByRol(Rol rol);
}
