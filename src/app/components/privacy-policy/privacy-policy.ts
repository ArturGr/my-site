import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { MenuBar } from '../menu-bar/menu-bar';
import { Router } from '@angular/router';
import { Menu } from '../../services/menu';
import { MobileMenu } from '../mobile-menu/mobile-menu';

@Component({
  selector: 'app-privacy-policy',
  imports: [Footer, MenuBar, MobileMenu],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  public menuService = inject(Menu);
  private router = inject(Router);

  /**
  * Getter that checks if the application is currently running on a mobile device.
  * Useful for adjusting layout density or text size within the privacy policy document.
  * @returns {boolean} True if the device is classified as mobile, false otherwise.
  */
  get isMobile() {
    return this.menuService.isMobile();
  }

  /**
  * Getter that retrieves the current visibility state of the navigation menu.
  * Ensures the policy content reacts appropriately if the menu is toggled.
  * @returns {boolean} True if the menu is open, false otherwise.
  */
  get isMenuOpen(){
    return this.menuService.isMenuOpen();
  }

  /**
  * Getter that retrieves the localized legal text for the Privacy Policy section.
  * Fetches the specific translation object from the Menu service to ensure
  * legal compliance in the user's selected language.
  * @returns {any} An object containing translated legal clauses and headers.
  */
  get translate() {
    return this.menuService.translate().privacyPolicyLang;
  }

  /**
  * Navigates the user back to the landing page and forces a scroll to the top.
  * This ensures that after reading the long privacy document, the user
  * starts at the very beginning of the home page.
  * @returns {void}
  */
  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
