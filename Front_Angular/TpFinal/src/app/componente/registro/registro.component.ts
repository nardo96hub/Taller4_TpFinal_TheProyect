import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/security/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private user:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }
  volver(){
   
    
    let userlog=this.user.obtenerUsuarioLogueado()
    
    
    if(userlog){
      this.router.navigate(['/admin'])
    }else{
      this.router.navigate([''])
    }
  }
}
