import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  frst_name = '';
  last_name = '';
  email = '';
  phone = '';
  desc = '';
  submit_load = "Submit"
  form_show = 0;
  constructor() { }

  ngOnInit(): void {
  }
  form_save() {
    this.submit_load = "Loading.."
    if (this.frst_name != '' && this.last_name && this.email != '' && this.phone != '') {
        this.form_show = 1
    }else{
      this.submit_load = "Submit"
    }
  }
}
