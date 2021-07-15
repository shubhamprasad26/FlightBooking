import { Component, OnInit } from '@angular/core';
import { ManageDiscount } from 'src/Classes/ManageDiscount';
import { DiscountGenerateService } from 'src/Services/GenerateDiscountService';


@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.css']
})
export class ManageDiscountComponent implements OnInit {
  public mngdisc  = new ManageDiscount(" "," ");
  nos:any;
  count:boolean=false;
  constructor(private discprc : DiscountGenerateService) { 
    
  }

  ngOnInit(): void {
    
  }

  Disc()
  {
    this.nos = this.discprc.DiscountPer();
    this.count=true;
  }

}


