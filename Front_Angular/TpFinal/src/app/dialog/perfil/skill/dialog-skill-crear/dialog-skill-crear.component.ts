import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-skill-crear',
  templateUrl: './dialog-skill-crear.component.html',
  styleUrls: ['./dialog-skill-crear.component.css']
})
export class DialogSkillCrearComponent implements OnInit {

  niveles:string[]=["BASICO","INTERMEDIO","AVANZADO"];
  skillCrear:FormGroup;

  constructor(private dialogRef:MatDialogRef<DialogSkillCrearComponent>,private builder:FormBuilder) {
    this.skillCrear=builder.group({
      lenguaje:['',[Validators.required,Validators.minLength(1)]],
      nivel:['',[Validators.required,Validators.minLength(1)]]
    })

   }

  ngOnInit(): void {
  }

  
  skill:{lenguaje:string,nivel:string}={lenguaje:"",nivel:""}
  disable:boolean=true;
  
  crearSkill(){
   if(!this.disable){
      this.skill.lenguaje=this.skillCrear.get('lenguaje')?.value
      this.skill.nivel=this.skillCrear.get('nivel')?.value
      
      this.dialogRef.close(this.skill);
    }
  }
  isFormValid():boolean{
    if(this.skillCrear.get('lenguaje')?.valid && this.skillCrear.get('nivel')?.valid){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true;
      return this.disable
    }
  }

}
