
import { Component, inject } from '@angular/core';
import {ProductData} from '../app/product-data';
import{ProuductServesesService}from './prouduct-serveses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'project-three';
  constructor(){
this.protecttdatailsparentarray=this.ProuductService.getallproduct();


  }
  protecttdatailsparent :ProductData={
    id: 10,
    name: 'protectt',
    price: 100,
    pdetails: "sale",

  }
  protecttdatailsparentarray  :ProductData[]=[

  ]
  ProuductService:ProuductServesesService=inject(ProuductServesesService);

  addItem(newItem:any){

    this.protecttdatailsparent.name=newItem;


  }

}
