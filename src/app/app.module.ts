import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { SliderComponent } from './media/slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule, OwlCarousel } from 'ngx-owl-carousel';
import { BrandComponent } from './brand/brand.component';
import { RecentComponent } from './recent/recent.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    SliderComponent,
    HeaderComponent,
    BrandComponent,
    RecentComponent,
    FooterComponent,
    AuthenticationComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    OwlModule,
    FormsModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
