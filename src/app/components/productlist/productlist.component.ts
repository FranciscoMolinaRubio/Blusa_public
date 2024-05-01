import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ComunicacionesService } from '../../servicios/comunicaciones.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
  
export class ProductlistComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private ProductService: ProductService,
    public mensajerecibido: ComunicacionesService) {
  }

  recibido = false;
  private unsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.mensajerecibido.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.recibido = data;
    });
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.recibido) {
      this.products = this.ProductService.getProductsDescount();
    } else {
      this.products = this.ProductService.getProducts();
    }
  }
}
