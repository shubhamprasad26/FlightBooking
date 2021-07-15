import { Injectable } from '@angular/core';
import { BookingHistory } from '../Interfaces/booking-history';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  Bookings : BookingHistory[] = [];

  constructor() { }
  getBookingdetails() : BookingHistory[]
  {
    this.Bookings = 
    [
      {FlightName : "Indigo" ,Bookingdate : new Date('2021,10,10'),  Price :2509 , Total_Bookings:1},
      {FlightName : "Go Air" ,Bookingdate : new Date('2021,08,10'),  Price:3509 ,  Total_Bookings:1},
      {FlightName : "Spice Jet", Bookingdate : new Date('2021,11,16'),  Price:2509 ,  Total_Bookings:1},
      {FlightName : "Indigo" ,Bookingdate : new Date('2020,03,10'),  Price:5509 ,  Total_Bookings:1},
      {FlightName : "Air Asia", Bookingdate : new Date('2019,01,26'),  Price:1000 ,  Total_Bookings:1},
      {FlightName : "Air India", Bookingdate : new Date('2021,04,12'),  Price:1208 ,  Total_Bookings:1}
    ];

    return this.Bookings;


  }
}
