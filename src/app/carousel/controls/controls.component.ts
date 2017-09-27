import { Component, OnInit } from '@angular/core';

import{ SlideService } from '../slides/slide.service'; 

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor(private slideService: SlideService) { }

  ngOnInit() {
  }

  onNext() {
    console.log('Next slide');

    const newIndex = this.slideService.getNextIndex('next');

    this.slideService.slideActivated.next(newIndex);
  }

  onPrev() {
    console.log('Prev slide');
    
    const newIndex = this.slideService.getNextIndex('prev');

    this.slideService.slideActivated.next(newIndex);
  }

}
