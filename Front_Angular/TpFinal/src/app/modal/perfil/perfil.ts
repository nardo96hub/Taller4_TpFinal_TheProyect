import { Acerca } from "./acerca";
import { Educacion } from "./educacion";
import { Experiencia } from "./experiencia";
import { Foto } from "./foto";
import { InfoPersonal } from "./info-personal";
import { Proyecto } from "./proyecto";
import { Skill } from "./skill";
import { Usuario } from "./usuario";

export class Perfil {
    constructor(public id_perfil:string,public infoPersonal:InfoPersonal,public puesto:string,public imagen:Foto,public acer:Acerca,public experiencia:Experiencia[],public educacion:Educacion[],public skill:Skill[],public proyecto:Proyecto[],public usuario:Usuario){}
}
