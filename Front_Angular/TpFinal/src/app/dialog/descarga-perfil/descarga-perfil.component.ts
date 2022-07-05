import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

//Buscar proyecto primerProyecto ejemplo1
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-descarga-perfil',
  templateUrl: './descarga-perfil.component.html',
  styleUrls: ['./descarga-perfil.component.css']
})
export class DialogVerPerfilComponent implements OnInit {
  per!:Perfil
  //canva!:any
  //copia!:any
 // pdf!:jsPDF
 
  constructor(private router:Router,private route:ActivatedRoute,private dialogRef:MatDialogRef<DialogVerPerfilComponent>,@Inject(MAT_DIALOG_DATA) private data:Perfil) { }
  
  ngOnInit(): void {
    this.dialogRef.updateSize('100%','100%')
    //this.dialogRef.updateSize('1000px','500px')
    this.per=this.data 
  }
  
 @ViewChild('pdf',{static:true})canva!:ElementRef<HTMLImageElement>
  //@ViewChild('copia',{static:true})copia!:ElementRef<HTMLImageElement>
  descargarPDF(){
    const opciones={allowTaint:true,useCORS:true,scale:1}
    html2canvas(this.canva.nativeElement,opciones).then((canvas)=>{
      
      //this.copia.nativeElement.appendChild(canvas)
     
     
      //Cargo PDF
      var pdf=new jsPDF('p','pt','a4')
      var img=canvas.toDataURL("image/png")
      const imageProps=pdf.getImageProperties(img)
      const pdfw=pdf.internal.pageSize.getWidth()
      const pdfh=/*(imageProps.height * pdfw) / imageProps.width*/pdf.internal.pageSize.getHeight()
      pdf.addImage(img,'PNG',0,0,pdfw,pdfh,undefined,'FAST')
      pdf.save(`CV_${this.per.infoPersonal.nom}${this.per.infoPersonal.ape}.pdf`)
   })
  
  
    
  
 
    
  }
  porcentaje(nivel:string){
    if(nivel==="BASICO"){
      return 30
    }else if(nivel==="INTERMEDIO"){
      return 70
    }
    return 99
  }
}
