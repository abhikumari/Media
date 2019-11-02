import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent  {
  title = 'OwlCarousel2 in Angular6 with Custom Navigation Arrows';

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
        items: 6,
        nav: true,
        loop: false
      }
    }
  };
  images = [
    {
      text: 'Everfresh Flowers',
      image: 'assets/images/brands/brand-01.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'assets/images/brands/brand-02.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'assets/images/brands/brand-03.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'assets/images/brands/brand-04.jpg'
    },
    {
      text: 'Everfresh Flowers',
      image: 'assets/images/brands/brand-01.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'assets/images/brands/brand-02.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'assets/images/brands/brand-03.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'assets/images/brands/brand-04.jpg'
    }
  ];
}
