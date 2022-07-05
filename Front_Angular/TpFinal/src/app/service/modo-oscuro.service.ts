import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModoOscuroService {

  modoOscuro:boolean=false
  constructor() { }

  public getModoOscuro(){
    return this.modoOscuro
  }
  public setModoOscuro(){
    this.modoOscuro=!this.modoOscuro
  }
}
