import { Product } from "./product";

// Clase que define las propiedades de un elemento del carrito de compras
export class CartItem {

    productId: number; // ID del producto en el carrito
    productName: string; // Nombre del producto en el carrito
    productPrice: number; // Precio del producto en el carrito
    qty: number; // Cantidad del producto en el carrito

    /**
     * Constructor de la clase CartItem
     * @param product Producto asociado al elemento del carrito
     */
    constructor(product: Product) {
        this.productId = product.id; // Asigna el ID del producto
        this.productName = product.name; // Asigna el nombre del producto
        this.productPrice = product.price; // Asigna el precio del producto
        this.qty = 1; // Inicializa la cantidad del producto en 1 por defecto
    }
}