package aus.taller4.TpFinal.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Redes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_redes;
	private String twitter;
	private String facebook;
	private String instagram;
	private String github;
	private String linkedin;
	public Redes() {}
	public Redes(String twitter, String facebook, String instagram, String github, String linkedin) {
		
		this.twitter = twitter;
		this.facebook = facebook;
		this.instagram = instagram;
		this.github = github;
		this.linkedin = linkedin;
	}
}
