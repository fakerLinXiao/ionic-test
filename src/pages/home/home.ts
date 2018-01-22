import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    categorys: any = [];
    constructor(public navCtrl: NavController) {
        for (let i = 0; i < 1000; i++) {
            this.categorys.push(i);
            
        }
    }

    // categorys = ['food','drink','sdfgg','dfgsad'];
    items = ['food','drink','sdfgg','dfgsad'];
    headers = ['a','b','c','d']

    gotoTets1Page() {
        this.navCtrl.push('Test1Page');
    }

}
