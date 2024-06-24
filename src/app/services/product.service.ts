import { Injectable } from '@angular/core';
import { Product } from '../models/product'; // Importa el modelo de Producto

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Productos disponibles en la tienda para usuarios sin iniciar sesión
  products: Product[] = [
    new Product(1, "T-Shirt K red", "L size", 12, "./assets/Camisetas/4cuadrada.jpg"),
    new Product(2, "T-Shirt K white", "L size", 12, "./assets/Camisetas/3cuadrada.jpg"),
    new Product(3, "Resonance", "CD", 10, "./assets/Portadas/resonance.jpg"),
    new Product(4, "K", "CD", 10, "./assets/Portadas/k.jpg"),
    new Product(5, "Toca Breakbeat Perro!", "CD", 10, "./assets/Portadas/tocabreakbeat.jpg"),
    new Product(6, "Rotary", "Download", 3, "./assets/Portadas/rotary.jpg"),
    new Product(7, "Blusa", "Download", 3, "./assets/Portadas/blusablusa.jpg"),
    new Product(8, "Toca Breakbeat Perro!", "Download", 3, "./assets/Portadas/tocabreakbeat.jpg"),
    new Product(9, "Resonance", "Download", 3, "./assets/Portadas/resonance.jpg"),
    new Product(10, "K", "Download", 3, "./assets/Portadas/k.jpg")
  ];

  // Productos disponibles en la tienda para usuarios logeados con descuento aplicado
  products2: Product[] = [
    new Product(1, "T-Shirt K red", "L size. 10% Discount", 10.80, "./assets/Camisetas/4cuadrada.jpg"),
    new Product(2, "T-Shirt K white", "L size. 10% Discount", 10.80, "./assets/Camisetas/3cuadrada.jpg"),
    new Product(3, "Resonance", "LP. 10% Discount", 10.80, "./assets/Portadas/resonance.jpg"),
    new Product(4, "K", "LP. 10% Discount", 10.80, "./assets/Portadas/k.jpg"),
    new Product(5, "Toca Breakbeat Perro!. 10% Discount", "LP", 10.80, "./assets/Portadas/tocabreakbeat.jpg"),
    new Product(6, "Rotary", "Download. 10% Discount", 2.70, "./assets/Portadas/rotary.jpg"),
    new Product(7, "Blusa", "Download. 10% Discount", 2.70, "./assets/Portadas/blusablusa.jpg"),
    new Product(8, "Toca Breakbeat Perro!", "Download. 10% Discount", 3, "./assets/Portadas/tocabreakbeat.jpg"),
    new Product(9, "Resonance", "Download. 10% Discount", 2.70, "./assets/Portadas/resonance.jpg"),
    new Product(10, "K", "Download. 10% Discount", 2.70, "./assets/Portadas/k.jpg")
  ];

  constructor() { }

  /**
   * Retorna la lista de productos disponibles para usuarios no logeados
   * @returns Product[] La lista de productos
   * @author Francisco Molina Rubio
   */
  getProducts(): Product[] {
    return this.products;
  }

  /**
   * Retorna la lista de productos disponibles para usuarios logeados con descuento aplicado
   * @returns Product[] La lista de productos con descuento
   * @author Francisco Molina Rubio
   */
  getProductsDescount(): Product[] {
    return this.products2;
  }
}
