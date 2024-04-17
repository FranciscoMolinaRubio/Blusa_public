import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionesService {

  numeroArticulos: EventEmitter<number> = new EventEmitter<number>;

  constructor() { }
}
