import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems = [];
  total: number = 0;

  constructor(private messageService: MessageService,
  private storageService: StorageService) {
    
  }
  ngOnInit(): void {
    this.getItem();
    this.total = this.getTotal();
    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
  }

  getItem(): void{
    this.messageService.getMessage().subscribe((product: Product) => {
      let exists = false;
      this.cartItems.forEach(item => {
        if (item.productId === product.id) {
          exists = true;
          item.qty++
        }
      })
      if (!exists) {
        const cartItem = new CartItem(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });
  }

  getTotal(): number{
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.qty * item.productPrice;
    });
    return +total.toFixed(2);
  }

  emptyCart(): void{
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }

  deleteItem(i: number): void{
    this.cartItems.splice(i, 1);
    this.storageService.setCart(this.cartItems);
  }
}
