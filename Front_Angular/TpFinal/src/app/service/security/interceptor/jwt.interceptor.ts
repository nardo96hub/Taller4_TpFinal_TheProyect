import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private user:UsuarioService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req=request
    let perfilUrl="http://localhost:8080/api/perfil"
   if(req.url.includes(perfilUrl)){
    const token=this.user.obtenerUsuarioLogueado().token
    
      if(token!=null){
        
       req=request.clone({ headers: req.headers.set('Authorization','Bearer ' + token)})
       
      }else{
        console.log("error en jwt Interceptor");
        
      
         this.router.navigate(["/"])
      }
    }
   
   return next.handle(req)
    
  }
}
