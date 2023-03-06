import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id!:number;

P:Product={id:1, title:"test", price:10, quantity:0, like:0};

constructor(private actR:ActivatedRoute, private productS: ProductService){}

ngOnInit(): void {
  this.id=this.actR.snapshot.params['id1'];
 
  this.productS.getProductById(this.id).subscribe(data => this.P = data);
  
}

updateProduct(){
  alert('test');
}

}
