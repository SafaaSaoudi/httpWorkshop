import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL="http://localhost:3000/listProdcut";

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.URL);
  }

  getProductById(id: number){
    //return this.http.get(this.URL+`/${id}`);
    return this.http.get<Product>(this.URL+'/'+id);
      
  }

  addProduct(p:Product){
    return this.http.post<Product>(this.URL, p);
  }

  deleteProduct(id:number){
    return this.http.delete<Product>(this.URL+`/${id}`);
  }

  updateProduct(p:Product){
    return this.http.put<Product>(this.URL, p);
    //return this.http.put(this.URL+`/${id}`, p);
   
  }

}
