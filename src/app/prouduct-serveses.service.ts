import { Injectable } from '@angular/core';
import { ProductData } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProuductServesesService {
  protecttdatailsparentarray  :ProductData[]=[
    {id:10,
    name:"aya",
    price:100,
    pdetails:"sale",},
    {id:11,
    name:"aya",
    price:100,
    pdetails:"sale",},
    {id:12,
    name:"aya",
    price:100,
    pdetails:"sale",},
    {id:13,
    name:"aya",
    price:100,
    pdetails:"sale",},
    {id:14,
    name:"aya",
    price:100,
    pdetails:"sale",},
    {id:15,
    name:"aya",
    price:100,
    pdetails:"sale",},
  ]

  constructor() { }



 getallproduct():ProductData[]{
  return this.protecttdatailsparentarray;
 }
 getallproductbyid(id:Number):ProductData|undefined{

return this.protecttdatailsparentarray.find(productdetail=>productdetail.id=== id)


 }




}
