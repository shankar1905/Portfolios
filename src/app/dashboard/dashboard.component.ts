import { Component, OnInit } from '@angular/core';
import { Title ,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public hide ='hide';
  constructor(
    public titleservice:Title,
    public metaservice:Meta
  ) { 
   
  }

  ngOnInit(): void {
    
    this.metaservice.updateTag(
      { name:'description', content:'Home Page of my Portfolio'},
    
    );
    this.metaservice.updateTag(
      { name:'author', content:'Dilli Babu'},
    
    );
    
    this.titleservice.setTitle('DilliBabu - Home')

    setTimeout(() => {
      this.hide = 'show'
    }, 2500);
  }

}
