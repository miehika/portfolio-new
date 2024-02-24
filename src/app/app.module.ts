import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SlideshowComponent } from './common/slideshow/slideshow.component';
import { JumbotronComponent } from './common/jumbotron/jumbotron.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorySliderComponent } from './common/category-container/category-slider/category-slider.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CategorySelectorComponent } from './common/category-container/category-selector/category-selector.component';
import { CategoryContainerComponent } from './common/category-container/category-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    JumbotronComponent,
    CategorySliderComponent,
    HomepageComponent,
    ExploreComponent,
    CategorySelectorComponent,
    CategoryContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
