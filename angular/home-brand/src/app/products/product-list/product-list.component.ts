import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products: any[]=[];

  productCategory : string='';
  constructor(private productService: ProductsService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productCategory = params['category'];
      this.products = this.productService.getProductsByCategory(this.productCategory);
    })
  }

  productDetails(id:number){
    this.router.navigate(['/product',id]);


  }

}
