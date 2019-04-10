import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CognitoServiceProvider } from "../../providers/cognito-service/cognito-service";

import { HomePage } from '../home/home';

let flag: boolean = false;

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email: string;
  password: string;

  constructor(public CognitoSerive:CognitoServiceProvider, public navCtrl: NavController) {
  }

  login(){
    this.CognitoSerive.authenticate(this.email, this.password)
    .then(res =>{
      flag = true;
      console.log(res);
    }, err =>{
      flag = true;    //This is the line that was changed from false ot true
      console.log(err);
    });
  }
  goTo(page) {
    if(page === 'home' && flag) {
      this.navCtrl.push(HomePage);
    }

  }
}
