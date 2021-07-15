import { Injectable } from '@angular/core';
import { ManageUserBookings } from 'src/Classes/ManageBookings';
import { ManageSearch } from '../Classes/ManageSearch';


@Injectable({
  providedIn: 'root'
})
export class ManageSearchService {

    mngseach : ManageSearch[] = [];
    
  constructor() { }

   UserBookings() : ManageSearch[]{
       
    this.mngseach = [
        {AirLineLogo : "../assets/Background/Indigo3.jpg ", Source : " Bangalore " , Destination : "Delhi ", PNRNO : "BLR1209"},
        {AirLineLogo : "../assets/Background/AirIndia.jpg ", Source : " Delhi " , Destination : "Ranchi ", PNRNO : "DEL007"},
        {AirLineLogo : "../assets/Background/Indigo4.jpg ", Source : " Ranchi " , Destination : "Hyderabad ", PNRNO : "INR421"},
        {AirLineLogo : "../assets/Background/Indigo0.jpg ", Source : " Ranchi " , Destination : "Barcelona ", PNRNO : "RNC007"},
        {AirLineLogo : "../assets/Background/Indigo2.jpg ", Source : " Bangalore " , Destination : "Ranchi ", PNRNO : "SPCL1212"},
    ];
    
    return this.mngseach;

    } 

    

}
