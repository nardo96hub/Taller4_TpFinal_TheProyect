import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Educacion } from 'src/app/modal/perfil/educacion';
import { Perfil } from 'src/app/modal/perfil/perfil';

@Component({
  selector: 'app-dialog-edu-editar',
  templateUrl: './dialog-edu-editar.component.html',
  styleUrls: ['./dialog-edu-editar.component.css']
})
export class DialogEduEditarComponent implements OnInit {

  eduEditar:FormGroup
  constructor(private dialogRef:MatDialogRef<DialogEduEditarComponent>,@Inject(MAT_DIALOG_DATA) private data:Educacion,private builder:FormBuilder) { 
    this.eduEditar=builder.group({
      //lugar:string,public titulo:string,public anio:string
      lugar:['',[Validators.required]],
      titulo:['',[Validators.required]],
      anio:['',[Validators.required]]
      
    })
  }

  ngOnInit(): void {
    this.eduEditar.get('titulo')?.setValue(this.data.titulo)
    this.eduEditar.get('anio')?.setValue(this.data.anio)
    this.eduEditar.get('lugar')?.setValue(this.data.lugar)
    
  
  }
  edu:{lugar:string,titulo:string,anio:string}={lugar:"",titulo:"",anio:""}
  disable:boolean=true

  
  editarEdu(){
  
    if(!this.disable){
      this.edu.titulo=this.eduEditar.get('titulo')?.value
      this.edu.anio=this.eduEditar.get('anio')?.value
      this.edu.lugar=this.eduEditar.get('lugar')?.value
    
      this.dialogRef.close(this.edu)
    }
  }
  isFormValid():boolean{
    if(this.eduEditar.get('titulo')?.valid && this.eduEditar.get('anio')?.valid&& this.eduEditar.get('lugar')?.valid){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true;
      return this.disable
    }
  }


}
