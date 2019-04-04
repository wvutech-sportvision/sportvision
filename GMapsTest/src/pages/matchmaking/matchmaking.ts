import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MatchmakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matchmaking',
  templateUrl: 'matchmaking.html',
})
export class MatchmakingPage {

  players: any = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  addPlayer(){

    let prompt = this.alertCtrl.create({
        title: 'Add Player',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.players.push(data);
                }
            }
        ]
    });

    prompt.present();
}

editPlayer(player){

    let prompt = this.alertCtrl.create({
        title: 'Edit Player',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Save',
                handler: data => {
                    let index = this.players.indexOf(player);

                    if(index > -1){
                      this.players[index] = data;
                    }
                }
            }
        ]
    });

    prompt.present();       

}

deletePlayer(player){

    let index = this.players.indexOf(player);

    if(index > -1){
        this.players.splice(index, 1);
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchmakingPage');
  }

}
