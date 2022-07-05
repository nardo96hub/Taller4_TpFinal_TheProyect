import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogVerPerfilComponent } from 'src/app/dialog/descarga-perfil/descarga-perfil.component';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { ModoOscuroService } from 'src/app/service/modo-oscuro.service';
import { PerfilService } from 'src/app/service/perfil.service';
import { UsuarioService } from 'src/app/service/security/usuario.service';



@Component({
  selector: 'principal-admin',
  templateUrl: './principal-admin.component.html',
  styleUrls: ['./principal-admin.component.css']
})
export class PrincipalAdminComponent implements AfterViewInit {

  constructor(private perfilS:PerfilService,private usuarioS:UsuarioService ,private modoS:ModoOscuroService ,private router:Router,private dialog:MatDialog) { }
  
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
 
  per!:Perfil
  admin?:Perfil[]
  usuario?:Perfil[]
  modoOscuro:boolean=false
  tablaAdmin!:MatTableDataSource<Perfil>
  tablaUser!:MatTableDataSource<Perfil>
  columnaA:string[]=[]
  columnaU:string[]=[]
  listamanoA:number[]=[5]
  listamanoU:number[]=[5]
  tamanoA:number=0
  tamanoB:number=0
  usuarioLog!:string

  ngAfterViewInit(): void {
    this.modoOscuro=this.modoS.getModoOscuro()
    this.usuarioLog=this.usuarioS.obtenerUsuarioLogueado().username
    this.perfilS.obtenerPerfilUsuario(this.usuarioLog).subscribe(per=>{
    this.per=per 
    this.crearTabla(per)
   })  
  }
  logout(){
    this.usuarioS.logout().subscribe(borrar=>{
      console.log(borrar);
      this.router.navigate(['/'])
    })
  }
  openDialogVerPerfil(p:Perfil){
    const dialogRef=this.dialog.open(DialogVerPerfilComponent,{data:p})
  }
  eliminarPerfil(p:Perfil){
    this.perfilS.eliminarPerfil(p).subscribe(borrar=>{
      console.log(borrar);
      this.crearTabla(this.per)
    })
  }
  crearTabla(perfil:Perfil){
    this.perfilS.listaAdmin(perfil.usuario.usuario).subscribe((listas:Array<Perfil[]>)=>{
      this.admin=listas[0]
      this.usuario=listas[1]
      this.tablaAdmin=new MatTableDataSource(this.admin)
      this.tablaAdmin.paginator=this.paginator
      this.tablaAdmin.sort=this.matsort
      this.tablaUser=new MatTableDataSource(this.usuario)
      this.tablaUser.paginator=this.paginator
      this.tablaUser.sort=this.matsort
      this.columnaA=['idA','fotoA','nomYapeA','emailA','puestoA','localidadA','acercaA','rolA','perfilA']
      this.columnaU=['idU','fotoU','nomYapeU','emailU','puestoU','localidadU','acercaU','rolU','perfilU','eliminarU']
      //this.listamanoA=[5,10,this.admin.length]
      //this.listamanoU=[5,10,this.usuario.length]  
      this.tamanoA=this.admin.length
      this.tamanoB=this.usuario.length


      if(this.tamanoA<5){
        this.listamanoA=[5]
      }else if(this.tamanoA>5&& this.tamanoA<=10){
        this.listamanoA=[5,this.tamanoA]
      }else if(this.tamanoA>5&& this.tamanoA<=20){
        this.listamanoA=[5,10,this.tamanoA]
      }else if(this.tamanoA>20&& this.tamanoA<50){
        this.listamanoA=[5,10,20,this.tamanoA]
      }else{
        this.listamanoA=[5,10,20,50,this.tamanoA]
      }

      if(this.tamanoB<5){
        this.listamanoU=[5]
      }else if(this.tamanoB>5&& this.tamanoB<=10){
        this.listamanoU=[5,this.tamanoA]
      }else if(this.tamanoB>5&& this.tamanoB<=20){
        this.listamanoU=[5,10,this.tamanoB]
      }else if(this.tamanoB>20&& this.tamanoB<50){
        this.listamanoU=[5,10,20,this.tamanoB]
      }else{
        this.listamanoU=[5,10,20,50,this.tamanoB]
      }
      /*
      if(this.tamano <5){
      this.listamano=[5]
    }else if(this.tamano >20 && this.tamano<50){
      this.listamano=[5,10,20,this.tamano]
    }else{
      this.listamano=[5,10,20,50,this.tamano]
    }
      */
   })
  }
  regresar(){
    this.router.navigate(['/principal'])
  }
  filtroTablaAdmin(evento:Event){
    //this.tablaAdmin.filter=$event.target.value.trim().toLowerCase()
    const filtro=(evento.target as HTMLInputElement).value
    this.tablaAdmin.filter=filtro.trim().toLowerCase()
  }
  filtroTablaUser(evento:Event){
    const filtro=(evento.target as HTMLInputElement).value
    this.tablaUser.filter=filtro.trim().toLowerCase()
    //this.tablaUser.filter=$event.target.value.trim().toLowerCase()
  }
  cambiarRol(perfil:Perfil){
    this.perfilS.cambiarRol(perfil,this.per.usuario.usuario).subscribe(p=>{
      this.crearTabla(this.per)
    })
  }
  modo(){
    this.modoS.setModoOscuro()
  }
}
