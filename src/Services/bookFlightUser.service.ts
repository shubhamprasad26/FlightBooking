import { Injectable } from '@angular/core';
import { BookFlightUser } from 'src/Classes/BookFLightUser';



@Injectable({
  providedIn: 'root'
})
export class BookFlightService {

    manageAirlines : BookFlightUser[] = [];

  constructor() { }

  BookingUserSrvc() : BookFlightUser[] {

      this.manageAirlines = [
        {AirLineLogo: "../assets/Background/Indigo0.jpg", Price : 12000},
        {AirLineLogo: "../assets/Background/AirIndia.jpg" ,Price : 10000},
        {AirLineLogo: "../assets/Background/Indigo2.jpg" , Price :4500},
        {AirLineLogo: "../assets/Background/Indigo3.jpg" , Price : 3609},
        {AirLineLogo: "../assets/Background/Indigo4.jpg" , Price : 2890}
      ];
      return this.manageAirlines;
  }
  

}
