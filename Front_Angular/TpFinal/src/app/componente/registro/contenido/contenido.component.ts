import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/app/modal/security/registro';
import { UsuarioService } from 'src/app/service/security/usuario.service';

@Component({
  selector: 'app-registro-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class RegistroContenidoComponent implements OnInit {

  registro:FormGroup
  recuperar:FormGroup
  hide=true;
  hideN=true;
  constructor(private builder:FormBuilder,private user:UsuarioService,private route:Router) {
    this.registro=this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      foto : [''],
      nombre : ['',[Validators.required]],
      apellido :['',[Validators.required]],
      usuario: ['',[Validators.required]],
      contrasena : ['',[Validators.required]]
    })
    this.recuperar=this.builder.group({
      email:['',[Validators.required,Validators.email]],
      usuario:['',[Validators.required]],
      contrasena:['',[Validators.required]],
      nuevacontra:['',[Validators.required]]
    })
 
   }

  ngOnInit(): void {
   
  }


  getErrorMessage() {
    if (this.registro.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registro.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  registrarUsuario(){
    
    if(this.registro.valid){
      let userlog=this.user.obtenerUsuarioLogueado()
       console.log("Se registro: usuario:",this.registro.get('usuario')?.value);
       const usuario:string=this.registro.get('usuario')?.value
       const contrasena:string=this.registro.get('contrasena')?.value
       const nombre:string=this.registro.get('nombre')?.value
       const apellido:string=this.registro.get('apellido')?.value
       const foto:string=this.registro.get('foto')?.value
       const email:string=this.registro.get('email')?.value
       const registrar:Registro=new Registro(nombre,apellido,email,foto,usuario,contrasena)
       this.user.nuevoUsuario(registrar).subscribe(p=>{
        this.reiniciarFormRegistro()
        if(userlog){
          this.route.navigate(['/admin'])
        }else{
          this.route.navigate([''])
        }
        

       })
       
    }
   
    
  }

  recuperarUsuario(){
    if(this.recuperar.valid){
      console.log("Se registro: usuario:",this.registro.get('usuario')?.value);
      this.reiniciarFormRecuperar()
    }
  }
  reiniciarFormRegistro(){
    this.registro.get('usuario')?.setValue('')
    this.registro.get('contrasena')?.setValue('')
    this.registro.get('foto')?.setValue('')
    this.registro.get('nombre')?.setValue('')
    this.registro.get('apellido')?.setValue('')
    this.registro.get('email')?.setValue('')
  }
  reiniciarFormRecuperar(){
    this.recuperar.get('usuario')?.setValue('')
    this.recuperar.get('contrasena')?.setValue('')
    this.recuperar.get('nuevacontra')?.setValue('')
    this.recuperar.get('email')?.setValue('')

  }
}
  