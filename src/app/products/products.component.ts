import { Component,Input,Output,EventEmitter } from '@angular/core';
import {ProductData} from '../product-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

@Input() prodtdetailfromchild! :ProductData[];
@Output() varoutput=new EventEmitter<ProductData>();
getdataeventfromuser(par:any){
this.varoutput.emit(par);
}
add(par:any){
this.prodtdetailfromchild.push({
  id :this.prodtdetailfromchild.length +1 , name: par , price:100 ,pdetails:'test'
});


}



}
