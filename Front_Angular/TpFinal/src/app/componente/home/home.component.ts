import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/security/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  oscuro!:boolean
  constructor() { }

  ngOnInit(): void {
  
  }
  modoOscuro($event:boolean){
    this.oscuro=$event
    
  }

}
