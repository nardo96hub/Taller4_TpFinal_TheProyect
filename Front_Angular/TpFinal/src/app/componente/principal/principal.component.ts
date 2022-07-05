import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { JwtDto } from 'src/app/modal/security/jwt-dto';
import { ModoOscuroService } from 'src/app/service/modo-oscuro.service';
import { PerfilService } from 'src/app/service/perfil.service';
import { UsuarioService } from 'src/app/service/security/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  perfil?:Perfil
  oscuro!:boolean
  constructor(private perfilService:PerfilService,private user:UsuarioService,private modoS:ModoOscuroService) { }

  ngOnInit(): void {
 
    this.oscuro=this.modoS.getModoOscuro()
    this.perfilService.obtenerPerfilUsuario(this.user.obtenerUsuarioLogueado().username).subscribe(per=>{
      this.perfil=per
   
   })
   
  
  }
  modoOscuro($event:boolean){
    this.oscuro=$event
    console.log("Modo oscuro:",this.oscuro);
    
  }
  
}
