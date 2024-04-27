import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, "camisetaRoja", "Camiseta Roja", 12, "./assets/Camisetas/4.jpg"),
    new Product(2, "camisetaBlanca", "Camiseta Blanca", 12, "./assets/Camisetas/3.jpg"),
    new Product(3, "resonance", "Resonance LP", 10, "./assets/Portadas/resonance.jpg"),
    new Product(4, "k", "K LP", 10, "./assets/Portadas/k.jpg"),
    new Product(5, "toca", "Toca Breakbeat Perro! LP", 10, "./assets/Portadas/tocabreakbeat.jpg"),
    new Product(6, "rotary", "Rotary Download", 3, "./assets/Portadas/rotary.jpg"),
  ]
  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
