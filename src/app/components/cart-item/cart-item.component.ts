import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
  
// Clase que define el componente para mostrar un item del carrito
export class CartItemComponent {
@Input() cartItem: CartItem // Input que recibe un item del carrito desde el componente padre
}
