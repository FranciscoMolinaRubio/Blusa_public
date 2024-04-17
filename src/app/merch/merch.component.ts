import { Component} from '@angular/core';
import { ComunicacionesService } from '../servicios/comunicaciones.service';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrl: './merch.component.css'
})
export class MerchComponent {

 sumatorioArticulos = 0;
  sumatorio = 0;
  art1 = 0;
  art2 = 0;
  art3 = 0;
  art4 = 0;
  art5 = 0;
  art6 = 0;
  art7 = 0;
  art8 = 0;
  art9 = 0;
  art10 = 0;


  
  sumaArticulos(articulo: number) {
    switch (articulo) {
      case 1: this.art1 += 1;  this.sumatorioArticulos += 1; this.devuelvesumatorioArticulos();return this.art1;
      case 2: this.art1 += -1; if(this.art1>=0) this.sumatorioArticulos += -1; if (this.art1 < 0) this.art1 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0;this.devuelvesumatorioArticulos(); return this.art1;
      case 3: this.art2 += 1; this.sumatorioArticulos += 1;this.devuelvesumatorioArticulos(); return this.art2;
      case 4: this.art2 += -1;if(this.art2>=0) this.sumatorioArticulos += -1; if (this.art2 < 0) this.art2 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0; this.devuelvesumatorioArticulos();return this.art2;
      case 5: this.art3 += 1; this.sumatorioArticulos += 1;this.devuelvesumatorioArticulos(); return this.art3;
      case 6: this.art3 += -1;if(this.art3>=0) this.sumatorioArticulos += -1; if (this.art3 < 0) this.art3 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0; this.devuelvesumatorioArticulos();return this.art3;
      case 7: this.art4 += 1; this.sumatorioArticulos += 1; this.devuelvesumatorioArticulos();return this.art4;
      case 8: this.art4 += -1;if(this.art4>=0) this.sumatorioArticulos += -1; if (this.art4 < 0) this.art4 = 0; this.devuelvesumatorioArticulos();return this.art4;
      case 9: this.art5 += 1; this.sumatorioArticulos += 1; this.devuelvesumatorioArticulos();return this.art5;
      case 10: this.art5 += -1;if(this.art5>=0) this.sumatorioArticulos += -1; if (this.art5 < 0) this.art5 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0; this.devuelvesumatorioArticulos();return this.art5;
      case 11: this.art6 += 1; this.sumatorioArticulos += 1;this.devuelvesumatorioArticulos(); return this.art6;
      case 12: this.art6 += -1;if(this.art6>=0) this.sumatorioArticulos += -1; if (this.art6 < 0) this.art6 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0;this.devuelvesumatorioArticulos(); return this.art6;
      case 13: this.art7 += 1; this.sumatorioArticulos += 1;this.devuelvesumatorioArticulos(); return this.art7;
      case 14: this.art7 += -1;if(this.art7>=0) this.sumatorioArticulos += -1; if (this.art7 < 0) this.art7 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0;this.devuelvesumatorioArticulos(); return this.art7;
      case 15: this.art8 += 1; this.sumatorioArticulos += 1;this.devuelvesumatorioArticulos(); return this.art8;
      case 16: this.art8 += -1;if(this.art8>=0) this.sumatorioArticulos += -1; if (this.art8 < 0) this.art8 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0;this.devuelvesumatorioArticulos(); return this.art8;
      case 17: this.art9 += 1; this.sumatorioArticulos += 1;this.devuelvesumatorioArticulos(); return this.art9;
      case 18: this.art9 += -1;if(this.art9>=0) this.sumatorioArticulos += -1; if (this.art9 < 0) this.art9 = 0;this.devuelvesumatorioArticulos(); return this.art9;
      case 19: this.art10 += 1; this.sumatorioArticulos += 1;this.devuelvesumatorioArticulos(); return this.art10;
      case 20: this.art10 += -1; if(this.art10>=0)this.sumatorioArticulos += -1; if (this.art10 < 0) this.art10 = 0; if (this.sumatorioArticulos < 0) this.sumatorioArticulos = 0;this.devuelvesumatorioArticulos(); return this.art10;
      default: return 0;
        
    }
  

  }

  sumaTotal(precio: number) {
    this.sumatorio += precio;
    if (this.sumatorio < 0) this.sumatorio = 0;
    console.log(this.art1);
    console.log(this.sumatorio);
    return this.sumatorio;
  }

  devuelvesumatorioArticulos() {
    this.comunicacionesService.numeroArticulos.emit(this.sumatorioArticulos);
  }

  constructor(private comunicacionesService: ComunicacionesService) { };
}
