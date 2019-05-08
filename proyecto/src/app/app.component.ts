import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAijg0Ocs0_L6SNDoIWUj8GqtcHwEefErc",
        authDomain: "labcel-e45e9.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    
  }
}
