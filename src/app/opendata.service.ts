import { Injectable } from '@angular/core';
import { PostalOffice, Attributes, PostOfficeAttributes, Coordinates } from './postal-office';
import { HttpClient } from '@angular/common/http';


@Injectable({
   providedIn: 'root'
})

export class OpendataService {


   private _mySelectedPostalOffices: PostalOffice[] = [];
   public mySelectedPostalOffice: PostalOffice;
   public myLocation:Coordinates = {x:51.218546,y:4.421590};
   public changeMarker:boolean=false;



   get mySelectedPostalOffices():PostalOffice[] {
      return this._mySelectedPostalOffices;
   }

   set mySelectedPostalOffices(postaloffices: PostalOffice[]) {
      this._mySelectedPostalOffices = postaloffices.sort((a, b) => a.attributes.naam.localeCompare(b.attributes.naam));
   }

   constructor(private http: HttpClient) {
      this.mySelectedPostalOffice = this.createNewPostalOffice();
   }


   public GetAllPostalOffices(){
      let observable = this.http.get("https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/42/query?where=1%3D1&outFields=*&outSR=4326&f=json");
      return observable;
   };


   public GetAllPostalCodes() {
      let observable = this.http.get("https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/42/query?where=1%3D1&outFields=postcode,district&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json");
      return observable;
   }

   public GetPostalOfficeByPostalCode(postalCode: string) {
      let url: string = `https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/42/query?where=postcode%20%3D%20'${postalCode}'&outFields=*&outSR=4326&f=json`;
      let observable = this.http.get(url);

      return observable;
   }

   public createNewPostalOffice(): PostalOffice {
      let postaloffice = new PostalOffice();
      postaloffice.attributes = new PostOfficeAttributes();
      postaloffice.geometry = new Coordinates();

      return postaloffice;
   }
}
