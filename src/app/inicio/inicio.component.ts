import { ViewportScroller } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {


  scroll(){
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  constructor(private viewportScroller: ViewportScroller) {}

}


