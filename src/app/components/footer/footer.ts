import { Component, inject } from '@angular/core';
import { MyLogo } from "../my-logo/my-logo";
import { SocialMediaButtons } from "../social-media-buttons/social-media-buttons";
import { RouterModule } from '@angular/router';
import { Menu } from '../../services/menu';

@Component({
  selector: 'app-footer',
  imports: [MyLogo, SocialMediaButtons, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  public menuService = inject(Menu);

  /**
  * Getter that retrieves the localized content for the "Contact Me" section.
  * It dynamically accesses the translation service based on the current language
  * state provided by the Menu service.
  * @returns {any} An object containing translated strings and labels for the contact form.
  */
  get translate() {
      return this.menuService.translate().footer;
  }
}
