import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pagina3Page } from "../pagina3/pagina3";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  a1: boolean = false;
  a2: boolean = false;

  aux1: number;
  aux2: number;

  vector: string = '';

  constructor(public navCtrl: NavController) {

  }

  dispararFuncion(){

    if(this.a1 == false){
      this.aux1 = 0;
    }else{
      this.aux1 = 1;
    }

    if(this.a2 == false){
      this.aux2 = 0;
    }else{
      this.aux2 = 1;
    }

    this.vector = this.aux1 + ',' + this.aux2;

    this.navCtrl.push(Pagina3Page, {'valores': this.vector});

  }

}
