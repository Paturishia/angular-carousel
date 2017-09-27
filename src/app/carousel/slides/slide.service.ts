import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';   

import { Slide } from './slide.model';

@Injectable()
export class SlideService {
  private url = 'http://localhost:3000/images';
  private slidesTest: Slide[] = [
    new Slide(
      'Vertigo',
      // 'http://imgs.abduzeedo.com/files/paul0v2/trashhand/th-13.jpg'
      './assets/images/img1.jpg',
        'Hitchcock'
      ),
      new Slide(
        'Abyss',
        // 'http://imgs.abduzeedo.com/files/paul0v2/livefolk/livefolk-07.jpg'
        './assets/images/img2.jpg',
        'James Cameron'
      ),
      new Slide(
        'The Warriors',
        // 'http://imgs.abduzeedo.com/files/paul0v2/insighting/i-01.jpg'
        './assets/images/img3.jpg',
        'Walter Hill'
      )
    ];
  private slides;
    
  private config = {};
  slideActivated = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  getSlides() {
    this.http.get(this.url)
      .map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
      });
      // .subscribe((response: Response) => console.log(response));
    return this.slidesTest;
  }

  // getSlides(){
  //   return this.slidesTest;
  // }

  getSlide(index: number) {
    return this.slides[index];
  }

  getMaxIndex() {
    return this.slides.length - 1;
  }

  getNextIndex(action: string) {
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

  setConfig(config) {
    this.config = config;
  }
}