import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable,throwError as ObservavleThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements HttpInterceptor {

  constructor(private user:UsuarioService,private router:Router) { }

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    if (error.status === 401||error.status===403) {
      console.warn("error en Error");
      
       this.user.logout()
       this.router.navigateByUrl('/');
     }
    return ObservavleThrowError(error.message)

  }



  /*const user:JwtDto|null = this.token.userValue();
  const isLoggedIn = user && user.token;
  const isApiUrl = request.url.startsWith(environment.apiUrl);
  if (isLoggedIn && isApiUrl) {
      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${user.token}`
          }
      });
  }*/

  /*
  var currentUser=this.user.getUsuarioAutenticado()
  console.log(currentUser.accestToken);
  
  if(currentUser && currentUser.accestToken){
    req=req.clone({
      setHeaders:{Authorization:`Bearer ${currentUser.accestToken}`}
    })
  }
  return next.handle(req)
console.log("Interceptor esta corriendo "+JSON.stringify(currentUser));

*/




/*
  const login=this.user.getUsuarioAutenticado()
  console.log(login);
  
 
  //const isApiUrl = req.url.startsWith(environment.apiUrl+'/perfil');
  //console.log("isApiUrl:",isApiUrl);
  //console.log("ruta:",environment.apiUrl);
  //console.log(req.url.startsWith(environment.apiUrl+'/perfil'));
  
  
  if(req.url.includes("http://localhost:8080/api/perfil")){
    console.log("quiero dar permiso");
    
  if(login && login.token){console.log("req:",req);
   // console.log("doy acceso ,token:",login.token);
    const token=`Bearer ${login.token}`
console.log("Token interceptor:",token);

  req=req.clone({setHeaders:{'Content-Type': 'application/json',Authorization:token}})
 //  console.log(req.headers);
   
  //const inireq=req.clone({headers:req.headers.set('Authrorization', token)});
      return next.handle(req)
  }

}


 // console.log("Interceptor esta corriendo "+JSON.stringify(login));
return next.handle(req).pipe(catchError((err:HttpErrorResponse)=> {
    if (err.status===401 || err.status===403) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        console.log("entre error");
      this.user.logout();
        //this.router.navigate(['/'])
    }

    const error = err.error.message || err.statusText;
    return throwError(error);
}))*/
}


