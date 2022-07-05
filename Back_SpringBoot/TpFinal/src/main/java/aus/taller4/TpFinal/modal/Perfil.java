package aus.taller4.TpFinal.modal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;



import lombok.Data;



@Entity
@Data
public class Perfil {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_perfil;
	
	@OneToOne(cascade = CascadeType.ALL)
	private InfoPersonal infoPersonal;
	private String puesto;
	@OneToOne(cascade = CascadeType.ALL)
	private Foto imagen;
	@OneToOne(cascade = CascadeType.ALL)
	private Acerca acer;


	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(name="Perfil_Exp", joinColumns = @JoinColumn(name = "id_perfil", nullable = false),
	        inverseJoinColumns = @JoinColumn(name="id_exp", nullable = false))
	private List<Experiencia> experiencia=new ArrayList<Experiencia>();
	//Para poder enviar al front tiene que ser fetch=FetchType.EAGER

	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="PerfilId")
	private List<Educacion> educacion=new ArrayList<Educacion>();
	

	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(name="Perfil_Skill", joinColumns = @JoinColumn(name = "id_perfil", nullable = false),
	        inverseJoinColumns = @JoinColumn(name="id_skill", nullable = false))
	private List<Skill> skill=new ArrayList<Skill>();
	
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="PerfilId")
	private List<Proyecto> proyecto =new ArrayList<Proyecto>();;

	@OneToOne(cascade=CascadeType.ALL)
	private Usuario usuario;
	public Perfil() {}
	public Perfil(InfoPersonal infoP,Foto imagen2, Usuario usuario) {
		infoPersonal=infoP;
		imagen=imagen2;
		this.usuario=usuario;
		puesto="";
		acer=new Acerca("Soy un usuario nuevo");

	}
	public void agregarExp(Experiencia exp) {
		experiencia.add(exp);
	}
	public void agregarEdu(Educacion edu) {
		educacion.add(edu);
	}
	public void agregarProy(Proyecto proy) {
		proyecto.add(proy);
	}
	public void agregarSkill(Skill s) {
		skill.add(s);
	}
}