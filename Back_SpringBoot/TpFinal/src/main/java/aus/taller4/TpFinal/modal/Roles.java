package aus.taller4.TpFinal.modal;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import aus.taller4.TpFinal.modal.enumeracion.Rol;
import lombok.Data;

@Entity
@Data
@Table(name = "roles")
public class Roles {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Enumerated(EnumType.STRING)
  private Rol rol;
  
  public Roles() {}
  public Roles(Rol rol) {
	  this.rol=rol;
  }
}

