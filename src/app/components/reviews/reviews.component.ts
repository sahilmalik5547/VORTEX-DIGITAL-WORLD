import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    navText: ['Prev','Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  // activeSlides?: SlidesOutputData ;

  //     slidesStore?: any[] ;
  //     constructor() {}

  //     getData(data: SlidesOutputData) {
  //       this.activeSlides = data;
  //       console.log(this.activeSlides);
  //     }



  constructor() { }

  ngOnInit(): void {
  }

}
