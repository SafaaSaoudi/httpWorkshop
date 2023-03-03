import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

P:Product= {id: 1, title: "t", price: 0, quantity: 0, like: 0};

addProduct( F: NgForm){
    console.log(F);
  console.log(F.value);
  
    this.P.title = F.controls['title'].value;
    console.log(this.P.title);
    

  }
}
