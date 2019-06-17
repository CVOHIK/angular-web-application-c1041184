import { Component, OnInit } from '@angular/core';
import { OpendataService } from '../opendata.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private postalcodes;
  constructor(private service:OpendataService) { 
  }

  ngOnInit() {

    this.service.GetAllPostalCodes().subscribe({
      next:(result => {
        let root:any=result;
        this.postalcodes = root.features;
        this.postalcodes.sort((a,b) => a.attributes.postcode.localeCompare(b.attributes.postcode));
      })
    });
  }
  
  public setSelectedPostalOffices(postalcode){


    if (postalcode=='all') {
      this.service.GetAllPostalOffices().subscribe({
        next:(result => {
          let root:any=result;
          this.service.mySelectedPostalOffices=root.features;
        })
      });
      
    }else{
      this.service.GetPostalOfficeByPostalCode(postalcode).subscribe({
        next:(result => {
          let root:any=result;
          this.service.mySelectedPostalOffices=root.features;
        })
      });

    }
    this.service.mySelectedPostalOffice= this.service.createNewPostalOffice();
    this.service.changeMarker=true;
  }
}
