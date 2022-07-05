import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acerca } from '../modal/perfil/acerca';
import { Educacion } from '../modal/perfil/educacion';
import { Experiencia } from '../modal/perfil/experiencia';
import { Perfil } from '../modal/perfil/perfil';
import { Proyecto } from '../modal/perfil/proyecto';
import { Skill } from '../modal/perfil/skill';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  url=environment.apiUrl
  constructor(private http:HttpClient) { }
 


  //Funciones Perfil
  public obtenerPerfilUsuario(username:string):Observable<Perfil>{
    return this.http.get<Perfil>(`${this.url}/perfil/obtenerName/${username}`)
  }
  public obtenerPerfilId(id:any):Observable<Perfil>{
    return this.http.get<Perfil>(`${this.url}/perfil/obtenerId/${id}`)
  }
  public obtenerPerfiles():Observable<Perfil[]>{
    return this.http.get<Perfil[]>(`${this.url}/perfil/all`)
  }
  public listaAdmin(usuario:string):Observable<any>{
    return this.http.get<any>(`${this.url}/perfil/listaAdmin/${usuario}`)
  }
  public cambiarRol(perfil:Perfil,user:string):Observable<any>{
    return this.http.put<any>(`${this.url}/perfil/cambiarRol/${user}`,perfil)
  }

  public eliminarPerfil(p:Perfil):Observable<any>{
    return this.http.delete<any>(`${this.url}/perfil/eliminarPerfil/${p.id_perfil}`)
  }
  //Funciones Skill
  public crearSkill(skill:Skill,idP:string):Observable<Perfil>{
    return this.http.post<Perfil>(`${this.url}/perfil/skill/crear/${idP}`,skill)
  }
  public eliminarSkill(idP:string,idS:string):Observable<Perfil>{
    return this.http.delete<Perfil>(`${this.url}/perfil/skill/eliminar/${idP}/${idS}`)
  }
  public editarSkill(skill:Skill,idP:string,idS:string):Observable<Perfil>{
    return this.http.put<Perfil>(`${this.url}/perfil/skill/editar/${idP}/${idS}`,skill)
  }

  //Funciones Proyecto
  public crearProyecto(proy:Proyecto,idP:string):Observable<Perfil>{
    return this.http.post<Perfil>(`${this.url}/perfil/proy/crear/${idP}`,proy)
  }
  public editarProyecto(proy:Proyecto,idP:string,idS:string):Observable<Perfil>{
    return this.http.put<Perfil>(`${this.url}/perfil/proy/editar/${idP}/${idS}`,proy)
  }
  public eliminarProyecto(idP:string,idS:string):Observable<Perfil>{
    return this.http.delete<Perfil>(`${this.url}/perfil/proy/eliminar/${idP}/${idS}`)
  }

  //Funciones Experiencia
  public crearExperiencia(exp:Experiencia,idP:string):Observable<Perfil>{
    return this.http.post<Perfil>(`${this.url}/perfil/exp/crear/${idP}`,exp)
  }
  public editarExperiencia(exp:Experiencia,idP:string,idS:string):Observable<Perfil>{
    return this.http.put<Perfil>(`${this.url}/perfil/exp/editar/${idP}/${idS}`,exp)
  }
  public eliminarExperiencia(idP:string,idS:string):Observable<Perfil>{
    return this.http.delete<Perfil>(`${this.url}/perfil/exp/eliminar/${idP}/${idS}`)
  }

  //Funciones Educacion
  public crearEducacion(edu:Educacion,idP:string):Observable<Perfil>{
    return this.http.post<Perfil>(`${this.url}/perfil/edu/crear/${idP}`,edu)
  }
  public editarEducacion(edu:Educacion,idP:string,idS:string):Observable<Perfil>{
    return this.http.put<Perfil>(`${this.url}/perfil/edu/editar/${idP}/${idS}`,edu)
  }
  public eliminarEducacion(idP:string,idS:string):Observable<Perfil>{
    return this.http.delete<Perfil>(`${this.url}/perfil/edu/eliminar/${idP}/${idS}`)
  }
  
  //Funcion Acerca
  public editarAcerca(acer:Acerca,idP:string):Observable<Perfil>{
    return this.http.put<Perfil>(`${this.url}/perfil/acer/editar/${idP}`,acer)

  }
  //Funcion InfoPersonal
  public editarInfoP(p:Perfil):Observable<Perfil>{
    return this.http.put<Perfil>(`${this.url}/perfil/infoP/editar`,p)
  }

}
