import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ManageAirLineServices } from '../../../Services/ManageAirlines.service';
import {ManageAirlines } from 'src/Classes/ManageAIrlines';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-add-airlines',
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.css']
})
export class AddAirlinesComponent implements OnInit {
  mngAirlines : ManageAirlines =  new ManageAirlines();
  
  constructor(private mngsrvc : ManageAirLineServices, private route : Router) { }

  ngOnInit(): void {
  }
  addAirlines(AddAirlines : NgForm)
  {
    
    this.mngAirlines.CompanyName = AddAirlines.value.AirlineName;
    this.mngAirlines.AirlineId = 0;
    this.mngAirlines.Logo ="";
    this.mngAirlines.ContactNo = AddAirlines.value.contactNo;



    console.log(this.mngAirlines.CompanyName);
    console.log(this.mngAirlines.AirlineId);
    console.log(this.mngAirlines.Logo);
    console.log(this.mngAirlines.ContactNo);

    this.mngsrvc.AddAirlines( this.mngAirlines);
    this.route.navigate(['/ManageAirlines']);

  }

}
