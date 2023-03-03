import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {

  list:Product[]=[];

  prix!:number;
 
  constructor(private R: Router, private productS:ProductService){}

ngOnInit(): void {
  this.productS.getAllProducts().subscribe( data  =>{
  for(let p of data){
   
   if (p.price < 20 ){
     this.list.push(p)
     }
  }
});
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
  //  alert(this.productS.getNumberOf(this.productList,"like",0))
  }
}
