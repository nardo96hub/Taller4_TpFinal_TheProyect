package aus.taller4.TpFinal.service;

import org.springframework.http.ResponseEntity;
import aus.taller4.TpFinal.modal.Skill;

public interface SkillService {
	//Crea Skill,recibe por parametro id de perfil  y el objeto que se desea crear
	ResponseEntity<?> crearSkill(Long id, Skill skill);
	//Edita Skill,recibe por parametro id de perfil a editar, el id de Skill a actualizar y el objeto que se actualiza
	ResponseEntity<?> editarSkill( Long idP, Long idS, Skill skill);
	//Borra Skill,recibe por parametro id de perfil  y el id de Skill a borrar
	ResponseEntity<?> eliminarSkill( Long idP, Long idS);

}
