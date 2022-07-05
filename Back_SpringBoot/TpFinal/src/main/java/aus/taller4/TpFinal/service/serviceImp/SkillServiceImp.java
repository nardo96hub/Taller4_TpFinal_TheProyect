package aus.taller4.TpFinal.service.serviceImp;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.Perfil;
import aus.taller4.TpFinal.modal.Skill;
import aus.taller4.TpFinal.repository.SkillRepository;
import aus.taller4.TpFinal.service.PerfilService;
import aus.taller4.TpFinal.service.SkillService;

@Service
@Transactional
public class SkillServiceImp implements SkillService{

	@Autowired
	private PerfilService servi_perfil;
	@Autowired
	private SkillRepository repo_skill;
	
	public ResponseEntity<?> crearSkill(Long id, Skill skill) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(id).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en crear"));
		perfil.agregarSkill(skill);
		servi_perfil.guardarPerfil(perfil);
		return servi_perfil.enviarPerfilFront(id);
		
	}

	
	public ResponseEntity<?> editarSkill(Long idP, Long idS, Skill skill) {
		
		Skill editarSkill=repo_skill.findById(idS).orElseThrow(()->new RuntimeException("Error: No se encontro el Skill  en editar"));
		editarSkill.setLenguaje(skill.getLenguaje());
		editarSkill.setNivel(skill.getNivel());
		repo_skill.save(editarSkill);
		return servi_perfil.enviarPerfilFront(idP);
	
	}

	
	//Elimino primero de la lista de perfil y luego lo borro de la tabla Skill
	public ResponseEntity<?> eliminarSkill(Long idP, Long idS) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(idP).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en eliminar"));
		Skill borrarSkill=repo_skill.findById(idS).orElseThrow(()->new RuntimeException("Error: No se encontro el Skill en eliminar"));
		perfil.getSkill().remove(borrarSkill);
		servi_perfil.guardarPerfil(perfil);
		repo_skill.deleteById(idS);
		return servi_perfil.enviarPerfilFront(idP);
		
	}

}
