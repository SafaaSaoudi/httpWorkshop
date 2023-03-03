import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private http:HttpClient) { }

  numberProducts(list:any, criteria:string, value:number){
    let ctr=0;
    for(let elt of list){
      if(elt[criteria] == value){
        ctr++;
      }

    }
    return ctr;
  }


  getAllProducts(){
    this.http.get("URL").subscribe(data => alert(data));
  }
}
