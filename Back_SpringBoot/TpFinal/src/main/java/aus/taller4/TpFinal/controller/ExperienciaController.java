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

import aus.taller4.TpFinal.modal.Experiencia;

import aus.taller4.TpFinal.service.ExperienciaService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/perfil/exp")
public class ExperienciaController {
	@Autowired
	private ExperienciaService servi_exp;
	
	@PreAuthorize("isAuthenticated()")
	@PostMapping("/crear/{idP}")
	public ResponseEntity<?> crearExp(@PathVariable Long idP, @Valid@RequestBody Experiencia exp)
	{
		
		return servi_exp.crearExp(idP, exp);
	}
	@PreAuthorize("isAuthenticated()")
	@PutMapping("/editar/{idP}/{idE}")
	public ResponseEntity<?> editarExp(@PathVariable Long idP,@PathVariable Long idE,@RequestBody Experiencia exp)
	{
		return servi_exp.editarExp(idP, idE, exp);
	}
	@PreAuthorize("isAuthenticated()")
	@DeleteMapping("/eliminar/{idP}/{idE}")
	public ResponseEntity<?> eliminar(@PathVariable Long idP,@PathVariable Long idE)
	{
		return servi_exp.eliminarExp(idP, idE);
	}
	
}
