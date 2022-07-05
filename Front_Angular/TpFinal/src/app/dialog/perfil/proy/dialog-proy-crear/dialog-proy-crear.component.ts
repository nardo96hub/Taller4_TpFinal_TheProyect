import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-proy-crear',
  templateUrl: './dialog-proy-crear.component.html',
  styleUrls: ['./dialog-proy-crear.component.css']
})
export class DialogProyCrearComponent implements OnInit {
  proyCrear:FormGroup
  constructor(private dialogRef:MatDialogRef<DialogProyCrearComponent>, private builder:FormBuilder) {
    this.proyCrear=builder.group({
       nombreP:['',[Validators.required,Validators.minLength(1)]],
       descripciom:['',[Validators.required,Validators.minLength(1)]],
       link:['']
    })
    
   
   }
   proy:{nombreP:string,descripcion:string,link:string}={nombreP:"",descripcion:"",link:""}
   disable:boolean=true;
  ngOnInit(): void {
  }
  crearProy(){
    if(!this.disable){
      this.proy.nombreP=this.proyCrear.get('nombreP')?.value
      this.proy.link=this.proyCrear.get('link')?.value
      this.proy.descripcion=this.proyCrear.get('descripcion')?.value
      this.dialogRef.close(this.proy);
    }
  }
  isFormValid():boolean{
    if(this.proyCrear.get('nombreP')?.valid && this.proyCrear.get('descripcion')?.valid ){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true;
      return this.disable
    }
  }

}
