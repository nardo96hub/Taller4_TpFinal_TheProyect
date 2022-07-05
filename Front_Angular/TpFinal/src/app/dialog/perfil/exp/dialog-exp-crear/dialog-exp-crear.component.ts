import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-exp-crear',
  templateUrl: './dialog-exp-crear.component.html',
  styleUrls: ['./dialog-exp-crear.component.css']
})
export class DialogExpCrearComponent implements OnInit {
  expCrear:FormGroup;
  constructor( private dialogRef:MatDialogRef<DialogExpCrearComponent>,private builder:FormBuilder) {
    this.expCrear=builder.group({
      lugar:['',[Validators.required,Validators.minLength(1)]],
      titulo:['',[Validators.required,Validators.minLength(1)]],
      anio:['',[Validators.required,Validators.minLength(1)]],
      empresa:['',[Validators.required,Validators.minLength(1)]],
      jornada:['',[Validators.required,Validators.minLength(1)]]

    })
   }

  ngOnInit(): void {
  }
  exp:{lugar:string,titulo:string,anio:string,jornada:string,empresa:string}={lugar:"",titulo:"",anio:"",empresa:"",jornada:""}
  disable:boolean=true

  crearExp(){
    if(!this.disable){
      this.exp.titulo=this.expCrear.get('titulo')?.value
      this.exp.lugar=this.expCrear.get('lugar')?.value
      this.exp.anio=this.expCrear.get('anio')?.value
      this.exp.empresa=this.expCrear.get('empresa')?.value
      this.exp.jornada=this.expCrear.get('jornada')?.value
     
      this.dialogRef.close(this.exp);
    }
  }

  isFormValid():boolean{
    if(this.expCrear.get('anio')?.valid && this.expCrear.get('titulo')?.valid  && this.expCrear.get('lugar')?.valid && this.expCrear.get('empresa')?.valid && this.expCrear.get('jornada')?.valid ){
      this.disable=false;
      return this.disable
    }else{
      this.disable=true;
      return this.disable
    }
  }


}
