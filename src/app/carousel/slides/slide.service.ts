import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Slide } from './slide.model';

@Injectable()
export class SlideService {
  slides = new BehaviorSubject<Slide[]>([]);
  slideActivated = new BehaviorSubject<number>(0);

  constructor(private http: Http) {
    this.getSlidesHttp();
  }

  getSlidesHttp() {
    // console.log('GET HTTP');
    this.http.get('http://localhost:3000/images')
      .map(
        (response: Response) => {
          const data = response.json();
          const slides = [];
          for (let slide of data) {
            slides.push(new Slide(slide.title, slide.imagePath, slide.description));
          }
          this.slides.next(slides);
        }
      ).subscribe();
  }

  getSlide(index) {
    console.debug('getSlide >>>', index)
    return this.slides[index];
  }

  getMaxIndex() {
    return this.slides.getValue().length - 1;
  }

  getIndex(action: string) {
    let newIndex = this.slideActivated.value;
    const minIndex = 0;
    const maxIndex = this.getMaxIndex();

    if (action === 'next') {
      newIndex++;
    } else if (action === 'prev') {
      newIndex--;
    }

    if (newIndex > maxIndex) { newIndex = minIndex; }
    if (newIndex < minIndex) { newIndex = maxIndex; }

    return newIndex;
  }
}
