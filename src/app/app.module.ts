import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { HttpClientModule } from '@angular/common/http';

import {OpendataService} from './opendata.service';

import {MaterialModule} from './material/material.module'
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import { GmapComponent } from './gmap/gmap.component';
import { PostalOfficeDetailComponent } from './postal-office-detail/postal-office-detail.component';
import { PostalOfficeListComponent } from './postal-office-list/postal-office-list.component';
import { DirectionsComponent } from './directions/directions.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    GmapComponent,
    PostalOfficeDetailComponent,
    PostalOfficeListComponent,
    DirectionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    }),
    AgmDirectionModule,
    AppRoutingModule
  ],
  providers: [OpendataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
