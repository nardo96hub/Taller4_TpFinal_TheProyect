package aus.taller4.TpFinal.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import aus.taller4.TpFinal.modal.Skill;

import aus.taller4.TpFinal.service.SkillService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/perfil/skill")
public class SkillController {
	@Autowired
	private SkillService servi_skill;

	@PreAuthorize("isAuthenticated()")
	@PostMapping("/crear/{idP}")
	public ResponseEntity<?> crearSkill(@PathVariable Long idP, @Valid@RequestBody Skill skill) {
		return servi_skill.crearSkill(idP,skill);
		
	}
	@PreAuthorize("isAuthenticated()")
	@PutMapping("/editar/{idP}/{idS}")
	public ResponseEntity<?> editarSkill(@PathVariable Long idP,@PathVariable Long idS,@RequestBody Skill skill){
		return servi_skill.editarSkill(idP,idS,skill);
	}
	@PreAuthorize("isAuthenticated()")
	@DeleteMapping("/eliminar/{idP}/{idS}")
	public ResponseEntity<?> eliminarSkill(@PathVariable Long idP,@PathVariable Long idS){
		return servi_skill.eliminarSkill(idP,idS);
	}

}
