import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item'; // Importa el modelo de Item de Carrito

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Verifica si existe un carrito en el almacenamiento local
   * @returns boolean true si existe un carrito, false de lo contrario
   * @description Esta función verifica si existe un carrito en el almacenamiento local del navegador
   * @author Francisco Molina Rubio
   */
  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  /**
   * Almacena un carrito en el almacenamiento local
   * @param cart El carrito que se va a almacenar
   * @description Esta función almacena el carrito en el almacenamiento local del navegador, convirtiéndolo primero a formato JSON
   * @author Francisco Molina Rubio
   */
  setCart(cart: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  /**
   * Obtiene el carrito almacenado en el almacenamiento local
   * @returns CartItem[] El carrito almacenado
   * @description Esta función obtiene el carrito almacenado en el almacenamiento local del navegador y lo convierte de nuevo a objetos JavaScript
   * @author Francisco Molina Rubio
   */
  getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart'));
  }

  /**
   * Borra el carrito almacenado en el almacenamiento local
   * @description Esta función borra el carrito almacenado en el almacenamiento local del navegador
   * @author Francisco Molina Rubio
   */
  clear(): void {
    localStorage.removeItem('cart');
  }
}
