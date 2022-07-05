package aus.taller4.TpFinal.service;

import org.springframework.http.ResponseEntity;
import aus.taller4.TpFinal.modal.Educacion;


public interface EducacionService {
	
	//Crea Educacion,recibe por parametro id de perfil  y el objeto que se desea crear
	ResponseEntity<?> crearEdu(Long id, Educacion edu);
	//Edita Educacion,recibe por parametro id de perfil a editar, el id de Educacion a actualizar y el objeto que se actualiza
	ResponseEntity<?> editarEdu( Long idP, Long idS, Educacion edu);
	//Borra educacion,recibe por parametro id de perfil  y el id de Educacion a borrar
	ResponseEntity<?> eliminarEdu( Long idP, Long idS);

}
