import { Component, OnInit, Input } from '@angular/core';

import { SlideService } from '../../slides/slide.service';

@Component({
  selector: 'app-indicator-item',
  templateUrl: './indicator-item.component.html',
  styleUrls: ['./indicator-item.component.css']
})
export class IndicatorItemComponent implements OnInit {
  @Input() index: number;
  @Input() slideActive: number;

  constructor(private slideService: SlideService) { }

  ngOnInit() {}

  onActivated(index) {
    this.slideService.slideActivated.next(index);
  }

}
