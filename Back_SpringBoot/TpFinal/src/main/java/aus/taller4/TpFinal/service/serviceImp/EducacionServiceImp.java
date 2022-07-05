package aus.taller4.TpFinal.service.serviceImp;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.Educacion;
import aus.taller4.TpFinal.modal.Perfil;
import aus.taller4.TpFinal.repository.EducacionRepository;
import aus.taller4.TpFinal.service.EducacionService;
import aus.taller4.TpFinal.service.PerfilService;

@Service
@Transactional
public class EducacionServiceImp  implements EducacionService{
	
	@Autowired
	private EducacionRepository repo_edu;
	@Autowired
	private PerfilService servi_perfil;
	
	
	public ResponseEntity<?> crearEdu(Long id, Educacion edu) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(id).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en crear"));
		perfil.agregarEdu(edu);
		servi_perfil.guardarPerfil(perfil);		
		return servi_perfil.enviarPerfilFront(id);
		
	}
	
	public ResponseEntity<?> editarEdu(Long idP, Long idE, Educacion edu) {
		
		Educacion editarEdu=repo_edu.findById(idE).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en crear"));		
		editarEdu.setAnio(edu.getAnio());
		editarEdu.setLugar(edu.getLugar());
		editarEdu.setTitulo(edu.getTitulo());
		repo_edu.save(editarEdu);
		return servi_perfil.enviarPerfilFront(idP);
		
	}
	
	//Elimino primero de la lista de perfil y luego lo borro de la tabla Educacion
	public ResponseEntity<?> eliminarEdu(Long idP, Long idE) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(idP).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en eliminar"));
		Educacion borrarEdu=repo_edu.findById(idE).orElseThrow(()->new RuntimeException("Error: No se encontro la Edu en eliminar"));
		perfil.getEducacion().remove(borrarEdu);
		servi_perfil.guardarPerfil(perfil);
		repo_edu.deleteById(idE);
		return servi_perfil.enviarPerfilFront(idP);
		
	}
	
	
}
