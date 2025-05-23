import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Title ,Meta } from '@angular/platform-browser';
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
  public device:any;

  submitted = false;

  public contactForm: any;


  constructor(
    public deviceService:DeviceDetectorService,
    private formBuilder: FormBuilder,
    public titleservice:Title,
    public metaservice:Meta
  ) { }

  ngOnInit(): void {

    this.metaservice.updateTag(
      { name:'description', content:'Contact Us'},
    
    );
    // this.metaservice.updateTag(
    //   { name:'author', content:'Shankar Ganesh'},
    
    // );
    
    this.titleservice.setTitle('Shankar Ganesh - Contact Us')

    this.device = this.deviceService.isMobile();
    this.contactForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_id: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.minLength(10),
      Validators.maxLength(15),]],
      desc:[''],
    },)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  contact_save(datas:any) {
    this.submitted = true;

    if (this.contactForm.valid) {
    } else {
      return;
    }
  }
}
