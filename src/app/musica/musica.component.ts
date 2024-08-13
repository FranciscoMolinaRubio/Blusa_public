import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment'; // Importa la biblioteca moment para trabajar con fechas y horas
import { filter } from 'rxjs'; // Importa el operador filter de RxJS


@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})

export class MusicaComponent implements OnInit {

  //Declaramos las propiedades de la clase
  LP = "Blusa";
  cover = "./assets/Portadas/blusablusa.jpg";
  titulo = "Blusa";
  orden = "";
  donde = "./assets/musica/blusa/BLUSA_BLUSA.mp3";
  d = "";
  cancionesLista: any[] = [];
  audio = new Audio();
  ordenPlaylist: number = 32;
  rutaDeInicio: number = 0
  musicLength: string = '0:00';
  duration: number = 1;
  currentTime: string = '0:00';
  cancionesTodas = [
    { LP: "Resonance", titulo: "Resonance", orden: 0, d: "./assets/musica/resonance/01-Resonance.mp3", duracion: "04:14" },
    { LP: "Resonance", titulo: "Cutoff", orden: 1, d: "./assets/musica/resonance/02-Cutoff.mp3", duracion: "03:53" },
    { LP: "Resonance", titulo: "Boards", orden: 2, d: "./assets/musica/resonance/03-Boards.mp3", duracion: "04:03" },
    { LP: "Resonance", titulo: "#12", orden: 3, d: "./assets/musica/resonance/04-_12.mp3", duracion: "01:58" },
    { LP: "Resonance", titulo: "Dxologie", orden: 4, d: "./assets/musica/resonance/05-Dxologie.mp3", duracion: "03:15" },
    { LP: "Resonance", titulo: "Oblique", orden: 5, d: "./assets/musica/resonance/06-Oblique.mp3", duracion: "02:47" },
    { LP: "Resonance", titulo: "Vargtimmen", orden: 6, d: "./assets/musica/resonance/07-Vargtimmen.mp3", duracion: "03:30" },
    { LP: "Resonance", titulo: "Darkarp", orden: 7, d: "./assets/musica/resonance/08-Darkarp.mp3", duracion: "03:54" },
    { LP: "Resonance", titulo: "Edinburgh", orden: 8, d: "./assets/musica/resonance/09-Edinburgh.mp3", duracion: "03:53" },
    { LP: "Rotary", titulo: "Kiowa", orden: 9, d: "./assets/musica/rotary/Blusa - Rotary - 01 Kiowa.mp3", duracion: "04:37" },
    { LP: "Rotary", titulo: "Errehache", orden: 10, d: "./assets/musica/rotary/Blusa - Rotary - 02 Errehache.mp3", duracion: "05:00" },
    { LP: "Rotary", titulo: "Skirla", orden: 11, d: "./assets/musica/rotary/Blusa - Rotary - 03 Skirla.mp3", duracion: "05:20" },
    { LP: "Rotary", titulo: "Yukon", orden: 12, d: "./assets/musica/rotary/Blusa - Rotary - 04 Yukon.mp3", duracion: "05:24" },
    { LP: "Rotary", titulo: "Esqualo", orden: 13, d: "./assets/musica/rotary/Blusa - Rotary - 05 Esqualo.mp3", duracion: "06:00" },
    { LP: "Rotary", titulo: "Fin", orden: 14, d: "./assets/musica/rotary/Blusa - Rotary - 06 Fin.mp3", duracion: "03:42" },
    { LP: "K", titulo: "#2", orden: 15, d: "./assets/musica/k/1_2.mp3", duracion: "04:31" },
    { LP: "K", titulo: "#3+#1", orden: 16, d: "./assets/musica/k/2_3_1.mp3", duracion: "07:17" },
    { LP: "K", titulo: "#9", orden: 17, d: "./assets/musica/k/3_9.mp3", duracion: "04:21" },
    { LP: "K", titulo: "#7", orden: 18, d: "./assets/musica/k/4_7.mp3", duracion: "05:16" },
    { LP: "K", titulo: "#6", orden: 19, d: "./assets/musica/k/5_6.mp3", duracion: "03:03" },
    { LP: "K", titulo: "#4", orden: 20, d: "./assets/musica/k/6_4.mp3", duracion: "04:23" },
    { LP: "K", titulo: "#10+#11", orden: 21, d: "./assets/musica/k/7_10_11.mp3", duracion: "09:42" },
    { LP: "Toca", titulo: "Facenda", orden: 22, d: "./assets/musica/toca/01 Facenda_.mp3", duracion: "04:06" },
    { LP: "Toca", titulo: "Montebello", orden: 23, d: "./assets/musica/toca/02 Montebello_.mp3", duracion: "02:44" },
    { LP: "Toca", titulo: "Rajko", orden: 24, d: "./assets/musica/toca/03 Rajko_.mp3", duracion: "04:45" },
    { LP: "Toca", titulo: "Navajo", orden: 25, d: "./assets/musica/toca/04 Navajo_.mp3", duracion: "02:51" },
    { LP: "Toca", titulo: "Labrador", orden: 26, d: "./assets/musica/toca/05 Labrador_.mp3", duracion: "05:39" },
    { LP: "Toca", titulo: "Yatzuni", orden: 27, d: "./assets/musica/toca/06 Yatzuni_.mp3", duracion: "03:24" },
    { LP: "Toca", titulo: "Arcoflecha", orden: 28, d: "./assets/musica/toca/07 Arcoflecha_.mp3", duracion: "04:04" },
    { LP: "Toca", titulo: "Esqualo", orden: 29, d: "./assets/musica/toca/08 Esqualo_.mp3", duracion: "05:31" },
    { LP: "Toca", titulo: "Aruba", orden: 30, d: "./assets/musica/toca/09 Aruba_.mp3", duracion: "03:13" },
    { LP: "Toca", titulo: "Blowjob", orden: 31, d: "./assets/musica/toca/10 Blowjob_.mp3", duracion: "07:37" },
    { LP: "Blusa", titulo: "Blusa", orden: 32, d: "./assets/musica/blusa/BLUSA_BLUSA.mp3", duracion: "15:11" },
    { LP: "Hijos de puta, gritó", titulo: "Heladísima", orden: 33, d: "./assets/musica/hijo/01 Heladisima.mp3", duracion: "05:10" },
    { LP: "Hijos de puta, gritó", titulo: "Semiologías", orden: 34, d: "./assets/musica/hijo/02 Semiologias.mp3", duracion: "04:05" },
    { LP: "Hijos de puta, gritó", titulo: "Bienvenida", orden: 35, d: "./assets/musica/hijo/03 Bienvenida.mp3", duracion: "08:34" },
    { LP: "Hijos de puta, gritó", titulo: "Trumpets & Sex", orden: 36, d: "./assets/musica/hijo/04 Trumpets & Sex.mp3", duracion: "06:54" },
    { LP: "Hijos de puta, gritó", titulo: "Skirla", orden: 37, d: "./assets/musica/hijo/05 Skirla.mp3", duracion: "05:10" },
    { LP: "Hijos de puta, gritó", titulo: "Laura", orden: 38, d: "./assets/musica/hijo/06 Laura.mp3", duracion: "04:54" },
    { LP: "Hijos de puta, gritó", titulo: "Tranquile", orden: 39, d: "./assets/musica/hijo/06 Laura.mp3", duracion: "01:10" },
    { LP: "Annual for boys 1954", titulo: "Child", orden: 40, d: "./assets/musica/annual/1.mp3", duracion: "05:39" },
    { LP: "Annual for boys 1954", titulo: "A Morning With Henry", orden: 41, d: "./assets/musica/annual/2.mp3", duracion: "03:36" },
    { LP: "Annual for boys 1954", titulo: "Alone Chameleon", orden: 42, d: "./assets/musica/annual/3.mp3", duracion: "03:48" },
    { LP: "Annual for boys 1954", titulo: "Green Friend", orden: 43, d: "./assets/musica/annual/4.mp3", duracion: "04:53" },
    { LP: "Annual for boys 1954", titulo: "Ship", orden: 44, d: "./assets/musica/annual/5.mp3", duracion: "03:29" },
    { LP: "Annual for boys 1954", titulo: "Two Ordinary Nights", orden: 45, d: "./assets/musica/annual/6.mp3", duracion: "03:50" },
    { LP: "Annual for boys 1954", titulo: "Promenade", orden: 46, d: "./assets/musica/annual/7.mp3", duracion: "03:05" },
    { LP: "Annual for boys 1954", titulo: "Green Song", orden: 47, d: "./assets/musica/annual/9.mp3", duracion: "03:53" },
    { LP: "Annual for boys 1954", titulo: "Some Music", orden: 48, d: "./assets/musica/annual/10.mp3", duracion: "04:02" },
    { LP: "Annual for boys 1954", titulo: "Henry Talks: Are We Going?", orden: 49, d: "./assets/musica/annual/11.mp3", duracion: "05:23" }

  ]


  constructor(
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute,
    private router: Router) {
    // Configura el evento para detectar el cambio de duración del audio
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
    // Configura el evento para actualizar el tiempo actual del audio
    this.audio.ontimeupdate = () => {
      const duration = moment.duration(
        Math.floor(this.audio.currentTime), 'seconds');
      this.currentTime = duration.seconds() < 10 ?
        `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` :
        `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
    }

    //Listener que detecta el final del audio y llama a la función playnext()
    this.audio.addEventListener('ended', this.playNext.bind(this));
  }

  /**
   * Función que carga todo lo necesario al iniciar la página
   * @author Francisco Molina Rubio
   */
  ngOnInit(): void {
    // Escucha los eventos de navegación y pausa la canción al cambiar de página
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.pausesong();
    });
    // Obtener el parámetro 'id' de la ruta actual
    this.rutaDeInicio = this.route.snapshot.params['id'];

    // Llama a diferentes funciones dependiendo del valor del parámetro 'id'
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
    } else if (this.rutaDeInicio == 6) {
      this.llamada6();
    } else if (this.rutaDeInicio == 7) {
      this.llamada7();
    }
    this.audio.ondurationchange = () => {
      const totalSeconds = Math.floor(this.audio.duration);
      this.duration = totalSeconds;
      const duration = moment.duration(totalSeconds, 'seconds');

      this.musicLength = this.formatTime(duration);
    };
    // Configurar el evento para actualizar el tiempo actual del audio
    this.audio.ontimeupdate = () => {
      const currentSeconds = Math.floor(this.audio.currentTime);
      const duration = moment.duration(currentSeconds, 'seconds');

      this.currentTime = this.formatTime(duration);
    };
  }

  /** 
  * Función llamada desde el ngOnInit que formatea la duración
  * de la canción en minutos y segundos
  * @author Francisco Molina
  * */
  formatTime(duration: moment.Duration): string {
    const minutes = Math.floor(duration.asMinutes());
    const seconds = duration.seconds();
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  /**
   * Función para ajustar el tiempo según la posición del clic
   * @param Event Evento de pulsación del ratón
   * @author Francisco Molina Rubio
   */
  onSeek(event: MouseEvent) {
    const seekbar = event.target as HTMLProgressElement;
    const clickX = event.offsetX; // Obtener la posición del clic
    const seekbarWidth = seekbar.clientWidth; // Obtener el ancho total de la barra
    const newTime = (clickX / seekbarWidth) * this.duration; // Calcular el nuevo tiempo
    this.audio.currentTime = newTime; // Ajustar el tiempo del audio
  }

  /**
   * Función que retrocede una canción en la lista de reproducción y hace comenzar el audio
   * @author Francisco Molina Rubio
   */
  backward() {
    this.pausesong(); // Detener la reproducción antes de retroceder
    console.log(this.ordenPlaylist); // Registrar el valor actual de `ordenPlaylist`
    // Definir los rangos como pares [start, end]
    const ranges: [number, number][] = [
      [0, 8],
      [9, 14],
      [15, 21],
      [22, 31],
      [33, 39],
      [40, 49]
    ];
    // Identificar el rango en el que se encuentra `ordenPlaylist`
    const currentRange = ranges.find(
      ([start, end]) => this.ordenPlaylist >= start && this.ordenPlaylist <= end
    );
    // Retroceder solo si está dentro de un rango y no en el inicio del mismo
    if (currentRange && this.ordenPlaylist > currentRange[0]) {
      this.ordenPlaylist -= 1; // Retroceder un paso
    }
    // Actualizar la posición de reproducción
    this.donde = this.cancionesTodas[this.ordenPlaylist].d;
    this.playsong(); // Reanudar la reproducción
  }

  /**
   * Función que avanza la canción en la lista de reproducción y hace comenzar el audio
   * @author Francisco Molina Rubio
   */
  forward() {

    this.pausesong();

    const ranges = [
      { start: 0, end: 8 },
      { start: 9, end: 14 },
      { start: 15, end: 21 },
      { start: 22, end: 31 },
      { start: 33, end: 39 },
      { start: 40, end: 49}
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

  /**
   * Función que setea los elementos en el reproductor para el LP con id 1 
   * @author Francisco Molina Rubio
   */
  llamada1() {

    this.pausesong();
    this.LP = "Rotary";
    this.cover = "./assets/Portadas/rotary.jpg";
    this.ordenPlaylist = 9;
    this.donde = this.cancionesTodas[9].d;
    this.cancionesLista = [{ LP: "Rotary", titulo: "Kiowa", orden: 9, d: "./assets/musica/rotary/Blusa - Rotary - 01 Kiowa.mp3", duracion: "04:37" },
    { LP: "Rotary", titulo: "Errehache", orden: 10, d: "./assets/musica/rotary/Blusa - Rotary - 02 Errehache.mp3", duracion: "05:00" },
    { LP: "Rotary", titulo: "Skirla", orden: 11, d: "./assets/musica/rotary/Blusa - Rotary - 03 Skirla.mp3", duracion: "05:20" },
    { LP: "Rotary", titulo: "Yukon", orden: 12, d: "./assets/musica/rotary/Blusa - Rotary - 04 Yukon.mp3", duracion: "05:24" },
    { LP: "Rotary", titulo: "Esqualo", orden: 13, d: "./assets/musica/rotary/Blusa - Rotary - 05 Esqualo.mp3", duracion: "06:00" },
    { LP: "Rotary", titulo: "Fin", orden: 14, d: "./assets/musica/rotary/Blusa - Rotary - 06 Fin.mp3", duracion: "03:42" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  /**
   * Función que setea los elementos en el reproductor para el LP con id 2 
   * @author Francisco Molina Rubio
   */
  llamada2() {

    this.pausesong();
    this.LP = "K";
    this.cover = "./assets/Portadas/k.jpg";
    this.ordenPlaylist = 15;
    this.donde = this.cancionesTodas[15].d;
    this.cancionesLista = [{ LP: "K", titulo: "#2", orden: 15, d: "./assets/musica/k/1_2.mp3", duracion: "04:31" },
    { LP: "K", titulo: "#3+#1", orden: 16, d: "./assets/musica/k/2_3_1.mp3", duracion: "07:17" },
    { LP: "K", titulo: "#9", orden: 17, d: "./assets/musica/k/3_9.mp3", duracion: "04:21" },
    { LP: "K", titulo: "#7", orden: 18, d: "./assets/musica/k/4_7.mp3", duracion: "05:16" },
    { LP: "K", titulo: "#6", orden: 19, d: "./assets/musica/k/5_6.mp3", duracion: "03:03" },
    { LP: "K", titulo: "#4", orden: 20, d: "./assets/musica/k/6_4.mp3", duracion: "04:23" },
    { LP: "K", titulo: "#10+#11", orden: 21, d: "./assets/musica/k/7_10_11.mp3", duracion: "09:42" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  /**
   * Función que setea los elementos en el reproductor para el LP con id 3
   * @author Francisco Molina Rubio
   */
  llamada3() {

    this.pausesong();
    this.LP = "Toca Breakbeat, perro!";
    this.cover = "./assets/Portadas/tocabreakbeat.jpg";
    this.ordenPlaylist = 22;
    this.donde = this.cancionesTodas[22].d;
    this.cancionesLista = [{ LP: "Toca", titulo: "Facenda", orden: 22, d: "./assets/musica/toca/01 Facenda_.mp3", duracion: "04:06" },
    { LP: "Toca", titulo: "Montebello", orden: 23, d: "./assets/musica/toca/02 Montebello_.mp3", duracion: "02:44" },
    { LP: "Toca", titulo: "Rajko", orden: 24, d: "./assets/musica/toca/03 Rajko_.mp3", duracion: "04:45" },
    { LP: "Toca", titulo: "Navajo", orden: 25, d: "./assets/musica/toca/04 Navajo_.mp3", duracion: "02:51" },
    { LP: "Toca", titulo: "Labrador", orden: 26, d: "./assets/musica/toca/05 Labrador_.mp3", duracion: "05:39" },
    { LP: "Toca", titulo: "Yatzuni", orden: 27, d: "./assets/musica/toca/06 Yatzuni_.mp3", duracion: "03:24" },
    { LP: "Toca", titulo: "Arcoflecha", orden: 28, d: "./assets/musica/toca/07 Arcoflecha_.mp3", duracion: "04:04" },
    { LP: "Toca", titulo: "Esqualo", orden: 29, d: "./assets/musica/toca/08 Esqualo_.mp3", duracion: "05:31" },
    { LP: "Toca", titulo: "Aruba", orden: 30, d: "./assets/musica/toca/09 Aruba_.mp3", duracion: "03:13" },
    { LP: "Toca", titulo: "Blowjob", orden: 31, d: "./assets/musica/toca/10 Blowjob_.mp3", duracion: "07:37" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  /**
   * Función que setea los elementos en el reproductor para el LP con id 4
   * @author Francisco Molina Rubio
   */
  llamada4() {

    this.pausesong();
    this.LP = "Resonance";
    this.cover = "./assets/Portadas/resonance.jpg";
    this.ordenPlaylist = 0;
    this.donde = this.cancionesTodas[0].d;
    this.cancionesLista = [{ LP: "Resonance", titulo: "Resonance", orden: 0, d: "./assets/musica/resonance/01-Resonance.mp3", duracion: "04:14" },
    { LP: "Resonance", titulo: "Cutoff", orden: 1, d: "./assets/musica/resonance/02-Cutoff.mp3", duracion: "03:53" },
    { LP: "Resonance", titulo: "Boards", orden: 2, d: "./assets/musica/resonance/03-Boards.mp3", duracion: "04:03" },
    { LP: "Resonance", titulo: "#12", orden: 3, d: "./assets/musica/resonance/04-_12.mp3", duracion: "01:58" },
    { LP: "Resonance", titulo: "Dxologie", orden: 4, d: "./assets/musica/resonance/05-Dxologie.mp3", duracion: "03:15" },
    { LP: "Resonance", titulo: "Oblique", orden: 5, d: "./assets/musica/resonance/06-Oblique.mp3", duracion: "02:47" },
    { LP: "Resonance", titulo: "Vargtimmen", orden: 6, d: "./assets/musica/resonance/07-Vargtimmen.mp3", duracion: "03:30" },
    { LP: "Resonance", titulo: "Darkarp", orden: 7, d: "./assets/musica/resonance/08-Darkarp.mp3", duracion: "03:54" },
    { LP: "Resonance", titulo: "Edinburgh", orden: 8, d: "./assets/musica/resonance/09-Edinburgh.mp3", duracion: "03:53" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  /**
   * Función que setea los elementos en el reproductor para el LP con id 5
   * @author Francisco Molina Rubio
   */
  llamada5() {

    this.pausesong();
    this.LP = "Blusa";
    this.cover = "./assets/Portadas/blusablusa.jpg";
    this.ordenPlaylist = 32;
    this.donde = this.cancionesTodas[32].d;
    this.cancionesLista = [];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  /**
   * Función que setea los elementos en el reproductor para el LP con id 5
   * @author Francisco Molina Rubio
   */
  llamada6() {

    this.pausesong();
    this.LP = "¡Hijos de puta!, gritó";
    this.cover = "./assets/Portadas/hijo.jpg";
    this.ordenPlaylist = 33;
    this.donde = this.cancionesTodas[33].d;
    this.cancionesLista = [
    { LP: "Hijos de puta, gritó", titulo: "Heladísima", orden: 33, d: "./assets/musica/hijo/01 Heladisima.mp3", duracion: "05:10" },
    { LP: "Hijos de puta, gritó", titulo: "Semiologías", orden: 34, d: "./assets/musica/hijo/02 Semiologias.mp3", duracion: "04:05" },
    { LP: "Hijos de puta, gritó", titulo: "Bienvenida", orden: 35, d: "./assets/musica/hijo/03 Bienvenida.mp3", duracion: "08:34" },
    { LP: "Hijos de puta, gritó", titulo: "Trumpets & Sex", orden: 36, d: "./assets/musica/hijo/04 Trumpets & Sex.mp3", duracion: "06:54" },
    { LP: "Hijos de puta, gritó", titulo: "Skirla", orden: 37, d: "./assets/musica/hijo/05 Skirla.mp3", duracion: "05:10" },
    { LP: "Hijos de puta, gritó", titulo: "Laura", orden: 38, d: "./assets/musica/hijo/06 Laura.mp3", duracion: "04:54" },
    { LP: "Hijos de puta, gritó", titulo: "Tranquile", orden: 39, d: "./assets/musica/hijo/06 Laura.mp3", duracion: "01:10" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  /**
   * Función que setea los elementos en el reproductor para el LP con id 5
   * @author Francisco Molina Rubio
   */
  llamada7() {

    this.pausesong();
    this.LP = "Annual for boys 1954";
    this.cover = "./assets/Portadas/annual.jpg";
    this.ordenPlaylist = 40;
    this.donde = this.cancionesTodas[40].d;
    this.cancionesLista = [
    { LP: "Annual for boys 1954", titulo: "Child", orden: 40, d: "./assets/musica/annual/1.mp3", duracion: "05:39" },
    { LP: "Annual for boys 1954", titulo: "A Morning With Henry", orden: 41, d: "./assets/musica/annual/2.mp3", duracion: "03:36" },
    { LP: "Annual for boys 1954", titulo: "Alone Chameleon", orden: 42, d: "./assets/musica/annual/3.mp3", duracion: "03:48" },
    { LP: "Annual for boys 1954", titulo: "Green Friend", orden: 43, d: "./assets/musica/annual/4.mp3", duracion: "04:53" },
    { LP: "Annual for boys 1954", titulo: "Ship", orden: 44, d: "./assets/musica/annual/5.mp3", duracion: "03:29" },
    { LP: "Annual for boys 1954", titulo: "Two Ordinary Nights", orden: 45, d: "./assets/musica/annual/6.mp3", duracion: "03:50" },
    { LP: "Annual for boys 1954", titulo: "Promenade", orden: 46, d: "./assets/musica/annual/7.mp3", duracion: "03:05" },
    { LP: "Annual for boys 1954", titulo: "Green Song", orden: 47, d: "./assets/musica/annual/9.mp3", duracion: "03:53" },
    { LP: "Annual for boys 1954", titulo: "Some Music", orden: 48, d: "./assets/musica/annual/10.mp3", duracion: "04:02" },
    { LP: "Annual for boys 1954", titulo: "Henry Talks: Are We Going?", orden: 49, d: "./assets/musica/annual/11.mp3", duracion: "05:23" }];
    this.viewportScroller.scrollToAnchor('bloque2');
  }

  /**
  * Función que se activa desde un addeventlistener que se encuentra 
  * en el constructor y que detecta que la canción en curso ha acabado.
  * Esta función llama a playsong() pasándole el destino de la siguiente.
  * @author Francisco Molina Rubio
  * */
  playNext() {
    //Guardamos el valor del nombre del LP actual
    let nombreLP = this.cancionesTodas[this.ordenPlaylist].LP;
    // Incrementar el índice de la canción actual
    this.ordenPlaylist++;
    this.donde = this.cancionesTodas[this.ordenPlaylist].d;
    //Guardamos el valor del nombre del LP una vez incrementado ordenPLaylist
    let nombreLP2 = this.cancionesTodas[this.ordenPlaylist].LP;
    //Comprobamos que los nombres de los LP coincidan, si es así, play
    if (nombreLP == nombreLP2) {
      this.playsong(); // Reproduce la nueva canción
      //Si no, pausamos la canción y decrementamos el valor del ordenPlaylist para que permanezca en el mismo LP
    } else {
      this.pausesong();
      this.ordenPlaylist--;
    }
  }

  /**
   * Función que hace comenzar el audio
   * @author Francisco Molina Rubio
   */
  playsong(): void {
    this.audio.src = this.donde;
    this.audio.play();
  }

  /**
   * Función que pausa el audio
   * @author Francisco Molina Rubio
   */
  pausesong(): void {
    this.audio.pause();
  }

  /**
  * Función llamada desde el HTML y que es la que le da 
  * funcionalidad al play de la vista lista de reproducción
  * @author Francisco Molina Rubio
  * */
  playdelalista(a: number): void {
    this.donde = this.cancionesTodas[a].d;
    this.audio.src = this.donde;
    this.ordenPlaylist = a;
    this.audio.play();
    console.log(a);
  }

  /**
   * Función que desplaza la página hasta la parte superior
   * @author Francisco Molina Rubio
   */
  scrollup() {
    this.viewportScroller.scrollToAnchor('bloque1');
  }
}