import { Component, OnInit } from '@angular/core';
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
  
// Clase que define la columna donde aparece la cesta y la posibilidad de pago
export class CartComponent implements OnInit{

  cartItems = []; // Arreglo para almacenar los elementos del carrito
  total: number = 0; // Variable para almacenar el total del carrito
  public payPalConfig?: IPayPalConfig; // Configuración de PayPal
  recibido: boolean; // Bandera para saber si se ha recibido un mensaje
  private unsubscribe = new Subject<void>(); // Sujeto para manejar la cancelación de suscripciones
  descuento = "Aplicado 10% de Descuento a usuario registrado"; // Mensaje de descuento

  constructor(
    private messageService: MessageService,
    private storageService: StorageService,
    private modalService: NgbModal,
    public mensajerecibido: ComunicacionesService
   ) {}

  /**
   * Funcion que carga al comenzar el resto de funciones de la página
   * @autor Francisco Molina Rubio
   */
  ngOnInit(): void {
    this.initConfig(); // Inicializa la configuración de PayPal
    this.getItem(); // Carga los items del carrito
    this.total = this.getTotal(); // Calcula el total del carrito
    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart(); // Obtiene los items del carrito desde el almacenamiento
    }
    this.mensajerecibido.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.recibido = data; // Suscripción para recibir mensajes
    });
    this.emptyCart(); // Vacía el carrito
  }

  /**
   * Funcion que crea el carro de la compra
   * @autor Francisco Molina Rubio
   */
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: environment.clientId,
        createOrderOnClient: (data) => <ICreateOrderRequest> {
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
          this.emptyCart(); // Vacía el carrito después de la autorización
        }
    };
  }

  /**
   * Funcion que añade un item al carro de la compra
   * @autor Francisco Molina Rubio
   */
  getItem(): void {
    this.messageService.getMessage().subscribe((product: Product) => {
      let exists = false;
      this.cartItems.forEach(item => {
        if (item.productId === product.id) {
          exists = true;
          item.qty++; // Incrementa la cantidad si el producto ya existe en el carrito
        }
      });
      if (!exists) {
        const cartItem = new CartItem(product);
        this.cartItems.push(cartItem); // Agrega un nuevo producto al carrito
      }
      this.total = this.getTotal(); // Actualiza el total del carrito
      this.storageService.setCart(this.cartItems); // Guarda el carrito en el almacenamiento
    });
  }

  /**
   * Funcion que calcula el precio total de la compra
   * @autor Francisco Molina Rubio
   */
  getTotal(): number {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.qty * item.productPrice; // Calcula el total sumando los precios de los productos por sus cantidades
    });
    return +total.toFixed(2); // Retorna el total con dos decimales
  }

  /**
   * Funcion que vacía el carro de la compra
   * @autor Francisco Molina Rubio
   */
  emptyCart(): void {
    this.cartItems = []; // Vacía el arreglo de items del carrito
    this.total = 0; // Reinicia el total a 0
    this.storageService.clear(); // Limpia el almacenamiento
  }

  /**
   * Funcion que borra uno de los items del carro de la compra
   * @param Number Índice del elemento a eliminar
   * @autor Francisco Molina Rubio
   */
  deleteItem(i: number): void {
    this.cartItems.splice(i, 1); // Elimina el item en la posición 'i'
    this.storageService.setCart(this.cartItems); // Guarda el carrito actualizado en el almacenamiento
  }

  /**
   * Funcion que obtiene la lista de items para la configuración de PayPal
   * @autor Francisco Molina Rubio
   */
  getItemsList(): any[] {
    const items: any[] = [];
    let item = {};
    this.cartItems.forEach((it: CartItem) => {
      item = {
        name: it.productName,
        quantity: it.qty,
        unit_amount: { value: it.productPrice, currency_code: 'EUR' }
      };
      items.push(item); // Agrega cada item a la lista de items
    });
    return items; // Retorna la lista de items
  }


/**
 * Funcion que abre el modal que nos da la info de la compra realizada
 * @author Francisco Molina Rubio
 */
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

