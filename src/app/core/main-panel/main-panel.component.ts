import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  home = '';
  about = '';
  contact = '';
  projects = '';

  constructor(@Inject(DOCUMENT) private document: any,
    public title: Title,
    private router: Router,) {
   
  }

  ngOnInit(): void {
    console.log(this.document.location.pathname)
    if(this.document.location.pathname =='/'){
      this.router.navigate(["dashboard"]);
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if(event.url == ''){
        
      }
      // console.log(event.url)
      this.route_change(this.document.location.pathname);
    });
    this.route_change(this.document.location.pathname);
  }

  route_change(path:any){
    if (path == '/dashboard') {
      this.home = 'active'
      this.title.setTitle('Shankar Ganesh - Home');
      this.router.navigate(["dashboard"]);
    } else {
      this.home = ''
    }
    if (path == '/about') {
      this.about = 'active'
      this.title.setTitle('Shankar Ganesh - About')
      this.router.navigate(["about"]);
    } else {
      this.about = ''
    }
    if (path == '/projects') {
      this.projects = 'active'
      this.title.setTitle('Shankar Ganesh - projects');
      this.router.navigate(["projects"]);
    } else {
      this.projects = ''
    }
    if (path == '/contact_us') {
      this.contact = 'active'
      this.title.setTitle('Shankar Ganesh - Contact');
      this.router.navigate(["contact_us"]);
    } else {
      this.contact = ''
    }
  }

  changes(action: any) {
    if (action == 'home') {
      this.home = 'active'
      this.title.setTitle('Shankar Ganesh - Home')
    } else {
      this.home = ''
    }
    if (action == 'about') {
      this.about = 'active'
      this.title.setTitle('Shankar Ganesh - About')
    } else {
      this.about = ''
    }
    if (action == 'projects') {
      this.projects = 'active'
      this.title.setTitle('Shankar Ganesh - projects')
    } else {
      this.projects = ''
    }
    if (action == 'contact') {
      this.contact = 'active'
      this.title.setTitle('Shankar Ganesh - Contact')
    } else {
      this.contact = ''
    }

  }

}
