import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private openNativeSettings: OpenNativeSettings) {
  }

  open(setting: string) {
    this.openNativeSettings.open(setting).then(val => {
      alert(setting);
    }).catch(err=>{
      alert(JSON.stringify(err));
    })
  }

  about(event, item) {
    this.navCtrl.push(AboutPage);
  }

  contact(event, item) {
    this.navCtrl.push(ContactPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
}
