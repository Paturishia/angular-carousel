import { Component, OnInit, Input } from '@angular/core';

// import { Subject } from 'rxjs/Subject';

import { SlideService } from './slides/slide.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [SlideService]
})
export class CarouselComponent implements OnInit {
  @Input() config: { circular: boolean, interval: number, autoSlide: boolean };
  @Input() slideActive: number;
  // carouselConfig = new Subject();
  
  constructor(private slideService: SlideService) { }

  ngOnInit() {
    console.log('config >>>', this.config);
    this.slideService.slideActivated.subscribe(
      (index: number) => {
        this.slideActive = index;
      }
    );
    // this.slideService.setConfig(this.config);
    // this.carouselConfig.merge(this.config);
  }

}
