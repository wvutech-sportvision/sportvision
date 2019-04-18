import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { Pipe, PipeTransform } from '@angular/core';


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

  team1: any = [];
  team2: any = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  addPlayer1(){
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
                    this.team1.push(data);
                }
            }
        ]
    });

    prompt.present();
}

addPlayer2(){
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
                    this.team2.push(data);
                }
            }
        ]
    });

    prompt.present();
}

editPlayer1(player){
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
                    let index = this.team1.indexOf(player);

                    if(index > -1){
                      this.team1[index] = data;
                    }
                }
            }
        ]
    });
    prompt.present();       
}

editPlayer2(player){
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
                    let index = this.team2.indexOf(player);

                    if(index > -1){
                      this.team2[index] = data;
                    }
                }
            }
        ]
    });
    prompt.present();       
}

deletePlayer1(player){

    let index = this.team1.indexOf(player);

    if(index > -1){
        this.team1.splice(index, 1);
    }
}

deletePlayer2(player){

    let index = this.team2.indexOf(player);

    if(index > -1){
        this.team2.splice(index, 1);
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchmakingPage');
  }
}
