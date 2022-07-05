import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skill } from 'src/app/modal/perfil/skill';

@Component({
  selector: 'app-dialog-skill-editar',
  templateUrl: './dialog-skill-editar.component.html',
  styleUrls: ['./dialog-skill-editar.component.css']
})
export class DialogSkillEditarComponent implements OnInit {
  niveles:string[]=["BASICO","INTERMEDIO","AVANZADO"];
  skillEditar:FormGroup
  constructor(private dialogRef:MatDialogRef<DialogSkillEditarComponent>,@Inject(MAT_DIALOG_DATA) private data:Skill,private builder:FormBuilder) { 
    this.skillEditar=builder.group({
      lenguaje:['',[Validators.required]],
      nivel:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.skillEditar.get('lenguaje')?.setValue(this.data.lenguaje)
    this.skillEditar.get('nivel')?.setValue(this.data.nivel)
  }
  skill:{lenguaje:string,nivel:string}={lenguaje:"",nivel:""}
  disable:boolean=true

  editarSkill(){
    if(!this.disable){
      this.skill.lenguaje=this.skillEditar.get('lenguaje')?.value
      this.skill.nivel=this.skillEditar.get('nivel')?.value
      this.dialogRef.close(this.skill)
    }
  }

  isFormValid():boolean{
    if(this.skillEditar.get('lenguaje')?.valid && this.skillEditar.get('nivel')?.valid){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true;
      return this.disable
    }
  }



}
