import { Role } from "./role";

export class Usuario {
    constructor(public id_usuario:string,public usuario:string,public contrasena:string,public email:string,public roles:Role[]){}
}
