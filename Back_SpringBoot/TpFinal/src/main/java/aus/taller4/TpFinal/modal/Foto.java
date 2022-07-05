package aus.taller4.TpFinal.modal;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Foto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_imagen;
	
	private String portada;
	
	private String perfil;

	public Foto() {}
	public Foto(String portada,String perfil) {
		this.portada=portada;
		this.perfil=perfil;
	}
}
