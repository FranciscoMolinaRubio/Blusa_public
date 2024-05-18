import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product'; // Importa el modelo de Producto

@Injectable({
  providedIn: 'root'
})
  
// Clase para comunicar el componente product-item con el cart-component
export class MessageService {

  message = new Subject(); // Crea un nuevo Subject para enviar mensajes entre componentes

  constructor() { }

  /**
   * Función que envía un mensaje con un producto al componente suscrito
   * @param product El producto que se envía como mensaje
   * @returns void
   * @author Francisco Molina Rubio
   */
  sendMessage(product: Product): void {
    this.message.next(product); // Emite el producto a través del Subject
  }

  /**
   * Función que devuelve un Observable para escuchar mensajes
   * @returns Observable<any> Un Observable que emite mensajes enviados por otros componentes
   * @description Otros componentes pueden suscribirse a este Observable para recibir mensajes
   *              enviados desde el componente product-item
   * @author Francisco Molina Rubio
   */
  getMessage(): Observable<any> {
    return this.message.asObservable(); // Devuelve el Subject como un Observable para la suscripción externa
  }
}