import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBar } from "../menu-bar/menu-bar";
import { Footer } from "../footer/footer";
import { Menu } from '../../services/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule, MenuBar, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
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
