import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  products: Product[] = [];
  constructor(private ProductService: ProductService) {
   
  }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void{
    this.products = this.ProductService.getProducts();
  }

}
