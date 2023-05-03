import { Component, OnInit,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
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
  private router: Router,) { }

  ngOnInit(): void {

    console.log(window.location.pathname)
    var path = window.location.pathname;
    console.log(path)
    if (path == '') {
      this.router.navigate(["dashboard"]);
    }
    if (path == '' || path == '/dashboard') {
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
