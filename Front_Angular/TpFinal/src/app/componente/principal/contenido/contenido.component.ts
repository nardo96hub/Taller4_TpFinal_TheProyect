import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { JwtDto } from 'src/app/modal/security/jwt-dto';
import { UsuarioService } from 'src/app/service/security/usuario.service';

@Component({
  selector: 'principal-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class PrincipalContenidoComponent implements OnInit {
  @Input() per?:Perfil
  @Input() oscuro!:boolean
  constructor(public user: UsuarioService) {
   
   }

  ngOnInit(): void {
    
  
    
    
    
  }

}
