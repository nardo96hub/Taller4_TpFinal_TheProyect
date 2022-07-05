package aus.taller4.TpFinal.service;

import org.springframework.http.ResponseEntity;
import aus.taller4.TpFinal.modal.Experiencia;


public interface ExperienciaService {
	//Crea Experiencia,recibe por parametro id de perfil  y el objeto que se desea crear
	ResponseEntity<?> crearExp(Long id, Experiencia exp);
	//Edita Experiencia,recibe por parametro id de perfil a editar, el id de Experiencia a actualizar y el objeto que se actualiza
	ResponseEntity<?> editarExp( Long idP, Long idS, Experiencia exp);
	//Borra Experiencia,recibe por parametro id de perfil  y el id de Experiencia a borrar
	ResponseEntity<?> eliminarExp( Long idP, Long idS);
}
