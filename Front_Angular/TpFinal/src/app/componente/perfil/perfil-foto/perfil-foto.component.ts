import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogInfoPEditarComponent } from 'src/app/dialog/perfil/infoP/dialog-info-peditar/dialog-info-peditar.component';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'perfil-foto',
  templateUrl: './perfil-foto.component.html',
  styleUrls: ['./perfil-foto.component.css']
})
export class PerfilFotoComponent implements OnInit {
  @Input() per?:Perfil
  constructor(private dialog: MatDialog,private perfilS:PerfilService,private rout:Router) { }

  ngOnInit(): void {
  }
  public openDialogInfoPEditar(p:Perfil){
    const dialogRef=this.dialog.open(DialogInfoPEditarComponent,{data:p})
    dialogRef.afterClosed().subscribe(r=>{
      if(r){
        this.perfilS.editarInfoP(r).subscribe(perfil=>{
         // console.log("Se actualizo twitter? antes:",this.per?.infoPersonal.redes.twitter);
          this.per=perfil
         // console.log("Ahora:",this.per.infoPersonal.redes.twitter);
          
          //this.rout.navigate(['/principal'])
          this.rout.navigate(['/perfil'])
        })
      }
    })
  }
}
