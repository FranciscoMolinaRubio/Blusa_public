import { EventEmitter, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionesService {

  numeroArticulos: EventEmitter<number> = new EventEmitter<number>;

  private dataSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private dataSubject2: ReplaySubject<number> = new ReplaySubject<number>(1);

  setData(data: boolean): void {
    this.dataSubject.next(data);
  }

  getData$(): Observable<boolean> {
    return this.dataSubject.asObservable();
  }

  setData2(data: number): void {
    this.dataSubject2.next(data);
  }

  getData2$(): Observable<number> {
    return this.dataSubject2.asObservable();
  }

  constructor() {

  }



}

