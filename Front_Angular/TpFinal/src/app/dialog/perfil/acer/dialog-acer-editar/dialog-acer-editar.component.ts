import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Acerca } from 'src/app/modal/perfil/acerca';

@Component({
  selector: 'app-dialog-acer-editar',
  templateUrl: './dialog-acer-editar.component.html',
  styleUrls: ['./dialog-acer-editar.component.css']
})
export class DialogAcerEditarComponent implements OnInit {
  acerEditar:FormGroup
  constructor(private dialogRef:MatDialogRef<DialogAcerEditarComponent>,@Inject(MAT_DIALOG_DATA) private data:Acerca,private builder:FormBuilder) { 
    this.acerEditar=builder.group({
      acer:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this,this.acerEditar.get('acer')?.setValue(this.data.acer)
  }
  acer:{acer:string}={acer:""}
  disable:boolean=true
  editarAcer(){
    if(!this.disable){
      this.acer.acer=this.acerEditar.get('acer')?.value
      this.dialogRef.close(this.acer)
    }
  }
  isFormValid():boolean{
    if(this.acerEditar.get('acer')?.valid){
      this.disable=false
      return this.disable
    }else{
      this.disable=true
      return this.disable
    }
  }

}
