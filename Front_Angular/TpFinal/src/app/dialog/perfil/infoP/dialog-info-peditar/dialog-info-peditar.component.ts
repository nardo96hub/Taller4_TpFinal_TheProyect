import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Perfil } from 'src/app/modal/perfil/perfil';

@Component({
  selector: 'app-dialog-info-peditar',
  templateUrl: './dialog-info-peditar.component.html',
  styleUrls: ['./dialog-info-peditar.component.css']
})
export class DialogInfoPEditarComponent implements OnInit {

  infoPEditar:FormGroup
  fotoEditar:FormGroup
  redesEditar:FormGroup

  fPortada:string=""
  fPerfil:string=""
  originalPortada:string=""
  originalPerfil:string=""
  constructor(private dialogRef:MatDialogRef<DialogInfoPEditarComponent>,@Inject(MAT_DIALOG_DATA) private data:Perfil,private builder:FormBuilder) { 
    this.infoPEditar=builder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      puesto:['',[Validators.required]],
      localidad:['',[Validators.required]]
    })

    this.fotoEditar=builder.group({
      perfil:['',[Validators.required]],
      portada:['',[Validators.required]]
    })

    this.redesEditar=builder.group({
      facebook:['',[Validators.required]],
      twitter:['',[Validators.required]],
      instagram:['',[Validators.required]],
      github:['',[Validators.required]],
      linkedin:['',[Validators.required]]
    })
  }

  ngOnInit(): void {

    //Inicializar Foto
    this.fotoEditar.get('perfil')?.setValue(this.data.imagen.perfil)
    this.fotoEditar.get('portada')?.setValue(this.data.imagen.portada)
    this.fPortada= this.fotoEditar.get('portada')?.value
    this.fPerfil=this.fotoEditar.get('perfil')?.value
    this.originalPerfil=this.fPerfil
    this.originalPortada=this.fPortada

    //Inicializar InfoP
    this.infoPEditar.get('nombre')?.setValue(this.data.infoPersonal.nom)
    this.infoPEditar.get('apellido')?.setValue(this.data.infoPersonal.ape)
    this.infoPEditar.get('puesto')?.setValue(this.data.puesto)
    this.infoPEditar.get('localidad')?.setValue(this.data.infoPersonal.localidad)

    //Inicializar Redes
    this.redesEditar.get('facebook')?.setValue(this.data.infoPersonal.redes.facebook)
    this.redesEditar.get('twitter')?.setValue(this.data.infoPersonal.redes.twitter)
    this.redesEditar.get('instagram')?.setValue(this.data.infoPersonal.redes.instagram)
    this.redesEditar.get('github')?.setValue(this.data.infoPersonal.redes.github)
    this.redesEditar.get('linkedin')?.setValue(this.data.infoPersonal.redes.linkedin)
  }
  perfil:Perfil=this.data
  disableIP:boolean=true
  disableF:boolean=true
  disableR:boolean=true


  editarRedes(){
    let link:string
    if(!this.disableR){
      link=this.redesEditar.get('facebook')?.value
      if(link.includes("facebook.com")){
        this.perfil.infoPersonal.redes.facebook=link
      }
      link=this.redesEditar.get('twitter')?.value
      if(link.includes("twitter.com")){
        console.log("link:",link);
        
        this.perfil.infoPersonal.redes.twitter=link
      }
      link=this.redesEditar.get('instagram')?.value
      if(link.includes("instagram.com")){
        this.perfil.infoPersonal.redes.instagram=link
      }
      link=this.redesEditar.get('github')?.value
      if(link.includes("github.com")){
        this.perfil.infoPersonal.redes.github=link
      }
      link=this.redesEditar.get('linkedin')?.value
      if(link.includes("linkedin.com")){
        this.perfil.infoPersonal.redes.linkedin=link
      }

      this.dialogRef.close(this.perfil)
      
    }
  }
  editarInfoP(){
    this.perfil.puesto=this.infoPEditar.get('puesto')?.value
    this.perfil.infoPersonal.nom=this.infoPEditar.get('nombre')?.value
    this.perfil.infoPersonal.ape=this.infoPEditar.get('apellido')?.value
    this.perfil.infoPersonal.localidad=this.infoPEditar.get('localidad')?.value

    this.dialogRef.close(this.perfil)
  }
  editarFotos(){
    this.perfil.imagen.perfil=this.fotoEditar.get('perfil')?.value
    this.perfil.imagen.portada=this.fotoEditar.get('portada')?.value

    this.dialogRef.close(this.perfil)
  }

  isFormValidIP():boolean{
    if(this.infoPEditar.get('nombre')?.valid && this.infoPEditar.get('apellido')?.valid  && this.infoPEditar.get('puesto')?.valid&& this.infoPEditar.get('localidad')?.valid){
      this.disableIP=false;
      return this.disableIP
    }else{
      this.disableIP=true;
      return this.disableIP
    }
  }
  isFormValidR():boolean{
    if(this.redesEditar.get('facebook')?.valid && this.redesEditar.get('twitter')?.valid && this.redesEditar.get('instagram')?.valid && this.redesEditar.get('github')?.valid && this.redesEditar.get('linkedin')?.valid){
      this.disableR=false;
      return this.disableR
    }else{
      this.disableR=true;
      return this.disableR
    }
  }
  isFormValidF():boolean{
    if(this.fotoEditar.get('portada')?.valid && this.fotoEditar.get('perfil')?.valid){
      this.disableF=false;
      return this.disableF
    }else{
      this.disableF=true;
      return this.disableF
    }
  }

  imagenPerfil(event:any){
    this.fPerfil=event.target.value
  }
  imagenPortada(event:any){
    this.fPortada=event.target.value
  }
  volverPerfil(){
    this.fotoEditar.get('perfil')?.setValue(this.originalPerfil)
    this.fPerfil=this.fotoEditar.get('perfil')?.value
  }
  volverPortada(){
    this.fotoEditar.get('portada')?.setValue(this.originalPortada)
    this.fPortada=this.fotoEditar.get('portada')?.value
  }
  borrarPerfil(){
    this.fotoEditar.get('perfil')?.setValue("")
    this.fPerfil=this.fotoEditar.get('perfil')?.value
  }
  borrarPortada(){
    this.fotoEditar.get('portada')?.setValue("")
    this.fPortada=this.fotoEditar.get('portada')?.value
  }
}
