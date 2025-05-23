import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public hide = 'hide';
  @ViewChild('cvLink', { static: false }) cvLink!: ElementRef;
  constructor(
    public titleservice: Title,
    public metaservice: Meta,
    public router: Router
  ) {

  }

  ngOnInit(): void {

    this.metaservice.updateTag(
      { name: 'description', content: 'Home Page of my Portfolio' },

    );
    this.metaservice.updateTag(
      { name: 'author', content: 'Shankar Ganesh' },

    );

    this.titleservice.setTitle('Shankar Ganesh - Portfolio')

    setTimeout(() => {
      this.hide = 'show'
    }, 2500);
  }

  goToAbout(): void {
    this.router.navigate(['/about']);
  }


  downloadCV(): void {
    this.cvLink.nativeElement.click();
  }

}
