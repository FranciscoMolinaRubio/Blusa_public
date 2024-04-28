import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, "T-Shirt K red", "L size", 12, "./assets/Camisetas/4cuadrada.jpg"),
    new Product(2, "T-Shirt K white", "L size", 12, "./assets/Camisetas/3cuadrada.jpg"),
    new Product(3, "Resonance", "LP", 10, "./assets/Portadas/resonance.jpg"),
    new Product(4, "K", "LP", 10, "./assets/Portadas/k.jpg"),
    new Product(5, "Toca Breakbeat Perro!", "LP", 10, "./assets/Portadas/tocabreakbeat.jpg"),
    new Product(6, "Rotary", "Download", 3, "./assets/Portadas/rotary.jpg"),
    new Product(7, "Blusa", "Download", 3, "./assets/Portadas/blusablusa.jpg"),
    new Product(8, "Toca Breakbeat Perro!", "Download", 3, "./assets/Portadas/tocabreakbeat.jpg"),
    new Product(9, "Resonance", "Download", 3, "./assets/Portadas/resonance.jpg"),
    new Product(10, "K", "Download", 3, "./assets/Portadas/k.jpg"),
  ]
  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
