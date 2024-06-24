import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

// Clase que define el componente para mostrar un producto individual
export class ProductItemComponent {

  constructor(
    private messageService: MessageService // Inyección de dependencia del servicio MessageService para manejar la comunicación entre componentes
  ){}

  @Input() product: Product; // Input que recibe un producto desde el componente padre

  /**
   * Funcion en la que mandamos un producto al componente padre Product-list-component.ts
   * @autor Francisco Molina Rubio
   */
  addToCart(): void {
    this.messageService.sendMessage(this.product); // Envía el producto seleccionado al servicio de mensajes para que sea recibido por el componente padre
  }


}