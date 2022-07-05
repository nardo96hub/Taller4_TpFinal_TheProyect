package aus.taller4.TpFinal.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.Data;

@Entity
@Data

public class Proyecto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_proyecto;
	private String nombreP;
	@Column(length = 4000)
	private String descripcion;
	private String link;
	
	public Proyecto() {}
	public Proyecto(String nombreP,String descripcion,String link) {
		this.nombreP=nombreP;
		this.descripcion=descripcion;
		this.link=link;
	}
	
}
