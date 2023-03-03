import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id!:number;
param2!:number;

constructor(private actR:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.actR.snapshot.params['id1'];
  this.param2= this.actR.snapshot.params['id2']
}

}
