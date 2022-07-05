package aus.taller4.TpFinal.service;

import org.springframework.http.ResponseEntity;
import aus.taller4.TpFinal.modal.Acerca;


public interface AcercaService {

	
	//Edita Acerca,recibe por parametro id de perfil a editar y el objeto que se actualiza
	ResponseEntity<?> editarAcerca( Long idP,  Acerca acer);
}
