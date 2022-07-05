package aus.taller4.TpFinal.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Educacion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_Edu;
	private String lugar;
	private String titulo;
	private String anio;
	
	public Educacion() {}
	public Educacion(String lugar, String titulo, String anio) {
		this.lugar = lugar;
		this.titulo = titulo;
		this.anio = anio;
		
	}
	
	
}
