import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OffreComponent } from './offre/offre.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"", redirectTo:"product", pathMatch:'full'},
  {path:"product", component:ProductsComponent},
  {path:"productDetails/:id1/:id2", component:ProductDetailsComponent},
  {path:"offre",component:OffreComponent},
  {path:"addProduct", component:AddProductComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
