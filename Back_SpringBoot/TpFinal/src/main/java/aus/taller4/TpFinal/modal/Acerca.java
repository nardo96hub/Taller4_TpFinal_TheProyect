package aus.taller4.TpFinal.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Acerca {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_acer;
	@Column(length = 4000)
	private String acer;
	
	public Acerca() {}
	public Acerca(String acer) {
		this.acer=acer;
	}
	
}