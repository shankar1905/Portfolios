import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
public device:any;

  constructor(
    public deviceService:DeviceDetectorService
  ) { 
    // var swiper = new Swiper(".swiper", {
    //   effect: "coverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 3,
    //     slideShadows: true
    //   },
    //   loop: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   },
    //   breakpoints: {
    //     640: {
    //       slidesPerView: 2
    //     },
    //     768: {
    //       slidesPerView: 1
    //     },
    //     1024: {
    //       slidesPerView: 2
    //     },
    //     1560: {
    //       slidesPerView: 3
    //     }
    //   }
    // });
  }

  ngOnInit(): void {
    this.device = this.deviceService.isMobile();
    console.log(this.device)

  }

  

}
