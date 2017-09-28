import { Component, OnInit } from '@angular/core';

import { Slide } from './slide.model';
import { SlideService } from './slide.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {
  slides: Slide[];
  slideActive: number = 0;

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
