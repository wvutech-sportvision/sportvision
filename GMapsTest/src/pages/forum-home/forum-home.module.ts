import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumHomePage } from './forum-home';

@NgModule({
  declarations: [
    ForumHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ForumHomePage),
  ],
})
export class ForumHomePageModule {}
