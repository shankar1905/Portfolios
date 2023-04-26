import { Component, OnInit } from '@angular/core';
import { Title ,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public titleservice:Title,
    public metaservice:Meta
  ) { 
    this.metaservice.updateTag(
      { name:'description', content:'Home Page of my Portfolio'},
    
    );
    this.metaservice.updateTag(
      { name:'author', content:'Dilli Babu'},
    
    );
    this.metaservice.updateTag(
      { name:'keywords', content:'Dillibabu portfolio , dilli babu selfmade'},
    
    );
    this.titleservice.setTitle('DilliBabu - Home')
  }

  ngOnInit(): void {
  }

}
