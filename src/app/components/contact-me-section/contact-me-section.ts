import { Component, inject } from '@angular/core';
import { ContactForm } from "../contact-form/contact-form";
import { Menu } from '../../services/menu';
import { NavigationService } from '../../services/navigation-service';

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
export class ContactMeSection{
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

  public menuService = inject(Menu);
  public navService = inject(NavigationService);

  /**
  * Getter that retrieves the localized content for the "Contact Me" section.
  * It dynamically accesses the translation service based on the current language
  * state provided by the Menu service.
  * @returns {any} An object containing translated strings and labels for the contact form.
  */
  get translate() {
    return this.menuService.translate().contacMeSectionLang;
  }

  /**
  * Handles the visual feedback when the user clicks on the email address.
  * Briefly updates the email status to 'click' to trigger a tactile UI response,
  * then automatically reverts it to 'hover' state after a short delay (200ms).
  */
  handleEmailClick() {
    this.emailStatus = 'click';
    setTimeout(() => this.emailStatus = 'hover', 200);
  }
}
