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


import aus.taller4.TpFinal.modal.Proyecto;

import aus.taller4.TpFinal.service.ProyectoService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/perfil/proy")
public class ProyectoController {
	@Autowired
	private ProyectoService servi_proy;
	
	@PreAuthorize("isAuthenticated()")
	@PostMapping("/crear/{idP}")
	public ResponseEntity<?> crearProy(@PathVariable Long idP, @Valid@RequestBody Proyecto proy)  {
		return servi_proy.crearProy(idP, proy);
	}
	@PreAuthorize("isAuthenticated()")
	@PutMapping("/editar/{idP}/{idPr}")
	public ResponseEntity<?> editarExp(@PathVariable Long idP,@PathVariable Long idPr,@RequestBody Proyecto proy)
	{
		return servi_proy.editarProy(idP, idPr, proy);
	}
	@PreAuthorize("isAuthenticated()")
	@DeleteMapping("/eliminar/{idP}/{idPr}")
	public ResponseEntity<?> eliminar(@PathVariable Long idP,@PathVariable Long idPr){
		return servi_proy.eliminarProy(idP, idPr);
	}

}
