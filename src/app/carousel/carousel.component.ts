import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import { SlideService } from './slides/slide.service';
import { CarouselConfigService } from './carousel-config.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [SlideService]
})
export class CarouselComponent implements OnInit, OnDestroy {
  controlsThumbs: boolean;
  autoSlideObsSubscription: Subscription;
  private interval;

  constructor(private slideService: SlideService, private carouselConfigService: CarouselConfigService) { }

  ngOnInit() {
    this.carouselConfigService.config.subscribe(
      (config: any) => {
        if (config.autoSlide && config.circular) {
          const autoSlideObs = Observable.create((observer: Observer<void>) => {
            this.interval = setInterval(() => {
              const newIndex = this.slideService.getIndex('next', config.circular);
              this.slideService.slideActivated.next(newIndex);
            }, config.interval);
          });
          this.autoSlideObsSubscription = autoSlideObs.subscribe();
        } else {
          clearInterval(this.interval);
        }
        this.controlsThumbs = config.controlsThumb;
      }
    );
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    this.autoSlideObsSubscription.unsubscribe();
  }

}
