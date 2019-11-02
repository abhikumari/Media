import { Component, OnInit } from '@angular/core';
import { Media, Shop, Slide, Brand } from './media.model';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  medias: Media[] = [
    new Media('Pages', 'home', 'index.html'),
    new Media('Value of the Day', 'home', 'index.html'),
    new Media('Laptops & Computers', 'home', 'index.html'),
    new Media('Cameras & Photography', 'home', 'index.html'),
    new Media('Smartphones & Tablets', 'home', 'index.html'),
    new Media('Videoganes & Consoles', 'home', 'index.html'),
    new Media('Tv & Audio', 'home', 'index.html'),
    new Media('Gadgets', 'home', 'index.html'),
    new Media('Car electronic & GPS', 'home', 'index.html'),
    new Media('Accesories', 'home', 'index.html'),
    new Media('Buy this Theme', 'home', 'index.html')
    ];
    shops: Shop[] = [
      new Shop('VAIO Fit Laptop - Windows 8 SVF14322CXW', 'sony', 'assets/images/products/product-01.jpg', 1399.00, 1199.00),
      new Shop('White lumia 9001', 'nokia', 'assets/images/products/product-02.jpg', 1399.00, 1199.00),
      new Shop('POV Action Cam', 'sony', 'assets/images/products/product-03.jpg', 1399.00, 1199.00),
      new Shop('Netbook Acer TravelMateB113-E-10072<', 'acer', 'assets/images/products/product-04.jpg', 1399.00, 1199.00)
    ];
    sellers: Shop[] = [
      new Shop('playstasion 4 with four games and pad', 'acer', 'assets/images/products/product-06.jpg', 1399.00, 1199.00),
      new Shop('EOS rebel t5i DSLR Camera with 18-55mm IS STM lens', 'canon', 'assets/images/products/product-07.jpg', 1399.00, 1199.00),
      new Shop('itbit zip wireless activity tracker - lime', 'fitbit zip', 'assets/images/products/product-08.jpg', 1399.00, 1199.00),
      new Shop('beats studio headphones official one', 'beats', 'assets/images/products/product-05.jpg', 1399.00, 1199.00),
      new Shop('PowerShot elph 115 16MP digital camera', 'canon', 'assets/images/products/product-09.jpg', 1399.00, 1199.00),
      new Shop('netbook acer travelMate b113-E-10072', 'acer', 'assets/images/products/product-10.jpg', 1399.00, 1199.00)
    ];
    slides: Slide[] = [
      new Slide('slide1', 'assets/images/products/gallery-thumb-01.jpg'),
      new Slide('slide2', 'assets/images/products/gallery-thumb-01.jpg'),
      new Slide('slide3', 'assets/images/products/gallery-thumb-01.jpg')
    ];
    recents: Shop[] = [
      new Shop('LC-70UD1U 70" class aquos 4K ultra HD', 'sharp', 'assets/images/products/product-11.jpg', 1399.00, 1199.00),
      new Shop('cinemizer OLED 3D virtual reality TV Video', 'zeiss', 'assets/images/products/product-12.jpg', 1399.00, 1199.00),
      new Shop('s2340T23" full HD multi-Touch Monitor', 'dell', 'assets/images/products/product-13.jpg', 1399.00, 1199.00),
      new Shop('kardon BDS 7772/120 integrated 3D', 'harman', 'assets/images/products/product-14.jpg', 1399.00, 1199.00),
      new Shop('netbook acer travel B113-E-10072', 'acer', 'assets/images/products/product-15.jpg', 1399.00, 1199.00),
      new Shop('iPod touch 5th generation,64GB, blue', 'apple', 'assets/images/products/product-16.jpg', 1399.00, 1199.00),
      new Shop('s2340T23" full HD multi-Touch Monitor', 'dell', 'assets/images/products/product-13.jpg', 1399.00, 1199.00),
      new Shop('kardon BDS 7772/120 integrated 3D', 'harman', 'assets/images/products/product-14.jpg', 1399.00, 1199.00)
    ];
    brands: Brand[] = [
      new Brand('assets/images/brands/brand-01.jpg'),
      new Brand('assets/images/brands/brand-02.jpg'),
      new Brand('assets/images/brands/brand-03.jpg'),
      new Brand('assets/images/brands/brand-04.jpg'),
      new Brand('assets/images/brands/brand-01.jpg'),
      new Brand('assets/images/brands/brand-02.jpg'),
      new Brand('assets/images/brands/brand-03.jpg'),
      new Brand('assets/images/brands/brand-04.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }

}
