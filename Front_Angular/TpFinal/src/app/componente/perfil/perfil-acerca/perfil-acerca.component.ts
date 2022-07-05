import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcerEditarComponent } from 'src/app/dialog/perfil/acer/dialog-acer-editar/dialog-acer-editar.component';
import { Acerca } from 'src/app/modal/perfil/acerca';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'perfil-acerca',
  templateUrl: './perfil-acerca.component.html',
  styleUrls: ['./perfil-acerca.component.css']
})
export class PerfilAcercaComponent implements OnInit {
  @Input() per?:Perfil
  constructor(private dialog:MatDialog,private perfilS:PerfilService) { }

  ngOnInit(): void {
  }
  public openDialogEditarAcer(acerca:Acerca){
    const dialogRef=this.dialog.open(DialogAcerEditarComponent,{data:acerca})
    dialogRef.afterClosed().subscribe(r=>{
      if(r&&this.per?.id_perfil){
        this.perfilS.editarAcerca(acerca,this.per.id_perfil).subscribe(perfil=>{
          this.per=perfil
        })
      }
    })
  }

}
