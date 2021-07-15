import { Component, OnInit } from '@angular/core';
import { BookingHistory } from '../../../Interfaces/booking-history';
import { BookingsService } from '../../../Services/bookings.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  public AllBookings: BookingHistory[] = [];

  constructor( private bookkingSrv: BookingsService) { }

  ngOnInit() 
  {
    this.AllBookings = this.bookkingSrv.getBookingdetails();
  }

}
