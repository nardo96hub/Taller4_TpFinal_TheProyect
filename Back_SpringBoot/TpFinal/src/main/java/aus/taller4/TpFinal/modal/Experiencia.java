package aus.taller4.TpFinal.modal;



import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Experiencia {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_Exp;
	private String titulo;
	private String empresa;
	private String jornada;
	private String anio;
	private String lugar;

	
	public Experiencia() {}
	public Experiencia(String tit,String em,String jor,String anio,String lug) {
		titulo=tit;empresa=em;jornada=jor;this.anio=anio;lugar=lug;
		
	}
}