import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-edu-crear',
  templateUrl: './dialog-edu-crear.component.html',
  styleUrls: ['./dialog-edu-crear.component.css']
})
export class DialogEduCrearComponent implements OnInit {

  eduCrear:FormGroup
  constructor(private dialogRed:MatDialogRef<DialogEduCrearComponent>,private builder:FormBuilder){
    this.eduCrear=builder.group({
      lugar:['',[Validators.required,Validators.minLength(1)]],
      titulo:['',[Validators.required,Validators.minLength(1)]],
      anio:['',[Validators.required,Validators.minLength(1)]]
    })
  } 

  ngOnInit(): void {
  }
  edu:{lugar:string,titulo:string,anio:string}={lugar:"",titulo:"",anio:""}
  disable:boolean=true
  crearEdu(){
    if(!this.disable){
      this.edu.titulo=this.eduCrear.get('titulo')?.value;
      this.edu.anio=this.eduCrear.get('anio')?.value;
      this.edu.lugar=this.eduCrear.get('lugar')?.value;
      this.dialogRed.close(this.edu)
    }
  }
  isFormValid():boolean{
    if(this.eduCrear.get('titulo')?.valid && this.eduCrear.get('lugar')?.valid && this.eduCrear.get('anio')?.valid ){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true
      return this.disable
    } 
  }

}
