import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ControlsComponent } from './carousel/controls/controls.component';
import { SlidesComponent } from './carousel/slides/slides.component';
import { SlideComponent } from './carousel/slides/slide/slide.component';
import { IndicatorsComponent } from './carousel/indicators/indicators.component';
import { IndicatorItemComponent } from './carousel/indicators/indicator-item/indicator-item.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
