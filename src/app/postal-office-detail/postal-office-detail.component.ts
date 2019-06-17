import { Component, OnInit } from '@angular/core';
import { OpendataService } from '../opendata.service';
import { PostalOffice } from '../postal-office';


@Component({
  selector: 'app-postal-office-detail',
  templateUrl: './postal-office-detail.component.html',
  styleUrls: ['./postal-office-detail.component.css']
})
export class PostalOfficeDetailComponent implements OnInit {

  
  get postOffice():PostalOffice{
    return this.service.mySelectedPostalOffice;
  }

  constructor(private service:OpendataService) {

   }

  ngOnInit() {
  }

}
