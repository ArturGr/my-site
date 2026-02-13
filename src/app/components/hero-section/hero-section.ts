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

  get isMenuOpen() {
    return this.menuService.isMenuOpen();
  }

  get translate() {
    return this.menuService.translate().heroLang;
  }

  toggleHover(state: boolean): void {
    if (window.innerWidth <= 768) {
      return;
    }
    this.isHovered = state;
  }
}
