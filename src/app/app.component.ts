import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent implements OnInit{
  title = 'Blusa';

/**
 * Funcion
 * @author Francisco Molina Rubio
 */
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC3Y0rRkmTBnWCuu-EwpWO4Md2R2AyQiJo",
      authDomain: "blusa-e115c.firebaseapp.com"
      })
  }
}
