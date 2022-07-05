package aus.taller4.TpFinal.service.serviceImp;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.Perfil;
import aus.taller4.TpFinal.modal.Proyecto;
import aus.taller4.TpFinal.repository.ProyectoRepository;
import aus.taller4.TpFinal.service.PerfilService;
import aus.taller4.TpFinal.service.ProyectoService;

@Service
@Transactional
public class ProyectoServiceImp implements ProyectoService{
	
	@Autowired
	private ProyectoRepository repo_proy;
	@Autowired
	private PerfilService servi_perfil;
	
	
	@Override
	public ResponseEntity<?> crearProy(Long idP, Proyecto proy) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(idP).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en crear"));
		perfil.agregarProy(proy);
		servi_perfil.guardarPerfil(perfil);
		return servi_perfil.enviarPerfilFront(idP);
		
	}
	
	public ResponseEntity<?> editarProy(Long idP, Long idPr, Proyecto proy) {
		
		Proyecto editarProy=repo_proy.findById(idPr).orElseThrow(()->new RuntimeException("Error: No se encontro el Proyecto en editar"));
		editarProy.setDescripcion(proy.getDescripcion());
		editarProy.setLink(proy.getLink());
		editarProy.setNombreP(proy.getNombreP());
		repo_proy.save(editarProy);
		return servi_perfil.enviarPerfilFront(idP);
		
	}
	//Elimino primero de la lista de perfil y luego lo borro de la tabla Proyecto
	public ResponseEntity<?> eliminarProy(Long idP, Long idPr) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(idP).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en eliminar"));
		Proyecto borrarProy=repo_proy.findById(idPr).orElseThrow(()->new RuntimeException("Error: No se encontro el Proyecto en eliminar"));
		perfil.getProyecto().remove(borrarProy);
		servi_perfil.guardarPerfil(perfil);
		repo_proy.deleteById(idPr);
		return servi_perfil.enviarPerfilFront(idP);
		
	}
	
	
	
}
