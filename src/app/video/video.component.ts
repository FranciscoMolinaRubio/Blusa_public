import { Component, ElementRef } from '@angular/core';
import { Fancybox } from '@fancyapps/ui';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
    
}
