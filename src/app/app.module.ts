import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NumerPage } from '../pages/numer/numer';
import { ZastepstwaPage } from '../pages/zastepstwa/zastepstwa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/*import { ScreenOrientation } from '@ionic-native/screen-orientation';*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NumerPage,
    ZastepstwaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NumerPage,
    ZastepstwaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    /*ScreenOrientation*/
  ]
})
export class AppModule {}
