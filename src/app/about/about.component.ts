import { Component, OnInit } from '@angular/core';
import { Title ,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( 
    public titleservice:Title,
    public metaservice:Meta) { }

  ngOnInit(): void {

    this.metaservice.updateTag(
      { name:'description', content:'About us'},
    
    );
    // this.metaservice.updateTag(
    //   { name:'author', content:'Dilli Babu'},
    
    // );
    
    this.titleservice.setTitle('DilliBabu - Home')
  }

}
