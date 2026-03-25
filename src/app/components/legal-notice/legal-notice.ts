import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBar } from "../menu-bar/menu-bar";
import { Footer } from "../footer/footer";
import { Menu } from '../../services/menu';
import { Router } from '@angular/router';
import { MobileMenu } from '../mobile-menu/mobile-menu';

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule, MenuBar, Footer, MobileMenu],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  protected menuService = inject(Menu);
  private router = inject(Router);

  /**
  * Getter that checks if the current viewport is classified as a mobile device.
  * Accesses the Menu service to determine the device type for responsive logic.
  * @returns {boolean} True if the device is mobile, false otherwise.
  */
  get isMobile() {
    return this.menuService.isMobile();
  }

  /**
  * Getter that retrieves the current visibility state of the navigation menu.
  * Useful for controlling overlays or body scrolling when the menu is active.
  * @returns {boolean} True if the menu is currently open.
  */
  get isMenuOpen(){
    return this.menuService.isMenuOpen();
  }

  /**
  * Getter that retrieves the localized content specifically for the Legal Notice section.
  * Dynamically fetches translations based on the application's active language.
  * @returns {any} An object containing the translated text for legal requirements.
  */
  get translate() {
    return this.menuService.translate().legalNoticeLang;
  }

  /**
  * Navigates the user back to the home page (root route).
  * Upon successful navigation, it forces the window to scroll to the top (0,0)
  * to ensure the user starts at the beginning of the landing page.
  * @returns {void}
  */
  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
