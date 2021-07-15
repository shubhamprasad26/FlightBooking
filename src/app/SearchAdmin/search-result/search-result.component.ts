import { Component, OnInit } from '@angular/core';
import { ManageSearch} from '../../../Classes/ManageSearch';
import {ManageSearchService} from '../../../Services/ManageSearch.service'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  mngsrc: ManageSearch[] = [];

  constructor( private mgsearchsrvc : ManageSearchService) { }

  ngOnInit(): void {
    this.mngsrc = this.mgsearchsrvc.UserBookings();
  }

}
