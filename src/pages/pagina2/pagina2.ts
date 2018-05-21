import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  vector1: string = '';
  vector2: string = '';

  v1: string = '';
  v2: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.v2 = this.navParams.get('valores1')
    this.vector2 = this.v2;

    console.log(this.vector2);
  }

}
