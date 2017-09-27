import { Component, OnInit, Input } from '@angular/core';

import { Slide } from '../slide.model';
import { SlideService } from '../slide.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() slide: Slide;
  @Input() index: number;
  @Input() slideActive: number;

  constructor(private slideService: SlideService) { }

  ngOnInit() {

  }

}
