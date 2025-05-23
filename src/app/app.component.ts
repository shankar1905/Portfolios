import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private metaTagService: Meta) { }
  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Shankar Ganesh portfolio , Shankar Ganesh selfmade,Shankar Ganesh E, Shankar Ganesh ELUMALAI',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Shankar Ganesh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
}
