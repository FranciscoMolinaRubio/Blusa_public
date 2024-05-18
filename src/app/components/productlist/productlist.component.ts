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

// Clase que define el componente para mostrar la lista de productos
export class ProductlistComponent implements OnInit {
  products: Product[] = []; // Arreglo para almacenar la lista de productos

  constructor(
    private ProductService: ProductService, // Inyección de dependencia del servicio ProductService para obtener los productos
    public mensajerecibido: ComunicacionesService // Inyección de dependencia del servicio ComunicacionesService para recibir mensajes
  ) {}

  recibido = false; // Bandera para saber si se ha recibido un mensaje
  private unsubscribe = new Subject<void>(); // Sujeto para manejar la cancelación de suscripciones

  /**
   * Funcion que se llama al cargar la página y que obtiene el array de product-service.ts y 
   * lo introduce en otro array llamando a loadProducts()
   * @autor Francisco Molina Rubio
   */
  ngOnInit(): void {
    this.mensajerecibido.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.recibido = data; // Suscripción para recibir mensajes
    });
    this.loadProducts(); // Carga los productos
  }

  /**
   * Funcion que termina de introducir los datos de product-service.ts en el array de esta clase
   * @autor Francisco Molina Rubio
   */
  loadProducts(): void {
    if (this.recibido) {
      this.products = this.ProductService.getProductsDescount(); // Obtiene los productos con descuento si se ha recibido un mensaje
    } else {
      this.products = this.ProductService.getProducts(); // Obtiene todos los productos si no se ha recibido un mensaje
    }
  }
}