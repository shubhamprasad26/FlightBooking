import { Injectable } from '@angular/core';
import { ManageUserBookings } from 'src/Classes/ManageBookings';


@Injectable({
  providedIn: 'root'
})
export class ManageBookingsServices {

    manageusrbooks : ManageUserBookings[] = [];
    //sums : Number=0;
    price : number =0;


  constructor() { }

   UserBookings() : ManageUserBookings[]{
       
    this.manageusrbooks = [
        {BookingId : 0, AirLineLogo: "../assets/Background/Indigo0.jpg", Price:2509 , DateOfBookings : new Date('2021,10,10'),  cancelOption: false},
        {BookingId : 1, AirLineLogo: "../assets/Background/AirIndia.jpg" , Price:3509 , DateOfBookings : new Date('2020,08,10') , cancelOption: false},
        {BookingId : 2, AirLineLogo: "../assets/Background/Indigo2.jpg" , Price:2509 , DateOfBookings : new Date('2021,11,16') , cancelOption: false},
        {BookingId : 3, AirLineLogo: "../assets/Background/Indigo3.jpg" , Price:5509 , DateOfBookings : new Date('2020,03,10') , cancelOption: false},
        {BookingId : 4, AirLineLogo: "../assets/Background/Indigo4.jpg" , Price:1000 , DateOfBookings : new Date('2019,01,26') , cancelOption: false},
        {BookingId : 5, AirLineLogo: "../assets/Background/Indigo2.jpg" , Price:1208 , DateOfBookings : new Date('2021,04,12') , cancelOption: false}
    ];
    this.manageusrbooks = this.manageusrbooks.sort((a,b)=> (a.DateOfBookings<b.DateOfBookings ? 1 :-1));
    return this.manageusrbooks;

    } 

    TotalPrice() : number
    {           
        this.price=0;
        this.manageusrbooks.map((a) => {
            if (a.DateOfBookings > new Date())
            {
                a.cancelOption=true;
                this.price = this.price + a.Price;
            }
        })
        return this.price;
    }
    //for(let data of this.manageusrbooks)
    //    {
    //        if(data.DateOfBookings > new Date (Date.now()))
    //        {
    //            data.cancelOption=true;
    //        }  
    //    }

}
