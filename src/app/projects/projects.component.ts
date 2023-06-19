import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import Swiper, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
public device:any;

Images= [
  {
    src: 'https://loremflickr.com/g/600/400/paris',
    alt: 'Image 1',
  }, {
    src: 'https://loremflickr.com/600/400/brazil,rio',
    alt: 'Image 2'
  }, {
    src: 'https://loremflickr.com/600/400/paris,girl/all',
    alt: 'Image 3'
  }, {
    src: 'https://loremflickr.com/600/400/brazil,rio',
    alt: 'Image 4'
  }, {
    src: 'https://loremflickr.com/600/400/paris,girl/all',
    alt: 'Image 5'
  }, {
    src: 'https://loremflickr.com/600/400/brazil,rio',
    alt: 'Image 6'
  }    
]

config: SwiperOptions = {
  effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
 
      spaceBetween: 20,
      coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 3,
        slideShadows: true
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1560: {
          slidesPerView: 2
        }
      }
};  

  constructor(
    public deviceService:DeviceDetectorService
  ) { 
  
  }

  ngOnInit(): void {
    this.device = this.deviceService.isMobile();
    console.log(this.device)

  }

  

}
