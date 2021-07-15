import { Component, OnInit } from '@angular/core';
import { ManageAirLineServices } from 'src/Services/ManageAirlines.service';
import { ManageAirlines } from 'src/Classes/ManageAIrlines';
import { Router } from '@angular/router'

@Component({
  selector: 'app-manage-admin-airlines',
  templateUrl: './manage-admin-airlines.component.html',
  styleUrls: ['./manage-admin-airlines.component.css']
})
export class ManageAdminAirlinesComponent implements OnInit {
  Airlines : ManageAirlines[] = [];
  images : string = "";

  constructor(private mngsrvc: ManageAirLineServices, private router: Router) { 
    
  }

  ngOnInit() {
    this.GetAirLinesDetails();
    this.images = "../assets/Background/Indigo.jpg";
  }

  GetAirLinesDetails() : ManageAirlines[] 
  {
    this.Airlines = this.mngsrvc.ViewAllAirlines();
    return this.Airlines;
  }

  ViewAirlines(AirLineView: ManageAirlines)
  {
    this.router.navigate(['./ViewAirline', AirLineView.AirlineId]);

  }

}
