// Clase que define las propiedades de un producto
export class Product {

    id: number; // ID del producto
    name: string; // Nombre del producto
    description: string; // Descripción del producto
    price: number; // Precio del producto
    imageUrl: string; // URL de la imagen del producto

    /**
     * Constructor de la clase Product
     * @param id Identificador del producto
     * @param name Nombre del producto
     * @param description Descripción del producto
     * @param price Precio del producto
     * @param imageUrl URL de la imagen del producto
     */
    constructor(id: number, name: string, description: string, price: number, imageUrl: string) {
        this.id = id; // Asigna el ID del producto
        this.name = name; // Asigna el nombre del producto
        this.description = description; // Asigna la descripción del producto
        this.price = price; // Asigna el precio del producto
        this.imageUrl = imageUrl; // Asigna la URL de la imagen del producto
    }
}