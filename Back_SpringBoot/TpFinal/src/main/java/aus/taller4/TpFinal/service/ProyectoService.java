package aus.taller4.TpFinal.service;

import org.springframework.http.ResponseEntity;
import aus.taller4.TpFinal.modal.Proyecto;



public interface ProyectoService {

	//Crea Proyecto,recibe por parametro id de perfil  y el objeto que se desea crear
	ResponseEntity<?> crearProy(Long idP, Proyecto proy);
	//Edita Proyecto,recibe por parametro id de perfil a editar, el id de Proyecto a actualizar y el objeto que se actualiza
	ResponseEntity<?> editarProy( Long idP, Long idPr, Proyecto proy);
	//Borra Proyecto,recibe por parametro id de perfil  y el id de Proyecto a borrar
	ResponseEntity<?> eliminarProy( Long idP, Long idPr);

}
