import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEduCrearComponent } from 'src/app/dialog/perfil/edu/dialog-edu-crear/dialog-edu-crear.component';
import { DialogEduEditarComponent } from 'src/app/dialog/perfil/edu/dialog-edu-editar/dialog-edu-editar.component';
import { Educacion } from 'src/app/modal/perfil/educacion';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'perfil-edu',
  templateUrl: './perfil-edu.component.html',
  styleUrls: ['./perfil-edu.component.css']
})
export class PerfilEduComponent implements OnInit {
  @Input() per?:Perfil
  constructor(private dialog: MatDialog,private perfilS:PerfilService) { }

  ngOnInit(): void {
  }
  public openDialogCrearEdu(){
    const dialogRef=this.dialog.open(DialogEduCrearComponent)
    dialogRef.afterClosed().subscribe((r)=>{
      if(r && this.per?.id_perfil){
        this.perfilS.crearEducacion(r,this.per.id_perfil).subscribe(perfil=>{
          this.per=perfil
        })
      }
    })
  }
  public openDialogEditarEdu(edu:Educacion){
    const dialogRef=this.dialog.open(DialogEduEditarComponent,{data:edu})
    dialogRef.afterClosed().subscribe(r=>{
      if(r && this.per?.id_perfil){
        this.perfilS.editarEducacion(edu,this.per.id_perfil,edu.id_Edu).subscribe(perfil=>{
          this.per=perfil
        })
      }
    })
  }
  public eliminarEdu(idS:string){
    if(this.per){
      this.perfilS.eliminarEducacion(this.per.id_perfil,idS).subscribe(perfil=>{
        this.per=perfil
      })
    }

  }

}
