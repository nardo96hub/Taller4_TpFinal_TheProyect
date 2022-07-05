import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogSkillCrearComponent } from 'src/app/dialog/perfil/skill/dialog-skill-crear/dialog-skill-crear.component';
import { DialogSkillEditarComponent } from 'src/app/dialog/perfil/skill/dialog-skill-editar/dialog-skill-editar.component';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { Skill } from 'src/app/modal/perfil/skill';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'perfil-skill',
  templateUrl: './perfil-skill.component.html',
  styleUrls: ['./perfil-skill.component.css']
})
export class PerfilSkillComponent implements OnInit {
  @Input() per?:Perfil
  constructor(private dialog: MatDialog,private perfilS:PerfilService) { }

  ngOnInit(): void {
  }
  openDialogCrearSkill(){
    const dialogRef=this.dialog.open(DialogSkillCrearComponent)
    dialogRef.afterClosed().subscribe((r)=>{
      if(r){
        if(this.per?.id_perfil){
          this.perfilS.crearSkill(r,this.per.id_perfil).subscribe(perfil=>{
            this.per=perfil
          })
        }
        
      }
      
      
    })
  }
  openDialogEditarSkill(skill:Skill){
    const dialogRef=this.dialog.open(DialogSkillEditarComponent,{data:skill})
    dialogRef.afterClosed().subscribe(r=>{
      if(r){
        if(this.per?.id_perfil){
          console.log(r);
        
          this.perfilS.editarSkill(r,this.per.id_perfil,skill.id_Skill).subscribe(perfil=>{
            this.per=perfil
          })
        }
      }
     
    })
  }
  public eliminarSkill(idS:string){
    if(this.per){
      this.perfilS.eliminarSkill(this.per.id_perfil,idS).subscribe(perfil=>{
        this.per=perfil
      })
    }
    
  }
  porcentaje(nivel:string){
    if(nivel==="BASICO"){
      return 30
    }else if(nivel==="INTERMEDIO"){
      return 70
    }
    return 99
  }
 
}
