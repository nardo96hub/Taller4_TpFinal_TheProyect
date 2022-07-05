import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experiencia } from 'src/app/modal/perfil/experiencia';

@Component({
  selector: 'app-dialog-exp-editar',
  templateUrl: './dialog-exp-editar.component.html',
  styleUrls: ['./dialog-exp-editar.component.css']
})
export class DialogExpEditarComponent implements OnInit {
  expEditar:FormGroup
  constructor(private dialogRef:MatDialogRef<DialogExpEditarComponent>,@Inject(MAT_DIALOG_DATA)private data:Experiencia,private builder:FormBuilder) { 
    this.expEditar=builder.group({
      
      titulo:['',[Validators.required]],
      empresa:['',[Validators.required]],
      jornada:['',[Validators.required]],
      anio:['',[Validators.required]],
      lugar:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    this.expEditar.get('titulo')?.setValue(this.data.titulo)
    this.expEditar.get('empresa')?.setValue(this.data.empresa)
    this.expEditar.get('jornada')?.setValue(this.data.jornada)
    this.expEditar.get('anio')?.setValue(this.data.anio)
    this.expEditar.get('lugar')?.setValue(this.data.lugar)
    
  
  }
  exp:{titulo:string,empresa:string,jornada:string,anio:string,lugar:string}={titulo:"",empresa:"",jornada:"",anio:"",lugar:""}
  disable:boolean=true

  editarExp(){
    if(!this.disable){
     this.exp.titulo=this.expEditar.get('titulo')?.value
     this.exp.empresa=this.expEditar.get('empresa')?.value
     this.exp.jornada=this.expEditar.get('jornada')?.value
     this.exp.anio=this.expEditar.get('anio')?.value
     this.exp.lugar=this.expEditar.get('lugar')?.value
      
     this.dialogRef.close(this.exp)
    }
  }
  isFormValid():boolean{
    if(this.expEditar.get('titulo')?.valid && this.expEditar.get('empresa')?.valid  && this.expEditar.get('jornada')?.valid&& this.expEditar.get('anio')?.valid&& this.expEditar.get('lugar')?.valid){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true;
      return this.disable
    }
  }

}
