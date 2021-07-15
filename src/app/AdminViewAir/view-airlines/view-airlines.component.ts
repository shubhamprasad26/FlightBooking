import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-airlines',
  templateUrl: './view-airlines.component.html',
  styleUrls: ['./view-airlines.component.css']
})
export class ViewAirlinesComponent implements OnInit {
  AirLineId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id =  this.route.snapshot.paramMap.get('id');
    this.AirLineId = id;
  }

}
