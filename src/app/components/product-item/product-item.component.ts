import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
  
export class ProductItemComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(
    private messageService: MessageService
  ){}

  @Input() product: Product;

  addToCart(): void{
    this.messageService.sendMessage(this.product);
  }

}
