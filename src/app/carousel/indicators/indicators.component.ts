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

  constructor(private slideService: SlideService) { }

  ngOnInit() {
    this.slides = this.slideService.getSlides();
  }

}
