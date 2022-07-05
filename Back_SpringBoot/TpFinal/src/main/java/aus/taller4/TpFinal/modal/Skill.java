package aus.taller4.TpFinal.modal;




//import java.util.List;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;






import lombok.Data;

@Entity
@Data

public class Skill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_Skill;
	private String lenguaje;
	private String nivel;

	public Skill() {}
	public Skill(String lenguaje, String nivel) {
		
		this.lenguaje = lenguaje.toUpperCase();
		this.nivel = nivel.toUpperCase();
	
	}
	
	
	
		
	
}
