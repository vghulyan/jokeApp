import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { CreateJokePage } from '../pages/joke/create-joke/create-joke';
import { DetailsJokePage } from '../pages/joke/details-joke/details-joke';
import { ListJokePage } from '../pages/joke/list-joke/list-joke';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JokeServiceProvider } from '../providers/joke-service/joke-service';
import {LocalNotifications} from '@ionic-native/local-notifications';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBIQZ0mp-A9161Dq2vQMb6q3_unEcdohog",
    authDomain: "jokeapp-5e810.firebaseapp.com",
    databaseURL: "https://jokeapp-5e810.firebaseio.com",
    projectId: "jokeapp-5e810",
    storageBucket: "jokeapp-5e810.appspot.com",
    messagingSenderId: "282562690328"
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CreateJokePage,
    DetailsJokePage,
    ListJokePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CreateJokePage,
    DetailsJokePage,
    ListJokePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JokeServiceProvider,
    HttpClient,
    LocalNotifications
  ]
})
export class AppModule {}
