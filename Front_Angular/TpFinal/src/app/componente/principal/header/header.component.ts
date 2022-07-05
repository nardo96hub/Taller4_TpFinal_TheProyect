import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { ModoOscuroService } from 'src/app/service/modo-oscuro.service';
import { UsuarioService } from 'src/app/service/security/usuario.service';


@Component({
  selector: 'principal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class PrincipalHeaderComponent implements OnInit {
  @Input() per?:Perfil
  @Output() oscuro=new EventEmitter<boolean>()
  modoOscuro!:boolean
  constructor(private user:UsuarioService,private route:Router,private modoS:ModoOscuroService) { }

  ngOnInit(): void {
    this.modoOscuro=this.modoS.getModoOscuro()
  }
  logout(){
    this.user.logout().subscribe(borrar=>{
      console.log(borrar);
      this.route.navigate(['/'])
      

    })
  }
 lista(){
  this.route.navigate(['/lista',this.per])
 }
 admin(){
  this.route.navigate(['admin'])
 }
 modo(){
  this.modoS.setModoOscuro()
  this.oscuro.emit(this.modoS.getModoOscuro())
 }
 perfil(){
  this.route.navigate(['/perfil'])
 }
 hasRole(rol:string):boolean{
  if(this.per?.usuario.roles[0].rol===rol){
    return true
  }
  return false
 }
}
