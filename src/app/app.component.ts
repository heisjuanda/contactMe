import { Component,OnInit } from '@angular/core';
import {EmailService } from './email.service'
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  to = "";
  subjet = "";
  message = "Hello world!";
  isValid = false;

  constructor(private emailService: EmailService){}

  onSubmit(){
    if(this.to.length>0 && this.message.length>0 && this.message.length>0){
      this.emailService.sendEmail(this.to,this.subjet,this.message)
      .subscribe(response =>{
        console.log(response);
      });
      return alert("Thanks for sending your message!");
    }else{
      return alert("Please fill out the form")
    }
  }

  ngOnInit() {
    setTimeout(() => {
      Aos.init();
      Aos.refresh();
    }, 500);

  }
}
