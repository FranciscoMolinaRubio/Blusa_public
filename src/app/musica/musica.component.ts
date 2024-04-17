import { ViewportScroller } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})

export class MusicaComponent implements OnInit {

  LP = "Blusa";
  cover = "./assets/Portadas/blusablusa.jpg";
  titulo = "Blusa";
  orden = "";
  donde = "./assets/musica/blusa/BLUSA_BLUSA.mp3";
  d = "";
  cancionesLista: any[] = [];
  audio = new Audio();
  ordenPlaylist: number = 20;
  rutaDeInicio: number = 0


  musicLength: string = '0:00';
  duration: number = 1;
  currentTime: string = '0:00';


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.pausesong();
    });


    this.rutaDeInicio = this.route.snapshot.params['id'];
    if (this.rutaDeInicio == 1) {
      this.llamada1();
    } else if (this.rutaDeInicio == 2) {
      this.llamada2();
    } else if (this.rutaDeInicio == 3) {
      this.llamada3();
    } else if (this.rutaDeInicio == 4) {
      this.llamada4();
    } else if (this.rutaDeInicio == 5) {
      this.llamada5();
    }
  }


  cancionesTodas = [
    { LP: "Resonance", titulo: "Resonance", orden: 0, d: "./assets/musica/resonance/01-Resonance.mp3", duracion:"04:14" },
    { LP: "Resonance", titulo: "Cutoff", orden: 1, d: "./assets/musica/resonance/02-Cutoff.mp3", duracion:"03:53" },
    { LP: "Resonance", titulo: "Boards", orden: 2, d: "./assets/musica/resonance/03-Boards.mp3", duracion:"04:03" },
    { LP: "Resonance", titulo: "#12", orden: 3, d: "./assets/musica/resonance/04-_12.mp3", duracion:"01:58" },
    { LP: "Resonance", titulo: "Dxologie", orden: 4, d: "./assets/musica/resonance/05-Dxologie.mp3", duracion: "03:15" },
    { LP: "Resonance", titulo: "Oblique", orden: 5, d: "./assets/musica/resonance/06-Oblique.mp3", duracion: "02:47" },
    { LP: "Resonance", titulo: "Vargtimmen", orden: 6, d: "./assets/musica/resonance/07-Vargtimmen.mp3", duracion: "03:30" },
    { LP: "Resonance", titulo: "Darkarp", orden: 7, d: "./assets/musica/resonance/08-Darkarp.mp3", duracion: "03:54" },
    { LP: "Resonance", titulo: "Edinburgh", orden: 8, d: "./assets/musica/resonance/09-Edinburgh.mp3", duracion:"03:53" },
    { LP: "Rotary", titulo: "Kiowa", orden: 9, d: "./assets/musica/rotary/Blusa - Rotary - 01 Kiowa.mp3", duracion:"04:37" },
    { LP: "Rotary", titulo: "Errehache", orden: 10, d: "./assets/musica/rotary/Blusa - Rotary - 02 Errehache.mp3", duracion:"05:00" },
    { LP: "Rotary", titulo: "Skirla", orden: 11, d: "./assets/musica/rotary/Blusa - Rotary - 03 Skirla.mp3", duracion:"05:20" },
    { LP: "Rotary", titulo: "Yukon", orden: 12, d: "./assets/musica/rotary/Blusa - Rotary - 04 Yukon.mp3", duracion:"05:24" },
    { LP: "Rotary", titulo: "Esqualo", orden: 13, d: "./assets/musica/rotary/Blusa - Rotary - 05 Esqualo.mp3", duracion: "06:00" },
    { LP: "Rotary", titulo: "Fin", orden: 14, d: "./assets/musica/rotary/Blusa - Rotary - 06 Fin.mp3", duracion:"03:42" },
    { LP: "K", titulo: "#2", orden: 15, d: "./assets/musica/k/1_2.mp3", duracion:"04:31" },
    { LP: "K", titulo: "#3+#1", orden: 16, d: "./assets/musica/k/2_3_1.mp3", duracion:"07:17" },
    { LP: "K", titulo: "#9", orden: 17, d: "./assets/musica/k/3_9.mp3", duracion:"04:21" },
    { LP: "K", titulo: "#7", orden: 18, d: "./assets/musica/k/4_7.mp3", duracion:"05:16" },
    { LP: "K", titulo: "#6", orden: 19, d: "./assets/musica/k/5_6.mp3", duracion: "03:03" },
    { LP: "K", titulo: "#4", orden: 20, d: "./assets/musica/k/6_4.mp3", duracion: "04:23" },
    { LP: "K", titulo: "#10+#11", orden: 21, d: "./assets/musica/k/7_10_11.mp3", duracion:"09:42" },
    { LP: "Toca", titulo: "Facenda", orden: 22, d: "./assets/musica/toca/01 Facenda_.mp3", duracion:"04:06" },
    { LP: "Toca", titulo: "Montebello", orden: 23, d: "./assets/musica/toca/02 Montebello_.mp3", duracion:"02:44" },
    { LP: "Toca", titulo: "Rajko", orden: 24, d: "./assets/musica/toca/03 Rajko_.mp3", duracion:"04:45" },
    { LP: "Toca", titulo: "Navajo", orden: 25, d: "./assets/musica/toca/04 Navajo_.mp3", duracion:"02:51" },
    { LP: "Toca", titulo: "Labrador", orden: 26, d: "./assets/musica/toca/05 Labrador_.mp3", duracion: "05:39" },
    { LP: "Toca", titulo: "Yatzuni", orden: 27, d: "./assets/musica/toca/06 Yatzuni_.mp3", duracion: "03:24" },
    { LP: "Toca", titulo: "Arcoflecha", orden: 28, d: "./assets/musica/toca/07 Arcoflecha_.mp3", duracion: "04:04" },
    { LP: "Toca", titulo: "Esqualo", orden: 29, d: "./assets/musica/toca/08 Esqualo_.mp3", duracion: "05:31" },
    { LP: "Toca", titulo: "Aruba", orden: 30, d: "./assets/musica/toca/09 Aruba_.mp3", duracion: "03:13" },
    { LP: "Toca", titulo: "Blowjob", orden: 31, d: "./assets/musica/toca/10 Blowjob_.mp3", duracion:"07:37" },
    { LP: "Blusa", titulo: "Blusa", orden: 32, d: "./assets/musica/blusa/BLUSA_BLUSA.mp3", duracion:"15:11" }
  ]

  backward() {

    this.pausesong();

    const ranges = [
      { start: 1, end: 9 },
      { start: 10, end: 15 },
      { start: 16, end: 22 },
      { start: 23, end: 32 }
    ];
  
    for (const range of ranges) {
      if (this.ordenPlaylist >= range.start && this.ordenPlaylist <= range.end) {
        this.ordenPlaylist -= 1;
        this.donde = this.cancionesTodas[this.ordenPlaylist].d;
        break; // Salir del bucle una vez que se encuentra el rango adecuado
      }
    }
    this.playsong();
  }

  forward() {

    this.pausesong();

    const ranges = [
      { start: 0, end: 8 },
      { start: 9, end: 14 },
      { start: 15, end: 21 },
      { start: 22, end: 31 }
    ];
  
    for (const range of ranges) {
      if (this.ordenPlaylist >= range.start && this.ordenPlaylist < range.end) {
        this.ordenPlaylist += 1;
        this.donde = this.cancionesTodas[this.ordenPlaylist].d;
        break; // Salir del bucle una vez que se encuentra el rango adecuado
      }
    }
    this.playsong();
  }

  llamada1() {

    this.pausesong();
    this.LP = "Rotary";
    this.cover = "./assets/Portadas/rotary.jpg";
    this.ordenPlaylist = 9;
    this.donde = this.cancionesTodas[9].d;
    this.cancionesLista = [{ LP: "Rotary", titulo: "Kiowa", orden: 9, d: "./assets/musica/rotary/Blusa - Rotary - 01 Kiowa.mp3", duracion:"04:37" },
    { LP: "Rotary", titulo: "Errehache", orden: 10, d: "./assets/musica/rotary/Blusa - Rotary - 02 Errehache.mp3", duracion:"05:00" },
    { LP: "Rotary", titulo: "Skirla", orden: 11, d: "./assets/musica/rotary/Blusa - Rotary - 03 Skirla.mp3", duracion:"05:20" },
    { LP: "Rotary", titulo: "Yukon", orden: 12, d: "./assets/musica/rotary/Blusa - Rotary - 04 Yukon.mp3", duracion:"05:24" },
    { LP: "Rotary", titulo: "Esqualo", orden: 13, d: "./assets/musica/rotary/Blusa - Rotary - 05 Esqualo.mp3", duracion: "06:00" },
    { LP: "Rotary", titulo: "Fin", orden: 14, d: "./assets/musica/rotary/Blusa - Rotary - 06 Fin.mp3", duracion:"03:42" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  llamada2() {

    this.pausesong();
    this.LP = "K";
    this.cover = "./assets/Portadas/k.jpg";
    this.ordenPlaylist = 15;
    this.donde = this.cancionesTodas[15].d;
    this.cancionesLista = [{ LP: "K", titulo: "#2", orden: 15, d: "./assets/musica/k/1_2.mp3", duracion:"04:31" },
    { LP: "K", titulo: "#3+#1", orden: 16, d: "./assets/musica/k/2_3_1.mp3", duracion:"07:17" },
    { LP: "K", titulo: "#9", orden: 17, d: "./assets/musica/k/3_9.mp3", duracion:"04:21" },
    { LP: "K", titulo: "#7", orden: 18, d: "./assets/musica/k/4_7.mp3", duracion:"05:16" },
    { LP: "K", titulo: "#6", orden: 19, d: "./assets/musica/k/5_6.mp3", duracion: "03:03" },
    { LP: "K", titulo: "#4", orden: 20, d: "./assets/musica/k/6_4.mp3", duracion: "04:23" },
    { LP: "K", titulo: "#10+#11", orden: 21, d: "./assets/musica/k/7_10_11.mp3", duracion:"09:42" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  llamada3() {

    this.pausesong();
    this.LP = "Toca Breakbeat, perro!";
    this.cover = "./assets/Portadas/tocabreakbeat.jpg";
    this.ordenPlaylist = 22;
    this.donde = this.cancionesTodas[22].d;
    this.cancionesLista = [{ LP: "Toca", titulo: "Facenda", orden: 22, d: "./assets/musica/toca/01 Facenda_.mp3", duracion:"04:06" },
    { LP: "Toca", titulo: "Montebello", orden: 23, d: "./assets/musica/toca/02 Montebello_.mp3", duracion:"02:44" },
    { LP: "Toca", titulo: "Rajko", orden: 24, d: "./assets/musica/toca/03 Rajko_.mp3", duracion:"04:45" },
    { LP: "Toca", titulo: "Navajo", orden: 25, d: "./assets/musica/toca/04 Navajo_.mp3", duracion:"02:51" },
    { LP: "Toca", titulo: "Labrador", orden: 26, d: "./assets/musica/toca/05 Labrador_.mp3", duracion: "05:39" },
    { LP: "Toca", titulo: "Yatzuni", orden: 27, d: "./assets/musica/toca/06 Yatzuni_.mp3", duracion: "03:24" },
    { LP: "Toca", titulo: "Arcoflecha", orden: 28, d: "./assets/musica/toca/07 Arcoflecha_.mp3", duracion: "04:04" },
    { LP: "Toca", titulo: "Esqualo", orden: 29, d: "./assets/musica/toca/08 Esqualo_.mp3", duracion: "05:31" },
    { LP: "Toca", titulo: "Aruba", orden: 30, d: "./assets/musica/toca/09 Aruba_.mp3", duracion: "03:13" },
    { LP: "Toca", titulo: "Blowjob", orden: 31, d: "./assets/musica/toca/10 Blowjob_.mp3", duracion:"07:37" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  llamada4() {

    this.pausesong();
    this.LP = "Resonance";
    this.cover = "./assets/Portadas/resonance.jpg";
    this.ordenPlaylist = 0;
    this.donde = this.cancionesTodas[0].d;
    this.cancionesLista = [ { LP: "Resonance", titulo: "Resonance", orden: 0, d: "./assets/musica/resonance/01-Resonance.mp3", duracion:"04:14" },
    { LP: "Resonance", titulo: "Cutoff", orden: 1, d: "./assets/musica/resonance/02-Cutoff.mp3", duracion:"03:53" },
    { LP: "Resonance", titulo: "Boards", orden: 2, d: "./assets/musica/resonance/03-Boards.mp3", duracion:"04:03" },
    { LP: "Resonance", titulo: "#12", orden: 3, d: "./assets/musica/resonance/04-_12.mp3", duracion:"01:58" },
    { LP: "Resonance", titulo: "Dxologie", orden: 4, d: "./assets/musica/resonance/05-Dxologie.mp3", duracion: "03:15" },
    { LP: "Resonance", titulo: "Oblique", orden: 5, d: "./assets/musica/resonance/06-Oblique.mp3", duracion: "02:47" },
    { LP: "Resonance", titulo: "Vargtimmen", orden: 6, d: "./assets/musica/resonance/07-Vargtimmen.mp3", duracion: "03:30" },
    { LP: "Resonance", titulo: "Darkarp", orden: 7, d: "./assets/musica/resonance/08-Darkarp.mp3", duracion: "03:54" },
    { LP: "Resonance", titulo: "Edinburgh", orden: 8, d: "./assets/musica/resonance/09-Edinburgh.mp3", duracion:"03:53" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  llamada5() {

    this.pausesong();
    this.LP = "Blusa";
    this.cover = "./assets/Portadas/blusablusa.jpg";
    this.ordenPlaylist = 32;
    this.donde = this.cancionesTodas[32].d;
    this.cancionesLista = [{ LP: "Blusa", titulo: "Blusa", orden: 1, d: "./assets/musica/blusa/BLUSA_BLUSA.mp3", duracion:"15:11" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  playsong(): void {
    this.audio.src = this.donde;
    this.audio.play();
  }

  pausesong(): void {

    this.audio.pause();
  }

  playdelalista(a: number): void {
    this.donde = this.cancionesTodas[a].d;
    this.audio.src = this.donde;
    this.ordenPlaylist = a;
    this.audio.play();
    console.log(a);
  }

  scrollup() {
    this.viewportScroller.scrollToAnchor('bloque1');
  }

  constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute, private router: Router) {


    this.audio.ondurationchange = () => {
      const totalSeconds = Math.floor(this.audio.duration),
        duration = moment.duration(totalSeconds, 'seconds');
      this.musicLength = duration.seconds() < 10 ?
        `${Math.floor(duration.asMinutes())}:
                                    0${duration.seconds()}` :
        `${Math.floor(duration.asMinutes())}:
                                    ${duration.seconds()}`;
      this.duration = totalSeconds;
    }

    this.audio.ontimeupdate = () => {
      const duration = moment.duration(
        Math.floor(this.audio.currentTime), 'seconds');
      this.currentTime = duration.seconds() < 10 ? 
                         `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` : 
                         `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
    }

  }

  durationSlider(event: any) {
    this.audio.currentTime = event.target.value;
  }

}