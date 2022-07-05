package aus.taller4.TpFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import aus.taller4.TpFinal.modal.Perfil;
import aus.taller4.TpFinal.service.PerfilService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController


@RequestMapping("/api/perfil")
public class PerfilController {
	@Autowired
	private PerfilService servi_perfil;
	
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/all")
	public ResponseEntity<?> retornarTodosPerfiles()
	{
		return servi_perfil.getAllFront();
	}
	@PreAuthorize("isAuthenticated() && hasAnyRole('ROLE_ADMIN')")
	@GetMapping("/listaAdmin/{username}")
	public ResponseEntity<?>obtenerLista(@PathVariable String username){
		return servi_perfil.listasAdmin(username);
	}
	
	@GetMapping("/obtenerName/{username}")
	public ResponseEntity<?> retornarPerfilUsername(@PathVariable String username)
	{
		
		return ResponseEntity.ok().body(servi_perfil.buscarPerfilUsuario(username).get());
	}
	@GetMapping("/obtenerId/{id}")
	public ResponseEntity<?> retornarPerfilId(@PathVariable Long id){
		return ResponseEntity.ok().body(servi_perfil.buscarPerfilId(id).get());
	}
	@PreAuthorize("isAuthenticated() && hasAnyRole('ROLE_ADMIN')")
	@PutMapping("/cambiarRol/{user}")
	public ResponseEntity<?>cambiarRol(@RequestBody Perfil perfil,@PathVariable String user){
		return servi_perfil.cambiarRol(perfil,user);
	}
	@PreAuthorize("isAuthenticated()")
	@PutMapping("/infoP/editar")
	public ResponseEntity<?> editarInfoP(@RequestBody Perfil perfil){
		return ResponseEntity.ok().body(servi_perfil.guardarPerfil(perfil));
	}
	@PreAuthorize("isAuthenticated()")
	@DeleteMapping("/eliminarPerfil/{idP}")
	public ResponseEntity<?> borrarPerfil(@PathVariable Long idP){
		return servi_perfil.borrarPerfil(idP);
	}
	
}
