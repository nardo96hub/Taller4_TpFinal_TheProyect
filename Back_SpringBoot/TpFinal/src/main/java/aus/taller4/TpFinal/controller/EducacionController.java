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

import aus.taller4.TpFinal.modal.Educacion;
import aus.taller4.TpFinal.service.EducacionService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/perfil/edu")
public class EducacionController {
	@Autowired
	private EducacionService servi_edu;
	
	@PreAuthorize("isAuthenticated()")
	@PostMapping("/crear/{idP}")
	ResponseEntity<?> crearEdu(@PathVariable Long idP, @Valid@RequestBody Educacion edu)
	{	
		return servi_edu.crearEdu(idP, edu);
	}
	@PreAuthorize("isAuthenticated()")
	@PutMapping("/editar/{idP}/{idE}")
	public ResponseEntity<?> editarExp(@PathVariable Long idP,@PathVariable Long idE,@RequestBody Educacion edu)
	{
		return servi_edu.editarEdu(idP, idE, edu);
		
	}
	@PreAuthorize("isAuthenticated()")
	@DeleteMapping("/eliminar/{idP}/{idE}")
	public ResponseEntity<?> eliminar(@PathVariable Long idP,@PathVariable Long idE)
	{
		return servi_edu.eliminarEdu(idP, idE);
	}
}
