package aus.taller4.TpFinal.service.serviceImp;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.Acerca;
import aus.taller4.TpFinal.repository.AcercaRepository;
import aus.taller4.TpFinal.service.AcercaService;
import aus.taller4.TpFinal.service.PerfilService;

@Service
@Transactional
public class AcercaServiceImp implements AcercaService {

	@Autowired
	private AcercaRepository repo_acer;
	@Autowired
	private PerfilService servi_perfil;

	public ResponseEntity<?> editarAcerca(Long idP, Acerca acer) {
		
		Acerca editarAcerca=repo_acer.findById(idP).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en crear"));	
		editarAcerca.setAcer(acer.getAcer());
		repo_acer.save(editarAcerca);
		return servi_perfil.enviarPerfilFront(idP);
		
	}

}
