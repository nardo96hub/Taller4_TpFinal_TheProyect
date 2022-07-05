package aus.taller4.TpFinal.modal;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class InfoPersonal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_personal;
	private String Nom;
	private String Ape;
	
	private String localidad;
	@OneToOne(cascade = CascadeType.ALL)
	private Redes redes;
	

	public InfoPersonal() {
		
	}
	public InfoPersonal(String nom,String ape) {
		localidad="";
		redes=new Redes("https://www.twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.github.com/","https://www.linkedin.com/");
		Nom=nom;
		Ape=ape;
	}
}