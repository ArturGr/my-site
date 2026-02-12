import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private router = inject(Router);
  private menuService = inject(Menu);

  isManualScrolling = false;
  activedButton = '';

  scrollToSection(sectionId: string, buttonId: string = '') {
    this.isManualScrolling = true;
    this.activedButton = buttonId;

    if (sectionId === "hero-section") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.isManualScrolling = false;
        this.activedButton = '';
      }, 1000);
      return;
    }

    const ELEMENT = document.getElementById(sectionId);
    if (ELEMENT) {
      this.animateScroll(ELEMENT);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const REHYDRATED = document.getElementById(sectionId);
          if (REHYDRATED) this.animateScroll(REHYDRATED);
        }, 100);
      });
    }
  }

  private animateScroll(ELEMENT: HTMLElement) {
    const HEADER_HEIGHT = this.menuService.isMobile() ? 0 : 104;
    const START_Y = window.scrollY;
    const TARGET_Y = (ELEMENT.getBoundingClientRect().top + START_Y) - HEADER_HEIGHT;
    const DISTANCE = TARGET_Y - START_Y;
    const DURATION = 800;

    let startTimestamp: number;
    const STEP = (currentTimestamp: number) => {
      if (!startTimestamp) startTimestamp = currentTimestamp;
      const ELAPSED = currentTimestamp - startTimestamp;
      const PROGRESS = Math.min(ELAPSED / DURATION, 1);
      const BACK_PROGRESS = this.easeOutBack(PROGRESS);

      window.scrollTo(0, START_Y + (DISTANCE * BACK_PROGRESS));

      if (PROGRESS < 1) {
        window.requestAnimationFrame(STEP);
      } else {
        setTimeout(() => {
          this.isManualScrolling = false;
        }, 400);
      }
    };
    window.requestAnimationFrame(STEP);
  }

  private easeOutBack(T: number): number {
    const S = 1.70158;
    return ((T = T - 1) * T * ((S + 1) * T + S) + 1);
  }
}
