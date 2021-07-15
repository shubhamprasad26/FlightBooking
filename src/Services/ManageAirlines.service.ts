import { Injectable } from '@angular/core';
import { ManageAirlines } from 'src/Classes/ManageAIrlines';



@Injectable({
  providedIn: 'root'
})
export class ManageAirLineServices {

    manageAirlines : ManageAirlines[] = [];
    mngAirlines : any;
    nos:number  = 0;

  constructor() { 

    this.manageAirlines = [
      {AirlineId: 0, Logo : "../assets/Background/Indigo0.jpg" , CompanyName : "Indigo", ContactNo : 1070070070, BriefInfo : "Truly Indian"},
      {AirlineId: 1, Logo : "../assets/Background/AirIndia.jpg" , CompanyName : "Air India", ContactNo : 2070070070, BriefInfo : "Lets FLY"},
      {AirlineId: 2, Logo : "../assets/Background/Indigo2.jpg" , CompanyName : "Go AIR", ContactNo : 3070070070, BriefInfo : "Fly Time"},
      {AirlineId: 4, Logo : "../assets/Background/Indigo3.jpg" , CompanyName : "Spice JET", ContactNo : 4070070070, BriefInfo : "EAT SLEEP & FLY.."},
      {AirlineId: 5, Logo : "../assets/Background/Indigo4.jpg" , CompanyName : "Qatar Airlines", ContactNo : 5070070070, BriefInfo : "DND Airplane MODE"}
    ];
  }

  ViewAllAirlines() : ManageAirlines[] {

      return this.manageAirlines;
  }
  AddAirlines( addAir : ManageAirlines) : void
  {

    
    //this.manageAirlines.map((a)=> { 
    //  if(a.AirlineId > this.nos)
    //  {
    //    this.nos = a.AirlineId;
    //  }
    //});
    //this.nos +=1;
    this.mngAirlines = new ManageAirlines(addAir.AirlineId,addAir.Logo,addAir.BriefInfo,addAir.ContactNo);
    
    

    this.manageAirlines= [...this.manageAirlines, this.mngAirlines];
    
  }

  RemoveAirline(airlineremove: ManageAirlines): void
  {
    let no = airlineremove.AirlineId;

    this.manageAirlines.map((a) => {a.AirlineId!=no});
  }
  

}
