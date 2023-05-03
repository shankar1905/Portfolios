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
  ) { }

  ngOnInit(): void {
    this.device = this.deviceService.isMobile();
    console.log(this.device)

  }

}
