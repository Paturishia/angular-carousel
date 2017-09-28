import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class CarouselConfigService {
  config = new BehaviorSubject<any>({
    circular: true,
    interval: 1000,
    autoSlide: false,
    controlsThumbs: true
  });
}
