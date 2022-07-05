import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proyecto } from 'src/app/modal/perfil/proyecto';

@Component({
  selector: 'app-dialog-proy-editar',
  templateUrl: './dialog-proy-editar.component.html',
  styleUrls: ['./dialog-proy-editar.component.css']
})
export class DialogProyEditarComponent implements OnInit {
  proyEditar:FormGroup
  constructor(private dialogRef:MatDialogRef<DialogProyEditarComponent>,@Inject(MAT_DIALOG_DATA) private data:Proyecto,private builder:FormBuilder) { 
    this.proyEditar=builder.group({
      // nombreP:string, descripcion:string, link:string
      nombreP:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      link:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.proyEditar.get('nombreP')?.setValue(this.data.nombreP)
    this.proyEditar.get('descripcion')?.setValue(this.data.descripcion)
    this.proyEditar.get('link')?.setValue(this.data.link)
  }
  proy:{nombreP:string,descripcion:string,link:string}={nombreP:"",descripcion:"",link:""}
  disable:boolean=true

  editarProy(){
    if(!this.disable){
      this.proy.descripcion=this.proyEditar.get('descripcion')?.value
      this.proy.link=this.proyEditar.get('link')?.value
      this.proy.nombreP=this.proyEditar.get('nombreP')?.value
      
      this.dialogRef.close(this.proy)
    }
  }
  isFormValid():boolean{
    if(this.proyEditar.get('descripcion')?.valid && this.proyEditar.get('link')?.valid  && this.proyEditar.get('nombreP')?.valid){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true;
      return this.disable
    }
  }
}
