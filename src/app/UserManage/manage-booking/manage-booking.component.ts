import { Component, OnInit } from '@angular/core';
import { ManageBookingsServices } from '../../../Services/ManageBooking.service';
import { ManageUserBookings } from 'src/Classes/ManageBookings';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {

  manageUserBookings : ManageUserBookings[] = [];
  prices : number =0;

  constructor(private mngBookings : ManageBookingsServices ) { }

  ngOnInit(): void {
    this.manageBookingsMethod();
    this.prices=this.mngBookings.TotalPrice();
  }
  manageBookingsMethod(): ManageUserBookings[] {
    this.manageUserBookings = this.mngBookings.UserBookings();
    return this.manageUserBookings;
  }

}
