import { Component } from '@angular/core';
import { ContactForm } from "../contact-form/contact-form";
import { MenuBar } from '../menu-bar/menu-bar';

type Icon = {
  email:{
      default:string,
      hover:string,
      click:string
    },
  tel:{
      default: string,
      hover: string,
    }
}

@Component({
  selector: 'app-contact-me-section',
  imports: [ContactForm],
  templateUrl: './contact-me-section.html',
  styleUrl: './contact-me-section.scss',
})
export class ContactMeSection extends MenuBar{
  icon:Icon={
    email:{
      default: "./img/contact/email/Default.png",
      hover: "./img/contact/email/Hover.png",
      click: "./img/contact/email/Click.png"
    },
    tel:{
      default: "./img/contact/tel/Default.png",
      hover: "./img/contact/tel/Hover.png",
    }
  }
  emailStatus: 'default' | 'hover' | 'click' = 'default';
  telStatus: 'default' | 'hover' = 'default';

  handleEmailClick() {
    this.emailStatus = 'click';
    setTimeout(() => this.emailStatus = 'hover', 200);
  }
}
