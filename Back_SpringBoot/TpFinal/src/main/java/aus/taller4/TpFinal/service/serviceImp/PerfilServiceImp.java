package aus.taller4.TpFinal.service.serviceImp;


import java.util.ArrayList;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.*;

import aus.taller4.TpFinal.modal.enumeracion.Rol;
import aus.taller4.TpFinal.modal.respuesta.MensajeRespuesta;

import aus.taller4.TpFinal.repository.PerfilRepository;
import aus.taller4.TpFinal.service.PerfilService;


@Service
@Transactional
public class PerfilServiceImp implements PerfilService {

	@Autowired
	private PerfilRepository repo_perfil;

	public Perfil guardarPerfil(Perfil perfil) {
		return repo_perfil.save(perfil);
	}

	public Optional<Perfil> buscarPerfilUsuario(String usu) {		
		return repo_perfil.buscarPerfilUsuario(usu);
	}
	
	public Optional<Perfil> buscarPerfilId(Long id) {		
		return repo_perfil.findById(id);
	}

	public ResponseEntity<?> enviarPerfilFront(Long idP) {
		Perfil perfil=this.buscarPerfilId(idP).orElseThrow(()->new RuntimeException("Error: No se encontro el Perfil en enviarFront"));	
		return ResponseEntity.ok().body(perfil);
	}
	
	public ResponseEntity<?> getAllFront() {
		List<Perfil> perfiles=this.findAllPerfil();				
		return ResponseEntity.ok().body(perfiles);
	}

	public List<Perfil> findAllPerfil() {		
		return repo_perfil.findAll();
	}

	//Obtengo la lista de todos los perfiles y genero un List<List<Perfil> donde el primer elemento tiene todos los perfiles con ROLE_ADMIN y el 2º con ROLE_USER
	public ResponseEntity<?> listasAdmin(String username) {
		
		List<List<Perfil>> perfiles=new ArrayList<List<Perfil>>();
		List<Perfil> admin,user,lista;
		Perfil per=this.buscarPerfilUsuario(username).get();
		admin=new ArrayList<Perfil>();
		user=new ArrayList<Perfil>();
		lista=repo_perfil.findAll();
		lista.forEach((perfil)->{
			Set<Roles> roles=perfil.getUsuario().getRoles();
			roles.forEach(rol->{
				
				
				if(rol.getRol()==Rol.ROLE_ADMIN ) {
					//El admin no puede ver su propio perfil para evitar borrar asi mismo
					if(!perfil.equals(per)) {
					admin.add(perfil);
					}
				
				}else if(rol.getRol()==Rol.ROLE_USER) {
					user.add(perfil);
				}
			});
		});
		perfiles.add(admin);
		perfiles.add(user);		
		return ResponseEntity.ok().body(perfiles);
		
	}
	
	//Cambio entre ROLE_ADMIN y ROLE_USER
	public ResponseEntity<?> cambiarRol(Perfil perfil,String user) {
		
		Set<Roles>roles=perfil.getUsuario().getRoles();
		Roles editar=null;
		String usuario=perfil.getUsuario().getUsuario();
		for(Iterator<Roles> it=roles.iterator();it.hasNext();) {
			editar=(Roles)it.next();			
		}
		//Le borro los permisos de roles y le agrego el nuevo
		roles.clear();
		if(editar.getRol()==Rol.ROLE_USER) {
			editar.setId((long)1);
			editar.setRol(Rol.ROLE_ADMIN);
		}else {
			if(usuario!=user) {
				editar.setId((long)2);
				editar.setRol(Rol.ROLE_USER);
			}
		}
		roles.add(editar);
		Usuario usu=perfil.getUsuario();
		usu.setRoles(roles);
		perfil.setUsuario(usu);
		this.guardarPerfil(perfil);

		return ResponseEntity.ok().body(perfil);

	}

	public ResponseEntity<?> borrarPerfil(Long idP) {
		
		Perfil p=this.buscarPerfilId(idP).get();
		repo_perfil.delete(p);
		return ResponseEntity.ok().body(new MensajeRespuesta("Perfil eliminado"));
	
	}

}
