import { Component } from '@angular/core';
import { MyLogo } from "../my-logo/my-logo";
import { CommonModule } from '@angular/common';
import { SocialMediaButtons } from "../social-media-buttons/social-media-buttons";
import { MenuBar } from '../menu-bar/menu-bar';
import { MobileMenu } from "../mobile-menu/mobile-menu";

@Component({
  selector: 'app-hero-section',
  imports: [MyLogo, CommonModule, SocialMediaButtons, MobileMenu],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})

export class HeroSection extends MenuBar{
  isHovered: boolean = false;

  toggleHover(state: boolean): void {
    if (window.innerWidth <= 768) {
      return;
    }
    this.isHovered = state;
  }
}
