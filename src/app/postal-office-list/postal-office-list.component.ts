import { Component, OnInit } from '@angular/core';
import { OpendataService } from '../opendata.service';
import { PostalOffice } from '../postal-office';

@Component({
  selector: 'app-postal-office-list',
  templateUrl: './postal-office-list.component.html',
  styleUrls: ['./postal-office-list.component.css']
})
export class PostalOfficeListComponent implements OnInit {

  displayedColumns: string[] = ['naam', 'straat', 'huisnummer', 'postcode', 'district', 'subtype'];

  get mySelectedPostOffices():PostalOffice[]{
    return this.service.mySelectedPostalOffices;
  }

  constructor(private service:OpendataService) {

   }

  ngOnInit() {
  }

}
