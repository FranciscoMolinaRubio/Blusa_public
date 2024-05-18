import { EventEmitter, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionesService {

  // EventEmitter para emitir el número de artículos
  numeroArticulos: EventEmitter<number> = new EventEmitter<number>();

  // ReplaySubjects para transmitir datos entre componentes
  private dataSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private dataSubject2: ReplaySubject<number> = new ReplaySubject<number>(1);

  /**
   * Establece un valor booleano en el ReplaySubject 1
   * @param data El dato booleano que se va a establecer
   * @description Esta función establece un valor booleano en el primer ReplaySubject para ser observado por otros componentes
   * @author Francisco Molina Rubio
   */
  setData(data: boolean): void {
    this.dataSubject.next(data);
  }

  /**
   * Obtiene un Observable del ReplaySubject 1
   * @returns Observable<boolean> Un Observable que emite valores booleanos
   * @description Esta función devuelve un Observable del primer ReplaySubject para que otros componentes puedan suscribirse y recibir actualizaciones de datos booleanos en tiempo real. 
   * @note Se utiliza ReplaySubject para que los nuevos suscriptores reciban el último valor emitido incluso si se suscriben después de que se haya emitido el valor.
   * @author Francisco Molina Rubio
   */
  getData$(): Observable<boolean> {
    return this.dataSubject.asObservable();
  }

  /**
   * Establece un valor numérico en el ReplaySubject 2
   * @param data El dato numérico que se va a establecer
   * @description Esta función establece un valor numérico en el segundo ReplaySubject para ser observado por otros componentes
   * @author Francisco Molina Rubio
   */
  setData2(data: number): void {
    this.dataSubject2.next(data);
  }

  /**
   * Obtiene un Observable del ReplaySubject 2
   * @returns Observable<number> Un Observable que emite valores numéricos
   * @description Esta función devuelve un Observable del segundo ReplaySubject para que otros componentes puedan suscribirse y recibir actualizaciones de datos numéricos en tiempo real. 
   * @note Se utiliza ReplaySubject para que los nuevos suscriptores reciban el último valor emitido incluso si se suscriben después de que se haya emitido el valor.
   * @author Francisco Molina Rubio
   */
  getData2$(): Observable<number> {
    return this.dataSubject2.asObservable();
  }

  constructor() {}
}
