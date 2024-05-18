import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})

// Clase que define el componente para mostrar una galería de imágenes
export class GaleriaComponent {

  // Array que contiene las imágenes de la galería
  public imagenes: GridImg[] = [
    { src: "./assets/Photo/Rotary/140420_9007.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Rotary/162750_175923542437795_6709027_n.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Rotary/cover.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Rotary/supersonic2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/998810_732290090134468_204064815_n.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/1441183_732290000134477_435871895_n.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/1453228_732289473467863_1503658726_n.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/5.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/6.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/7.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Blusa/PORTADABandcamp.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Blusa/def1jpg.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Blusa/def2jpg.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Blusa/def3jpg.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/cartel  sin texto.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/_MG_7656-2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/1453457_732289980134479_271998652_n.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/1456712_732289850134492_898854363_n.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/1473031_732289540134523_1279522703_n.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/12496161_1237736712923134_8047654103565343448_o.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/BlusaFace1.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/Labrador_frame_2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/11.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/12.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/_MG_7461-2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/IMG_6943.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/P1116995 - 2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/Sin título - 3.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/Sin título-5.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/_MG_7444-2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/Portada.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/Promo2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/1.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/3.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/4.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/13.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/14.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/antonioproy.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/curroproy.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/teaser mandelbub.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/_MG_7427.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/_MG_7504.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/8.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/9.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/10.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/daniproy.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/piosound2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/_MG_7471-2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/K/salaxparamalandar.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Resonance/_MG_7585.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/_MG_6996.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/_MG_7375.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/1.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/Montebello.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/LOGOBLUSACAMISETA.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/interferencia2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/_MG_7526.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/3.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/4.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/piosound1.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/_MG_7612.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/trackbandcamp.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Breakbeat/Untitled-3.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/youtube.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/fotogramapromo2.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/ultima1.jpg", alt: 'Imagen 0' },
    { src: "./assets/Photo/Varios/ultima2.jpg", alt: 'Imagen 0' }
  ]

  public lightboxActive: boolean = false; // Variable para activar o desactivar la lightbox
  public mouseActive: boolean = false; // Variable para indicar si el mouse está activo en la lightbox
  public imgIndex: number = 0; // Índice de la imagen actualmente seleccionada en la lightbox

  /**
   * Función que maneja la activación de la lightbox cuando se hace clic en una imagen
   * @param index Índice de la imagen en la galería
   * @autor Francisco Molina Rubio
   */
  public manejador(index: number) {
    if (this.isMobile()) {
      this.lightboxActive = false; // Desactiva la lightbox en dispositivos móviles
    } else {
      this.lightboxActive = true; // Activa la lightbox en dispositivos de escritorio
      this.mouseActive = true; // Indica que el mouse está activo en la lightbox
      this.imgIndex = index; // Establece el índice de la imagen seleccionada
    }
  }

  /**
   * Función que cierra la lightbox cuando se hace clic en el botón de cerrar
   * @autor Francisco Molina Rubio
   */
  public manejadorbtn() {
    this.lightboxActive = false; // Desactiva la lightbox
    this.mouseActive = false; // Indica que el mouse ya no está activo en la lightbox
  }

  /**
   * Función que desplaza la vista hacia arriba hasta el elemento con el id 'bloque1'
   * @autor Francisco Molina Rubio
   */
  scrollup() {
    this.viewportScroller.scrollToAnchor('bloque1'); // Desplaza la vista hasta el elemento 'bloque1'
  }

  /**
   * Función que determina si el dispositivo es móvil en función del tamaño de la pantalla
   * @returns Verdadero si el dispositivo es móvil, falso en caso contrario
   * @autor Francisco Molina Rubio
   */
  isMobile(): boolean {
    // Define un umbral para considerar un dispositivo como móvil
    const mobileBreakpoint = 768; // Generalmente, cualquier cosa debajo de 768px es móvil
    return window.innerWidth <= mobileBreakpoint;
  }

  constructor(private viewportScroller: ViewportScroller) { }
}

// Interfaz para definir la estructura de los objetos de imágenes en la galería
interface GridImg {
  src: string,
  alt: string
}