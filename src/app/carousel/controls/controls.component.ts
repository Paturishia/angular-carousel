import { Component, OnInit } from '@angular/core';

import{ SlideService } from '../slides/slide.service';
import{ CarouselConfigService } from '../carousel-config.service';

import { Slide } from '../slides/slide.model';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  slideNext: Slide;
  slidePrev: Slide;
  slideActive: number;
  controlsThumbs: boolean = this.carouselConfigService.config.getValue().controlsThumbs;

  constructor(private slideService: SlideService, private carouselConfigService: CarouselConfigService) { }

  ngOnInit() {
    this.carouselConfigService.config.subscribe(
      (config: any) => this.controlsThumbs = config.controlsThumbs
    );

    this.slideService.slides
      .subscribe(
        (slides: Slide[]) => {
          // console.log('SUBSCRIBE - Slides >>>', slides);
          const indexPrev = this.slideService.getIndex('prev');
          const indexNext = this.slideService.getIndex('next');

          this.slideNext = slides[indexNext];
          this.slidePrev = slides[indexPrev];

          // console.log('SUBSCRIBE - Next >>',this.slideNext, ' / Prev >>', this.slidePrev);
        },
        (error) => console.log(error)
      );

    this.slideService.slideActivated
      .subscribe(
        (index: number) => {
          // console.debug('SUBSCRIBE - slideActivated');
          const indexPrev = this.slideService.getIndex('prev');
          const indexNext = this.slideService.getIndex('next');
          const slides = this.slideService.slides.getValue();

          // console.log('SUBSCRIBE - Slides 22 >>',slides);
          // console.log('SUBSCRIBE - Index Prev >>',indexPrev, 'SUBSCRIBE - Index Next >>', indexNext);

          this.slideNext = slides[indexNext];
          this.slidePrev = slides[indexPrev];
        }
      );
  }

  onNext() {
    const newIndex = this.slideService.getIndex('next');
    this.slideService.slideActivated.next(newIndex);
  }

  onPrev() {
    const newIndex = this.slideService.getIndex('prev');
    this.slideService.slideActivated.next(newIndex);
  }

}
