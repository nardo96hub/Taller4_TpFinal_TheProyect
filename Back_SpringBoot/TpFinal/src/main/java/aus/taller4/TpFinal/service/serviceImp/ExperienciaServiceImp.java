package aus.taller4.TpFinal.service.serviceImp;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.Experiencia;
import aus.taller4.TpFinal.modal.Perfil;
import aus.taller4.TpFinal.repository.ExperienciaRepository;
import aus.taller4.TpFinal.service.ExperienciaService;
import aus.taller4.TpFinal.service.PerfilService;

@Service
@Transactional
public class ExperienciaServiceImp implements ExperienciaService {
	
	@Autowired
	private ExperienciaRepository repo_exp;
	@Autowired
	private PerfilService servi_perfil;
	
	
	public ResponseEntity<?> crearExp(Long id, Experiencia exp) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(id).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en crear"));
		perfil.agregarExp(exp);
		servi_perfil.guardarPerfil(perfil);		
		return servi_perfil.enviarPerfilFront(id);
		
	}


	public ResponseEntity<?> editarExp(Long idP, Long idE, Experiencia exp) {
		
		Experiencia editarExp=repo_exp.findById(idE).orElseThrow(()->new RuntimeException("Error: No se encontro la Experiencia en editar"));
		editarExp.setTitulo(exp.getTitulo());
		editarExp.setEmpresa(exp.getEmpresa());
		editarExp.setJornada(exp.getJornada());
		editarExp.setAnio(exp.getAnio());
		editarExp.setLugar(exp.getLugar());
		repo_exp.save(editarExp);		
		return servi_perfil.enviarPerfilFront(idP);
		
	}

	//Elimino primero de la lista de perfil y luego lo borro de la tabla Experiencia
	public ResponseEntity<?> eliminarExp(Long idP, Long idE) {
		
		Perfil perfil=servi_perfil.buscarPerfilId(idP).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en eliminar"));
		Experiencia borrarExp=repo_exp.findById(idE).orElseThrow(()->new RuntimeException("Error: No se encontro la Exp en eliminar"));
		perfil.getExperiencia().remove(borrarExp);
		servi_perfil.guardarPerfil(perfil);
		repo_exp.deleteById(idE);
		return servi_perfil.enviarPerfilFront(idP);
		
	}
	
}
