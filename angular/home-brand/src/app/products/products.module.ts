import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from '../products.service';
import { ProductsComponent } from './products.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductSectionComponent,
    SidebarComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductsModule { }
