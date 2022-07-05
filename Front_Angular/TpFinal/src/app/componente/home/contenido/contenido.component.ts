import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modal/perfil/usuario';
import { UsuarioService } from 'src/app/service/security/usuario.service';

@Component({
  selector: 'home-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class HomeContenidoComponent implements OnInit {

  constructor(private user:UsuarioService) { }
  usuarios?:Usuario[]
  @Input()oscuro!:boolean
  ngOnInit(): void {
    this.user.generar().subscribe(data=>{
      this.usuarios=data


      
      
    })
  }

}
