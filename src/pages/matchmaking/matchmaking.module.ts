import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchmakingPage } from './matchmaking';

@NgModule({
  declarations: [
    MatchmakingPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchmakingPage),
  ],
})
export class MatchmakingPageModule {}
