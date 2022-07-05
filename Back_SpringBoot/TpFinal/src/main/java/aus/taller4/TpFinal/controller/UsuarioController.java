package aus.taller4.TpFinal.controller;




import java.util.List;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import aus.taller4.TpFinal.modal.Usuario;
import aus.taller4.TpFinal.modal.respuesta.Login;

import aus.taller4.TpFinal.modal.respuesta.Registro;

import aus.taller4.TpFinal.service.Registro_Log_In_Out_Service;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

@RequestMapping("/api/usuario")
public class UsuarioController {

	@Autowired
	private Registro_Log_In_Out_Service reg_logi_logu;

	@PostMapping("/login")
	public ResponseEntity<?> autenticacionUser(@Valid @RequestBody Login login ){
		return reg_logi_logu.login(login);
	}
	@PostMapping("/registro")
	public ResponseEntity<?> registroUser(@Valid @RequestBody Registro registro){
		
		return reg_logi_logu.registro(registro);
	}
	@GetMapping("/logout")
	public ResponseEntity<?> logout(){
		return reg_logi_logu.logout();
	}
	@GetMapping("/generarUsuarios")
	public List<Usuario> generarUsuarios(){
		
		return reg_logi_logu.generarPerfiles();
	}
	
	
	
	
	
}
