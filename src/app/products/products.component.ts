import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    
    list!:Product[];
    prix!:number;
   
    constructor(private R: Router, private productS:ProductService){}

ngOnInit(): void {
  this.productS.getAllProducts().subscribe( data => this.list=data);
}
    Buy(P:Product){
     // if( P.quantity>0){
        P.quantity--;
       // this.productS.getProductById(2);
     // }

    }
    Like(P:Product){
      P.like++;
    }

    showDetails(id:number){
this.R.navigate(['productDetails', id]);
    }

    search(){
   //alert(this.productS.numberProducts(this.list,"like",0));
    }

    Delete(p:Product){
      this.productS.deleteProduct(p.id).subscribe(() => {
        alert('deleted');
        this.productS.getAllProducts().subscribe( data => this.list=data);}
      );
    }
}
