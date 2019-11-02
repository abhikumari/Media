import { Component, OnInit } from '@angular/core';
import { ShopSmall, Acessories, Side } from './footer.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  sellers1: ShopSmall[] = [
    new ShopSmall('playstasion 4 with four games and pad', 'acer', 'assets/images/products/product-small-01.jpg', 2000.00, 1799.00),
    new ShopSmall('EOS rebel t5i DSLR Camera with 18-55mm', 'canon', 'assets/images/products/product-small-02.jpg', 1399.00, 1199.00),
    new ShopSmall('itbit zip wireless activity tracker', 'fitbit zip', 'assets/images/products/product-small-03.jpg', 2000.00, 1799.00)

  ];
  sellers2: ShopSmall[] = [
    new ShopSmall('beats studio headphones official one', 'beats', 'assets/images/products/product-small-04.jpg', 1399.00, 1199.00),
    new ShopSmall('PowerShot elph 115 16MP digital camera', 'canon', 'assets/images/products/product-small-05.jpg', 1800.00, 1599.00),
    new ShopSmall('netbook acer travelMate b113-E-10072', 'acer', 'assets/images/products/product-small-06.jpg', 1399.00, 1199.00)
  ];
  sellers3: ShopSmall[] = [
    new ShopSmall('beats studio headphones official one', 'beats', 'assets/images/products/product-small-07.jpg', 1399.00, 1199.00),
    new ShopSmall('PowerShot elph 115 16MP digital camera', 'canon', 'assets/images/products/product-small-08.jpg', 1800.00, 1599.00),
    new ShopSmall('netbook acer travelMate b113-E-10072', 'acer', 'assets/images/products/product-small-09.jpg', 1399.00, 1199.00)
  ];
acessories: Acessories[] = [
  new Acessories('laptops & computers'),
  new Acessories('Cameras & Photography'),
  new Acessories('Smart Phones & Tablets'),
  new Acessories('Video Games & Consoles'),
  new Acessories('TV & Audio'),
  new Acessories('Gadgets'),
  new Acessories('Car Electronic & GPS'),
  new Acessories('Accessories'),


];
info1: Acessories[] = [
  new Acessories('Find a Store'),
  new Acessories('About Us'),
  new Acessories('Contact Us'),
  new Acessories('weekly deals'),
  new Acessories('recycling program'),
  new Acessories('gift cards'),
  new Acessories('Community'),
  new Acessories('career'),


];
info2: Acessories[] = [
  new Acessories('my account'),
  new Acessories('order tracking'),
  new Acessories('whistlist'),
  new Acessories('customer service'),
  new Acessories('return/ exchange'),
  new Acessories('FAQs'),
  new Acessories('product support'),
  new Acessories('Extended Service Plans'),


];
sidebars: Side[] = [
 new Side('https://transvelo.github.io/mediacenter-html/index.html', 'Home-v1'),
 new Side('https://transvelo.github.io/mediacenter-html/index-2.html', 'Home-v2'),
 new Side('https://transvelo.github.io/mediacenter-html/category-grid.html', 'Category - Grid/List'),
 new Side('https://transvelo.github.io/mediacenter-html/category-grid-2.html', 'Category 2 - Grid/List'),
 new Side('https://transvelo.github.io/mediacenter-html/single-product.html', 'Single Product'),
 new Side('https://transvelo.github.io/mediacenter-html/single-product-sidebar.html', 'Single Product with Sidebar'),
 new Side('https://transvelo.github.io/mediacenter-html/cart.html', 'Shopping Cart'),
 new Side('https://transvelo.github.io/mediacenter-html/checkout.html', 'Checkout'),
 new Side('https://transvelo.github.io/mediacenter-html/about.html', 'About Us'),
 new Side('https://transvelo.github.io/mediacenter-html/contact.html', 'Contact Us'),
 new Side('https://transvelo.github.io/mediacenter-html/blog.html', 'Blog'),
 new Side('https://transvelo.github.io/mediacenter-html/blog-fullwidth.html', 'Blog Full Width'),
 new Side('https://transvelo.github.io/mediacenter-html/blog-post.html', 'Blog Post'),
 new Side('https://transvelo.github.io/mediacenter-html/faq.html', 'FAQ'),
 new Side('https://transvelo.github.io/mediacenter-html/terms.html', 'Terms & Conditions'),
 new Side('https://transvelo.github.io/mediacenter-html/authentication.html', 'Login/Register'),
 new Side('https://transvelo.github.io/mediacenter-html/wishlist.html', 'Wishlist'),
 new Side('https://transvelo.github.io/mediacenter-html/compare.html', 'Product Comparison'),
 new Side('https://transvelo.github.io/mediacenter-html/track-your-order.html', 'Track your Order')
];
  constructor() { }

  ngOnInit() {
  }

}
