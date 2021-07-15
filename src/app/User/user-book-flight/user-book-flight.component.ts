import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BookFlightService} from '../../../Services/bookFlightUser.service';
import { BookFlightUser } from 'src/Classes/BookFLightUser';

@Component({
  selector: 'app-user-book-flight',
  templateUrl: './user-book-flight.component.html',
  styleUrls: ['./user-book-flight.component.css']
})
export class UserBookFlightComponent implements OnInit {

  constructor( private bookusr : BookFlightService) { }
  bookngusr : BookFlightUser[] = [];

  ngOnInit(): void {
    this.BookingUsr();

  }

  BookingUsr() : BookFlightUser[]{
    this.bookngusr = this.bookusr.BookingUserSrvc();
    return this.bookngusr;
  }

  bUser(abcd:NgForm)
  {
    
  } 

  

  

}
