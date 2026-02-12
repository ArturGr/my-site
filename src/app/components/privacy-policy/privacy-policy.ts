import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { MenuBar } from '../menu-bar/menu-bar';
import { Router } from '@angular/router';
import { Menu } from '../../services/menu';

@Component({
  selector: 'app-privacy-policy',
  imports: [Footer, MenuBar],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  protected menuService = inject(Menu);
  private router = inject(Router);
  get isMobile() {
    return this.menuService.isMobile();
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
