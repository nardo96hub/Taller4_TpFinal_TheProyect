import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/modal/perfil/usuario';
import { JwtDto } from 'src/app/modal/security/jwt-dto';
import { Login } from 'src/app/modal/security/login';
import { Registro } from 'src/app/modal/security/registro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 url=environment.apiUrl
 private currentUserSubject:BehaviorSubject<any>
  constructor(private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<JwtDto>(JSON.parse(sessionStorage.getItem('User')!))
   }

  public nuevoUsuario(nuevoUser:Registro):Observable<JwtDto>{
    return this.http.post<JwtDto>(`${this.url}/usuario/registro`,nuevoUser)
  }
  public login(login:Login):Observable<JwtDto>{
    return this.http.post<JwtDto>(`${this.url}/usuario/login`,login)
  }
  public agregarSession(data:JwtDto){

      sessionStorage.setItem('User',JSON.stringify(data))
      this.currentUserSubject.next(data)
  
  }
  public obtenerUsuarioLogueado():JwtDto{
    return this.currentUserSubject.value
  }

  public generar():Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>(`${this.url}/usuario/generarUsuarios`)

  }
  public getUsuarioAutenticado(){
    return this.currentUserSubject.value
  }
  public logout():Observable<any>{
   const dato:Observable<any>=this.http.get<any>(`${this.url}/usuario/logout`)
    sessionStorage.removeItem('User')
    this.currentUserSubject.next(null)
   return dato
  }
}
