import { Component, OnInit} from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';
import { StorageService } from '../../services/storage.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { environment } from '../../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { ComunicacionesService } from '../../servicios/comunicaciones.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
  
export class CartComponent implements OnInit{

  cartItems = [];
  total: number = 0;
  public payPalConfig?: IPayPalConfig;
  recibido: boolean;
  private unsubscribe = new Subject<void>();
  descuento = "Aplicado 10% de Descuento a usuario registrado";

  constructor(
    private messageService: MessageService,
    private storageService: StorageService,
    private modalService: NgbModal,
    public mensajerecibido: ComunicacionesService
   ) {}

  ngOnInit(): void {
    this.initConfig();
    this.getItem();
    this.total = this.getTotal();
    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
    this.mensajerecibido.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.recibido = data;
    });
    this.emptyCart();
  }

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: environment.clientId,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: this.getTotal().toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: this.getTotal().toString()
                        }
                    }
                },
              items: this.getItemsList()
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });
        },
        onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point',
            JSON.stringify(data));
          this.openModal(
            data.purchase_units[0].items,
            data.purchase_units[0].amount.value
          );
          this.emptyCart();
            
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
           
        },
        onError: err => {
            console.log('OnError', err);
          
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
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

  getItemsList(): any[]{
    const items: any[] = [];
    let item = {};
    this.cartItems.forEach((it: CartItem) => {
      item = {
        name: it.productName,
        quantity: it.qty,
        unit_amount: { value: it.productPrice, currency_code: 'EUR' }

      };
      items.push(item);
    }
    );
    return items;
  }

  
  openModal(items, amount): void {
    const modalRef = this.modalService.open(ModalComponent,  {size:"lg"});
    modalRef.componentInstance.items = items;
    modalRef.componentInstance.amount = amount;
    
    setTimeout(() => {
      const modalElement = document.querySelector('.modal-backdrop'); 
      if (modalElement) {
        modalElement['style'].zIndex = '1'; 
      }
    }, 0); 
  }
}
