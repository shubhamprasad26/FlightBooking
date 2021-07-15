import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DiscountGenerateService {

  Discount:number=0;

  constructor() { }

  DiscountPer() :number
  {
        return Math.floor(Math.random() * (20 - 0.1 + 1) + 0.1);
  }
  
}
