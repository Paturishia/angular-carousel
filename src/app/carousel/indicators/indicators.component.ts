import { Component, OnInit } from '@angular/core';

import { Slide } from '../slides/slide.model';

import { SlideService } from '../slides/slide.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {
  slides: Slide[];
  slideActive: number;

  constructor(private slideService: SlideService) { }

  ngOnInit() {
    this.slideService.slides
      .subscribe(
        (slides: Slide[]) => {
          this.slides = slides
        },
        (error) => console.log(error)
      );

    this.slideService.slideActivated.subscribe(
      (index: number) => {
        this.slideActive = index;
      }
    );
  }

}
