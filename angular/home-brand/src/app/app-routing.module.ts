import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSectionComponent } from './products/product-section/product-section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartComponent } from './products/cart/cart.component';


const routes: Routes = [
  {
    path:'products-category/:category',
    component:ProductSectionComponent
  },
  {
    path:'products-category',
    component:ProductSectionComponent
  },{
    path:'product/:id',
    component:ProductDetailsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },{
    path:'about',
    component:AboutComponent
  },{
    path:'cart',
    component:CartComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
