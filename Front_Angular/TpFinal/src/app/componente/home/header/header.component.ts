import { Token } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/modal/security/login';
import { ModoOscuroService } from 'src/app/service/modo-oscuro.service';
import { UsuarioService } from 'src/app/service/security/usuario.service';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  @Output()oscuro=new EventEmitter<boolean>()
 
  hide = true;
  login:FormGroup;
  modoOscuro!:boolean
  isLogged=false
  isLoginFail=false
  loginUsuario?:Login
  errMsj?: string
  roles:string[]=[]
 


  constructor(public builder:FormBuilder,private userService:UsuarioService,private router:Router,private modoS:ModoOscuroService) { 
    this.login=this.builder.group({
      usuario:['',Validators.required],
      contrasena:['',Validators.required]

    });
  }
  

  ngOnInit(): void {
    this.modoOscuro=this.modoS.getModoOscuro()
  }

  logIn(event:Event){
 
    if(this.login.get('usuario')?.valid && this.login.get('contrasena')?.valid ){
      event.preventDefault()
      this.isLoginFail=false
      const nombreUsuario:string=this.login.get('usuario')?.value
      const password:string=this.login.get('contrasena')?.value
       
      this.loginUsuario=new Login(nombreUsuario,password)
      this.userService.login(this.loginUsuario).subscribe(
        data=>{        
          this.userService.agregarSession(data) 
          this.router.navigate(['/principal'])          
        },
        err=>{
          this.isLoginFail=true
          this.errMsj = err.error.message;
          if(this.errMsj==="No value present"){
            this.errMsj="User/Contra invalido"
          }
          console.log(this.errMsj);
          
        }


      )
    }

  }
  modo(){
    this.modoS.setModoOscuro()
    this.oscuro.emit(this.modoS.getModoOscuro())
  }

}
