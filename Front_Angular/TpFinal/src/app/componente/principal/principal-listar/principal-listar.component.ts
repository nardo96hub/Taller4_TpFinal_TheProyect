import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogVerPerfilComponent } from 'src/app/dialog/descarga-perfil/descarga-perfil.component';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { ModoOscuroService } from 'src/app/service/modo-oscuro.service';
import { PerfilService } from 'src/app/service/perfil.service';
import { UsuarioService } from 'src/app/service/security/usuario.service';




@Component({
  selector: 'principal-listar',
  templateUrl: './principal-listar.component.html',
  styleUrls: ['./principal-listar.component.css']
})
export class PrincipalListarComponent implements AfterViewInit {
  

  constructor(private perfil:PerfilService,private user:UsuarioService,private modoS:ModoOscuroService ,private route:Router,private dialog: MatDialog) { }
  
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  
  per!:Perfil
  tablaPerfiles!:MatTableDataSource<Perfil>
  tamano:number=0
  listamano:number[]=[5]
  perfiles?:Perfil[]
  columna:any
  modoOscuro:boolean=false
  ngAfterViewInit(): void {
    this.modoOscuro=this.modoS.getModoOscuro()
    
    
   
   this.perfil.obtenerPerfilUsuario(this.user.obtenerUsuarioLogueado().username).subscribe(p=>{
      this.per=p
    
   })
    this.perfil.obtenerPerfiles().subscribe(p=>{
      this.perfiles=p
      this.tablaPerfiles=new MatTableDataSource(this.perfiles)
      this.tablaPerfiles.paginator=this.paginator
      this.tablaPerfiles.sort=this.matsort
      this.tamano=this.perfiles!.length
      
      this.columna=['id',"foto","nomYape","puesto","localidad","acerca","perfil"]
    })
 
      
    if(this.tamano <5){
      this.listamano=[5]
    }else if(this.tamano >20 && this.tamano<50){
      this.listamano=[5,10,20,this.tamano]
    }else{
      this.listamano=[5,10,20,50,this.tamano]
    }
  }

  filtroTabla(evento:Event){
    const filtro=(evento.target as HTMLInputElement).value
    this.tablaPerfiles.filter=filtro.trim().toLowerCase()
    
    //this.tablaPerfiles.filter=$event.target.value.trim().toLowerCase()
  }
  logout(){
    this.user.logout().subscribe(borrar=>{
      console.log(borrar);
      this.route.navigate(['/'])
      

    })
  }
  openDialogVerPerfil(p:Perfil){
    const dialogRef=this.dialog.open(DialogVerPerfilComponent,{data:p})
  }
  regresar(){
    this.route.navigate(['/principal'])
  }
  modo(){
    this.modoS.setModoOscuro()
  }
 
}
