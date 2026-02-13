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

  get isMobile() {
    return this.menuService.isMobile();
  }

  get isMenuOpen(){
    return this.menuService.isMenuOpen();
  }

  get translate() {
    return this.menuService.translate().privacyPolicyLang;
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
