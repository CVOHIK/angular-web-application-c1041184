import { Component, OnInit } from '@angular/core';
import { OpendataService } from '../opendata.service';
import {Coordinates} from '../postal-office'

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

    public lat: Number = 4.421590;
    public lng: Number = 51.218546;
    
    public origin: any= {lat: this.service.myLocation.x, lng: this.service.myLocation.y} ;
    public destination: any;

    get isSelection():boolean{

      if (this.service.mySelectedPostalOffice.geometry.x>0) {
        return true;
      }else{
        return false;
      }
    }

    get changeMarker():Boolean{
      return this.service.changeMarker;
    }

    

  constructor(private service:OpendataService) { }

  ngOnInit() {
    this.setCoordinates()
  };

  setCoordinates(){
    this.destination = {lat:this.service.mySelectedPostalOffice.geometry.y, lng:this.service.mySelectedPostalOffice.geometry.x};
    this.service.changeMarker=false;

  }

 

}


