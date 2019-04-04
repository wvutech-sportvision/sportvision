import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { CognitoServiceProvider } from "../../providers/cognito-service/cognito-service";

@Component({
  selector: "page-sign-up",
  templateUrl: "sign-up.html"
})
export class SignUpPage {
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public CognitoService: CognitoServiceProvider
  ) {}

  register() {
    this.CognitoService.signUp(this.email, this.password).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  
}
