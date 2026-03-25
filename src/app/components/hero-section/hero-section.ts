import { Component, inject } from '@angular/core';
import { MyLogo } from "../my-logo/my-logo";
import { CommonModule } from '@angular/common';
import { SocialMediaButtons } from "../social-media-buttons/social-media-buttons";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { Menu } from '../../services/menu';
import { NavigationService } from '../../services/navigation-service';

@Component({
  selector: 'app-hero-section',
  imports: [MyLogo, CommonModule, SocialMediaButtons, MobileMenu],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})

export class HeroSection {
  isHovered: boolean = false;
  public menuService = inject(Menu);
  public navService = inject(NavigationService);

  /**
  * Getter that checks the current state of the navigation menu.
  * Accesses the Menu service to determine if the menu overlay is currently active.
  * @returns {boolean} True if the menu is open, false otherwise.
  */
  get isMenuOpen() {
    return this.menuService.isMenuOpen();
  }

  /**
  * Getter that retrieves the localized content for the Hero section.
  * Dynamically fetches translations based on the application's current language setting.
  * @returns {any} An object containing the translated text for the Hero component.
  */
  get translate() {
    return this.menuService.translate().heroLang;
  }

  /**
  * Updates the hover state for UI elements, typically used for animations or style changes.
  * Includes a guard clause to prevent hover effects on touch devices (screens <= 768px),
  * ensuring a consistent user experience across different platforms.
  * @param {boolean} state - The target hover state (true for mouseenter, false for mouseleave).
  */
  toggleHover(state: boolean): void {
    if (window.innerWidth <= 768) {
      return;
    }
    this.isHovered = state;
  }
}
