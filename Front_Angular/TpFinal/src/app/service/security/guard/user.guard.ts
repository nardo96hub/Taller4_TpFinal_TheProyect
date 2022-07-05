import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationStart, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import { JwtDto } from 'src/app/modal/security/jwt-dto';

import { UsuarioService } from '../usuario.service';

//Se creo ya que  .roles  retorna un string[] pero tiene forma string[{authority}]
export interface auto{
  authority:string

}

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate {
    
    constructor(private router:Router,private userServi:UsuarioService) {
     } 
    realRol!:string
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
    
      let currentUser:JwtDto=this.userServi.getUsuarioAutenticado()
      let p:auto={authority:"ROLE_ADMIN"}
      if(currentUser){
        const roles:any=currentUser.roles
        let rolLog=route.data['roles']
        this.realRol="USER"
        roles.forEach((rol:auto)=>{ 
          if(rol.authority===p.authority){
            this.realRol="ADMIN"
        }
      })
      if(!currentUser.token || rolLog.indexOf(this.realRol)===-1 ){
        if(rolLog.indexOf(this.realRol)===-1){
           this.userServi.logout().subscribe(l=>{
            console.log(l);
          }) 
        
        }
        this.router.navigate([''])
        return false
      }else{
       return true
      }
       
        
    }
    console.log("error en guard");
    
      this.router.navigate([''])
      
      return false

      }
      
  
}
