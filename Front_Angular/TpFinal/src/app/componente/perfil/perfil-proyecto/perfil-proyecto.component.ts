import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProyCrearComponent } from 'src/app/dialog/perfil/proy/dialog-proy-crear/dialog-proy-crear.component';
import { DialogProyEditarComponent } from 'src/app/dialog/perfil/proy/dialog-proy-editar/dialog-proy-editar.component';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { Proyecto } from 'src/app/modal/perfil/proyecto';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'perfil-proyecto',
  templateUrl: './perfil-proyecto.component.html',
  styleUrls: ['./perfil-proyecto.component.css']
})
export class PerfilProyectoComponent implements OnInit {
  @Input() per?:Perfil
  constructor(private dialog: MatDialog,private perfilS:PerfilService) { }

  ngOnInit(): void {
  }
  openDialogCrearProy(){
    const dialogRef=this.dialog.open(DialogProyCrearComponent)
    dialogRef.afterClosed().subscribe((r)=>{
      if(r){
        if(this.per?.id_perfil){
          this.perfilS.crearProyecto(r,this.per.id_perfil).subscribe(perfil=>{
            this.per=perfil
          })
        }
      }
    })
  }
  openDialogEditarProy(proy:Proyecto){
    const dialogRef=this.dialog.open(DialogProyEditarComponent,{data:proy})
    dialogRef.afterClosed().subscribe(r=>{
      if(r){
        if(this.per?.id_perfil){
          this.perfilS.editarProyecto(r,this.per.id_perfil,proy.id_proyecto).subscribe(perfil=>{
            this.per=perfil
          })
        }
      }
    })
  }
  public eliminarProy(idS:string){
    if(this.per){
      this.perfilS.eliminarProyecto(this.per.id_perfil,idS).subscribe(perfil=>{
        this.per=perfil
      })
    }
  }

}
