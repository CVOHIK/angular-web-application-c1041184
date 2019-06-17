import { Component, OnInit } from '@angular/core';
import { OpendataService } from '../opendata.service';
import { PostalOffice } from '../postal-office';



@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {



  lat: number = this.service.myLocation.x;
  lng: number = this.service.myLocation.y;
  zoom: number = 10;
  


  postalOffices:PostalOffice[]=[];
  public selectedPostaloffice:PostalOffice[]=[];
  constructor(private service:OpendataService) {
    this.selectedPostaloffice=service.mySelectedPostalOffices;
   }

  ngOnInit() {
    this.service.GetAllPostalOffices().subscribe({
      next:(result => {
          let root:any = result;
          this.postalOffices = root.features;
      })
    });
  }

  SetSelectedPostalOffice(postalOffice:PostalOffice){
    this.service.mySelectedPostalOffice=postalOffice;
    this.service.changeMarker=true;
  }

}
