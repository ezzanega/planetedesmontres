import { Component, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-client-slider',
  templateUrl: './client-slider.component.html',
  styleUrls: ['./client-slider.component.scss'],
  standalone: false
})
export class ClientSliderComponent {


  @Input() style_2: Boolean = false;
  // client logos
  public client_logos = [
    { id: 1, logo: 'assets/img/shop/marques/us-polo-assn.png' },
    { id: 2, logo: 'assets/img/shop/marques/beverly hills polo club.png' },
    { id: 3, logo: 'assets/img/shop/marques/GUESS-Logo.png' },
    { id: 4, logo: 'assets/img/shop/marques/Logo_Festina.png' },
    { id: 5, logo: 'assets/img/shop/marques/us-polo-assn.png' },
    { id: 6, logo: 'assets/img/shop/marques/beverly hills polo club.png' },
    { id: 7, logo: 'assets/img/shop/marques/GUESS-Logo.png' },
    { id: 8, logo: 'assets/img/shop/marques/Logo_Festina.png' }
  ];

  ngAfterViewInit() {
    // client slider
    new Swiper('.client__slider', {
      slidesPerView: 5,
      spaceBetween: 0,
      loop: false,
      breakpoints: {
        '1200': {
          slidesPerView: 5,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    })
  }
  //   ngAfterViewInit() {
  //     new Swiper('.client__slider', {
  // slidesPerView: 'auto',
  // spaceBetween: 40,
  //       loop: true,
  //       autoplay: {
  //         delay: 3000,
  //         disableOnInteraction: false,
  //       },
  //       speed: 1200,
  //       breakpoints: {
  //         1600: {
  //           slidesPerView: 6,
  //           spaceBetween: 100,
  //         },
  //         1400: {
  //           slidesPerView: 6,
  //           spaceBetween: 80,
  //         },
  //         1200: {
  //           slidesPerView: 5,
  //           spaceBetween: 70,
  //         },
  //         992: {
  //           slidesPerView: 4,
  //           spaceBetween: 50,
  //         },
  //         768: {
  //           slidesPerView: 3,
  //           spaceBetween: 40,
  //         },
  //         576: {
  //           slidesPerView: 2,
  //           spaceBetween: 30,
  //         },
  //         320: {
  //           slidesPerView: 1,
  //           spaceBetween: 20,
  //         }
  //       }
  //     });
  //   }
}
