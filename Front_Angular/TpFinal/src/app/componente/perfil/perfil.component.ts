import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Perfil } from 'src/app/modal/perfil/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
import { UsuarioService } from 'src/app/service/security/usuario.service';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { ModoOscuroService } from 'src/app/service/modo-oscuro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil?:Perfil
  oscuro!:boolean

  constructor(private perfilService:PerfilService,private user:UsuarioService,private modoS:ModoOscuroService) { }

  ngOnInit(): void {
    this.oscuro=this.modoS.getModoOscuro()
    this.perfilService.obtenerPerfilUsuario(this.user.obtenerUsuarioLogueado().username).subscribe(per=>{
      this.perfil=per
      console.log(this.perfil);
   })
  }
  evento:any
  @ViewChild('pdf',{static:true})canva!:ElementRef<HTMLImageElement>
  //@ViewChild('copia',{static:true})copia!:ElementRef<HTMLImageElement>
  descargar(e:any){
    console.log("entre?",e);
    const opciones={allowTaint:true,useCORS:true,scale:1}
    html2canvas(this.canva.nativeElement,opciones).then((canvas)=>{  
     //this.copia.nativeElement.appendChild(canvas)
      //Cargo PDF
    var pdf=new jsPDF('p','pt','a4')
     
      var img=canvas.toDataURL("image/png")
      const imageProps=pdf.getImageProperties(img)
      const pdfw=pdf.internal.pageSize.getWidth()
      //const pdfh=(imageProps.height * pdfw) / imageProps.width
      const pdfh=pdf.internal.pageSize.getHeight()
      //console.log("ancho:",pdfw,"-altura:",pdfh,"-imagen props ancho:",imageProps.width,"-imagen props altura:",imageProps.height);
      
      pdf.addImage(img,'PNG',0,0,pdfw,pdfh,undefined,'FAST')
      pdf.save(`CV_${this.perfil?.infoPersonal.nom}${this.perfil?.infoPersonal.ape}.pdf`)
   })
  }
  modoOscuro($event:boolean){
    this.oscuro=$event
    
  }
}
