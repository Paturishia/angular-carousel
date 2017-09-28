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
  circular: boolean;
  firstSlide: boolean;
  lastSlide: boolean;
  controlsThumbs: boolean = this.carouselConfigService.config.getValue().controlsThumbs;

  constructor(private slideService: SlideService, private carouselConfigService: CarouselConfigService) { }

  ngOnInit() {
    this.carouselConfigService.config
      .subscribe(
        (config: any) => {
          this.controlsThumbs = config.controlsThumbs;
          this.circular = config.circular
        }
      );

    this.slideService.slides
      .subscribe(
        (slides: Slide[]) => {
          const indexPrev = this.slideService.getIndex('prev', this.circular);
          const indexNext = this.slideService.getIndex('next', this.circular);
          const index = this.slideService.slideActivated.value;

          this.slideNext = slides[indexNext];
          this.slidePrev = slides[indexPrev];
          this.lastSlide = index === indexNext;
          this.firstSlide = index === indexPrev;
          console.log('index >>>', index, indexNext, indexPrev, this.lastSlide,this.firstSlide)
        },
        (error) => console.log(error)
      );

    this.slideService.slideActivated
      .subscribe(
        (index: number) => {
          const indexPrev = this.slideService.getIndex('prev', this.circular);
          const indexNext = this.slideService.getIndex('next', this.circular);
          const slides = this.slideService.slides.getValue();

          this.slideNext = slides[indexNext];
          this.slidePrev = slides[indexPrev];
          this.lastSlide = index === indexNext;
          this.firstSlide = index === indexPrev;
          console.log('index >>>', index, indexNext, indexPrev, this.lastSlide,this.firstSlide)
        }
      );
  }

  onNext() {
    const newIndex = this.slideService.getIndex('next', this.circular);
    this.slideService.slideActivated.next(newIndex);
  }

  onPrev() {
    const newIndex = this.slideService.getIndex('prev', this.circular);
    this.slideService.slideActivated.next(newIndex);
  }
}
