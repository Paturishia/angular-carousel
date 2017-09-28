import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ControlsComponent } from './carousel/controls/controls.component';
import { SlidesComponent } from './carousel/slides/slides.component';
import { SlideComponent } from './carousel/slides/slide/slide.component';
import { IndicatorsComponent } from './carousel/indicators/indicators.component';
import { IndicatorItemComponent } from './carousel/indicators/indicator-item/indicator-item.component';

import { SlideService } from './carousel/slides/slide.service';
import { CarouselConfigService } from './carousel/carousel-config.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ControlsComponent,
    SlidesComponent,
    SlideComponent,
    IndicatorsComponent,
    IndicatorItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SlideService, CarouselConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
