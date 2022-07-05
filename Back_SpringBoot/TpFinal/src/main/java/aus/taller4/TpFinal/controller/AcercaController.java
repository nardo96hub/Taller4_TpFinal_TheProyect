package aus.taller4.TpFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import aus.taller4.TpFinal.modal.Acerca;
import aus.taller4.TpFinal.service.AcercaService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/perfil/acer")
public class AcercaController {
	@Autowired
	private AcercaService servi_acer;
	
	@PreAuthorize("isAuthenticated()")
	@PutMapping("/editar/{idP}")
	public ResponseEntity<?> editarAcerca(@PathVariable Long idP,@RequestBody Acerca acerca)
	{
		return servi_acer.editarAcerca(idP, acerca);
	}
	
	
}
