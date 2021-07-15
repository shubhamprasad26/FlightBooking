import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  title:string ="";
  isLogged:boolean = false;
  constructor()
  {
    this.title = 'WireFrames';
    this.isLogged  = true;

  }
  
}
