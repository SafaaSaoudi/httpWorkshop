import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
//P:any;
P:Product={id:1, title:"test", price:10, quantity:0, like:0};
constructor(private ps:ProductService, private R:Router){}

ngOnInit(){
 this.ps.getAllProducts().subscribe(data => this.P.id=data.length+1);
}

addProduct( F: NgForm){
   
   this.P.title=F.controls['title'].value;
   this.P.quantity=F.controls['qantity'].value;
   this.P.price=F.controls['price'].value;
   this.P.like=0;
   console.log(this.P.id);
   
   //this.ps.getAllProducts().subscribe(data => this.P.id=data.length+1);
  
   this.ps.addProduct(this.P).subscribe(()=>
   {
    alert("done");
    this.R.navigate(['/product']);

  });


   

    
  
    

  }
}
