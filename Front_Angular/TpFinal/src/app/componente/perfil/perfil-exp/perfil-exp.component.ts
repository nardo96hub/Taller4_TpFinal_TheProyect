import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExpCrearComponent } from 'src/app/dialog/perfil/exp/dialog-exp-crear/dialog-exp-crear.component';
import { DialogExpEditarComponent } from 'src/app/dialog/perfil/exp/dialog-exp-editar/dialog-exp-editar.component';
import { Experiencia } from 'src/app/modal/perfil/experiencia';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'perfil-exp',
  templateUrl: './perfil-exp.component.html',
  styleUrls: ['./perfil-exp.component.css']
})
export class PerfilExpComponent implements OnInit {
  @Input() per?:Perfil
  constructor(private dialog: MatDialog,private perfilS:PerfilService) { }

  ngOnInit(): void {
  }
  public openDialogCrearExp(){
    const dialogRef=this.dialog.open(DialogExpCrearComponent)
    dialogRef.afterClosed().subscribe((r)=>{
      if(r){
        if(this.per?.id_perfil){
          this.perfilS.crearExperiencia(r,this.per.id_perfil).subscribe(perfil=>{
            this.per=perfil
          })
        }
      }
    })
  }
  public openDialogEditarExp(exp:Experiencia){
    const dialogRef=this.dialog.open(DialogExpEditarComponent,{data:exp})
    dialogRef.afterClosed().subscribe(r=>{
      if(r && this.per?.id_perfil){
        this.perfilS.editarExperiencia(exp,this.per.id_perfil,exp.id_Exp).subscribe(perfil=>{
          this.per=perfil
        })
      }
    })
  
  }
  public eliminarExp(idS:string){
    if(this.per){
      this.perfilS.eliminarExperiencia(this.per.id_perfil,idS).subscribe(perfil=>{
        this.per=perfil
      })
    }
  }
/*
openDialogCrearSkill(){
    const dialogRef=this.dialog.open(DialogSkillCrearComponent)
    dialogRef.afterClosed().subscribe((r)=>{
      console.log("Resultado del close:",r );
      
    })
  }
*/
}
