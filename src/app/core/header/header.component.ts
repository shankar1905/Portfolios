import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home = '';
  about = '';
  contact = '';
  projects = '';
  constructor(
    public title: Title,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if(event.url == ''){
        
      }
      console.log(event)
      this.route_change(event.url);
    });

  }

  route_change(path:any){
    if (path == '/dashboard') {
      this.home = 'active'
      this.title.setTitle('DilliBabu - Home')
    } else {
      this.home = ''
    }
    if (path == '/about') {
      this.about = 'active'
      this.title.setTitle('DilliBabu - About')
    } else {
      this.about = ''
    }
    if (path == '/projects') {
      this.projects = 'active'
      this.title.setTitle('DilliBabu - projects')
    } else {
      this.projects = ''
    }
    if (path == '/contact_us') {
      this.contact = 'active'
      this.title.setTitle('DilliBabu - Contact')
    } else {
      this.contact = ''
    }
  }

  changes(action: any) {
    if (action == 'home') {
      this.home = 'active'
      this.title.setTitle('DilliBabu - Home')
    } else {
      this.home = ''
    }
    if (action == 'about') {
      this.about = 'active'
      this.title.setTitle('DilliBabu - About')
    } else {
      this.about = ''
    }
    if (action == 'projects') {
      this.projects = 'active'
      this.title.setTitle('DilliBabu - projects')
    } else {
      this.projects = ''
    }
    if (action == 'contact') {
      this.contact = 'active'
      this.title.setTitle('DilliBabu - Contact')
    } else {
      this.contact = ''
    }

  }

}
