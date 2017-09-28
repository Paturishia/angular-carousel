import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import { CarouselConfigService } from './carousel/carousel-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('circularConfigInput') circularConfigInput: ElementRef;
  @ViewChild('intervalConfigInput') intervalConfigInput: ElementRef;
  @ViewChild('autoSlideConfigInput') autoSlideConfigInput: ElementRef;
  @ViewChild('controlsThumbConfigInput') controlsThumbConfigInput: ElementRef;
  circular: boolean;

  constructor(private carouselConfigService: CarouselConfigService) {}

  ngOnInit() {
    this.carouselConfigService.config
      .subscribe(
        (config: any) => {
          this.circular = config.circular;
        }
      );
    this.carouselConfigService.config.next({
      circular: this.circularConfigInput.nativeElement.checked,
      interval: +this.intervalConfigInput.nativeElement.value,
      autoSlide: this.autoSlideConfigInput.nativeElement.checked,
      controlsThumb: this.controlsThumbConfigInput.nativeElement.checked
    });
  }

  circularOnChange() {
    this.circular = !this.circular;
  }

  onLoad() {
    const newConfig = {
      circular: this.circularConfigInput.nativeElement.checked,
      interval: +this.intervalConfigInput.nativeElement.value,
      autoSlide: this.autoSlideConfigInput.nativeElement.checked,
      controlsThumb: this.controlsThumbConfigInput.nativeElement.checked
    };

    this.carouselConfigService.config.next(newConfig);
  }
}
