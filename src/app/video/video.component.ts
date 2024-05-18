import { Component, ElementRef } from '@angular/core';
import { Fancybox } from '@fancyapps/ui';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

  constructor(private elRef: ElementRef) { }

  /**
   * Método que se ejecuta después de que Angular inicializa el componente.
   * Configura el plugin Fancybox para mostrar videos en un modal.
   * @description Esta función inicializa el plugin Fancybox para las etiquetas '[data-fancybox]' dentro del elemento del componente actual.
   * @note Se utiliza ElementRef para acceder al elemento del DOM asociado al componente.
   * @author Francisco Molina Rubio
   */
  ngOnInit() {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
      // Aquí pueden ir opciones de configuración del plugin Fancybox
    });
  }

  /**
   * Método que se ejecuta cuando el componente es destruido.
   * Desvincula el plugin Fancybox y cierra cualquier instancia abierta.
   * @description Esta función se encarga de limpiar cualquier instancia abierta de Fancybox y desvincular el plugin del elemento del DOM asociado al componente antes de que el componente sea destruido.
   * @note Se utiliza ElementRef para acceder al elemento del DOM asociado al componente.
   */
  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
