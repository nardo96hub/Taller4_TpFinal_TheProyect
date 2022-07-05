package aus.taller4.TpFinal.service.serviceImp;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import aus.taller4.TpFinal.modal.Acerca;
import aus.taller4.TpFinal.modal.Educacion;
import aus.taller4.TpFinal.modal.Experiencia;
import aus.taller4.TpFinal.modal.Foto;
import aus.taller4.TpFinal.modal.InfoPersonal;
import aus.taller4.TpFinal.modal.Perfil;
import aus.taller4.TpFinal.modal.Proyecto;
import aus.taller4.TpFinal.modal.Roles;
import aus.taller4.TpFinal.modal.Skill;
import aus.taller4.TpFinal.modal.Usuario;
import aus.taller4.TpFinal.modal.enumeracion.Rol;
import aus.taller4.TpFinal.modal.respuesta.Login;
import aus.taller4.TpFinal.modal.respuesta.MensajeRespuesta;
import aus.taller4.TpFinal.modal.respuesta.Registro;
import aus.taller4.TpFinal.modal.respuesta.UserInfoRespuesta;
import aus.taller4.TpFinal.repository.RolRepository;
import aus.taller4.TpFinal.security.UserDetailsImpl;
import aus.taller4.TpFinal.security.jwt.JwtUtils;
import aus.taller4.TpFinal.service.PerfilService;
import aus.taller4.TpFinal.service.Registro_Log_In_Out_Service;
import aus.taller4.TpFinal.service.UsuarioService;

@Service
@Transactional
public class Registro_Log_In_Out_ServiceImp implements Registro_Log_In_Out_Service{

	@Autowired
	private UsuarioService servi_usu;
	@Autowired
	private PerfilService servi_perfil;
	@Autowired
	private RolRepository repo_rol;
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private JwtUtils jwtUtils;
	
	public ResponseEntity<?> login(Login login) {
		
		Authentication autenticacion=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login.getUsuario(), login.getContrasena()));
		SecurityContextHolder.getContext().setAuthentication(autenticacion);
		UserDetailsImpl userDetails=(UserDetailsImpl) autenticacion.getPrincipal();
		ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);
		String jwt=jwtUtils.generateTokenFromUsername(autenticacion);//token
		UserInfoRespuesta jwtReturn=new UserInfoRespuesta(jwt,"Bearer",userDetails.getUsername(),userDetails.getEmail(),userDetails.getAuthorities()); 
		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString()).body(jwtReturn);
	}

	//Si no existe usuarios el primero tiene rol ADMIN
	public ResponseEntity<?> registro(Registro registro) {
		
		if(servi_usu.exiteUsuario(registro.getUsuario()) || servi_usu.exiteUsuarioEmail(registro.getEmail())) {
			return ResponseEntity.badRequest().body(new MensajeRespuesta("Error: Usuario o Email en uso para registro"));
		}
		Usuario nuevoUsuario=new Usuario(registro.getUsuario(), encoder.encode(registro.getContrasena()), registro.getEmail());
		//Si no hay usuario solo el primero se registro como admin el resto es usuario y el admin creado da administrador a los que desee
		Set<Roles> roles=new HashSet<Roles>();
		if(servi_usu.existeUsuarios()) {
			Roles rol=repo_rol.findByRol(Rol.ROLE_USER).orElseThrow(()->new RuntimeException("Error: No se encontro el Rol USER para registro"));
			roles.add(rol);
		}else {
			Roles rol=repo_rol.findByRol(Rol.ROLE_ADMIN).orElseThrow(()->new RuntimeException("Error: No se encontro el Rol ADMIN para registro"));
			roles.add(rol);
		}
		nuevoUsuario.setRoles(roles);
		Foto foto;
		InfoPersonal infoP=new InfoPersonal(registro.getNombre(), registro.getApellido());
		if(registro.getFotoUrl()==null || registro.getFotoUrl()=="") {
			 foto=new Foto("https://4.bp.blogspot.com/-jDcqEFr898k/XBAeeuO_B3I/AAAAAAAAAEM/ugCkZsDFoN8_HGj34Mcs6O61GvNDzcKaACLcBGAs/s1600/phpCode.png","../../../assets/img/avatar.png");
		}else {
			 foto=new Foto("https://4.bp.blogspot.com/-jDcqEFr898k/XBAeeuO_B3I/AAAAAAAAAEM/ugCkZsDFoN8_HGj34Mcs6O61GvNDzcKaACLcBGAs/s1600/phpCode.png",registro.getFotoUrl());
		}
		Perfil nuevoPerfil=new Perfil(infoP,foto,nuevoUsuario);		
		servi_perfil.guardarPerfil(nuevoPerfil);
		return ResponseEntity.ok(new MensajeRespuesta("Usuario registrado exitosamente"));
	}

	public ResponseEntity<?> logout() {
		ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(new MensajeRespuesta("Has sido Desconectado! en logout"));
	}

	//Genero 2 perfiles o retorno los 2 creados
	public List<Usuario> generarPerfiles() {
		
		if(servi_usu.cantidadUsuarios()==0) {
			Registro registro;
			Perfil perfilEditar;
			Acerca acerca;
			InfoPersonal infoP;
			Skill skill;
			Proyecto proy;
			Educacion edu;
			Experiencia exp;
			
			Roles rol;
			if(repo_rol.findByRol(Rol.ROLE_ADMIN).get()==null) {
				rol=new Roles(Rol.ROLE_ADMIN);
				repo_rol.save(rol);
			}
			if(repo_rol.findByRol(Rol.ROLE_USER).get()==null) {
				rol=new Roles(Rol.ROLE_USER);
				repo_rol.save(rol);
			}
			
			
			
			//Genero el primer usuario con rol admin 
			registro=new Registro("Administrador","Principal","admin@admin.com","","admin","admin");
			this.registro(registro);
			perfilEditar=servi_perfil.buscarPerfilUsuario("admin").orElseThrow(()->new RuntimeException("Error: Perfil no encontrado para generarAdmin"));
			acerca=perfilEditar.getAcer();
			acerca.setAcer("Soy el administrador principal de la pagina web");
			infoP=perfilEditar.getInfoPersonal();infoP.setLocalidad("Rosario,Santa Fe,Argentina");
			skill=new Skill("Java","Avanzado");
			edu=new Educacion("UNR","Analista en Sistemas", "2015");
			exp=new Experiencia("Senier","Google", "Jornada: Completa","2017-Actualidad","Mountain View, California, Estados Unidos");				
			proy=new Proyecto("The Proyecto", "Desarrollador de esta aplicacion", "www.github.com");
			
			perfilEditar.setInfoPersonal(infoP);
			perfilEditar.setAcer(acerca);
			perfilEditar.setPuesto("Programador BackEnd");
			perfilEditar.agregarEdu(edu);
			perfilEditar.agregarExp(exp);
			perfilEditar.agregarSkill(skill);
			skill=new Skill("React","Intermedio");
			perfilEditar.agregarSkill(skill);
			perfilEditar.agregarProy(proy);
			
			servi_perfil.guardarPerfil(perfilEditar);
			
			
			//Genero el primer usuario con rol user
			registro=new Registro("Usuario","Principal","user1@user1.com","","user1","user1");
			this.registro(registro);
			
			perfilEditar=servi_perfil.buscarPerfilUsuario("user1").orElseThrow(()->new RuntimeException("Error: Perfil no encontrado para generarUser1"));
			System.out.println("new Acerca");
			acerca=perfilEditar.getAcer();
			acerca.setAcer("Soy un usuario normal de la pagina web");		
			infoP=perfilEditar.getInfoPersonal();infoP.setLocalidad("Rosario,Santa Fe,Argentina");
			skill=new Skill("Java","Basico");
			edu=new Educacion("UNR","Analista en Sistemas", "2021");
			exp=new Experiencia("Junior", "Neoris", "Jornada Parcial", "2021-Actualidad","Rosario,Santa Fe,Argentina");				
			 
			perfilEditar.setInfoPersonal(infoP);
			System.out.println("set Acerca");
			perfilEditar.setAcer(acerca);
			perfilEditar.setPuesto("Programador FullStack");
			perfilEditar.agregarEdu(edu);
			perfilEditar.agregarExp(exp);
			perfilEditar.agregarSkill(skill);
			System.out.println("guardo Acerca?");
			servi_perfil.guardarPerfil(perfilEditar);
			System.out.println("retorno Acerca?");
			return servi_usu.obtenerAllUsuario();
			
		}
		
		return servi_usu.obtenerAlgunosUsuarios();
		
	}
}
