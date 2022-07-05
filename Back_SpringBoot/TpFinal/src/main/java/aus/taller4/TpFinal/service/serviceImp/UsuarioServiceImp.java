package aus.taller4.TpFinal.service.serviceImp;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.Usuario;
import aus.taller4.TpFinal.repository.UserRepository;
import aus.taller4.TpFinal.service.UsuarioService;

@Service
@Transactional
public class UsuarioServiceImp implements UsuarioService{

	@Autowired
	private UserRepository repo_user;

	public Optional<Usuario> obtenerUsuario(String usu) {
		return repo_user.findByUsuario(usu);
	}
	public Boolean exiteUsuario(String usu) {
	
		return repo_user.existsByUsuario(usu);
	}


	public Boolean exiteUsuarioEmail(String email) {
		return repo_user.existsByEmail(email);
	}

	public Usuario guardarUsuario(Usuario usuario) {
		return repo_user.save(usuario);
	}
	public List<Usuario> obtenerAllUsuario() {	
		return repo_user.findAll();
	}

	public Boolean existeUsuarios() {	
		if(repo_user.cantidadUsuario()>0) {
			return true;
		}else {
			return false;
		}
	}
	public Long cantidadUsuarios() {
		return repo_user.cantidadUsuario();
	}
	
	public List<Usuario> obtenerAlgunosUsuarios() {
		return repo_user.algunosUsuarios();
	}

}
