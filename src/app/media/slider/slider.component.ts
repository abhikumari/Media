import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent {
  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ['<div class="nav-btn prev-slide"></div>', '<div class="nav-btn next-slide"></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  };
  images = [
    {
      text: 'Everfresh Flowers',
      image: 'assets/images/sliders/slider01.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'assets/images/sliders/slider03.jpg'
    },
  ];
}
