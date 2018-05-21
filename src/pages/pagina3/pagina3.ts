import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { Pagina2Page } from "../pagina2/pagina2";

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  a3: boolean = false;
  a4: boolean = false;

  aux1: number;
  aux2: number;

  vector: string = '';
  v1: string= '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.v1 = this.navParams.get('valores')
  }

  enviarPagina2(){
    if(this.a3 == false){
      this.aux1 = 0;
    }else{
      this.aux1 = 1;
    }

    if(this.a4 == false){
      this.aux2 = 0;
    }else{
      this.aux2 = 1;
    }

    this.vector = this.v1 + ',' + this.aux1 + ',' + this.aux2;

    this.navCtrl.push(Pagina2Page, {'valores1': this.vector});
  }

}
