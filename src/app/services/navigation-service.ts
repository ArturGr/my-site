import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private router = inject(Router);
  private menuService = inject(Menu);
  activeButton = signal<string>('');
  isManualScrolling = false;

  /**
  * Initializes the scroll service and sets up a global listener for the scroll event.
  */
  constructor(){
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  /**
  * Handles the scroll event to detect which section is currently in the viewport.
  * Uses a detection line at 30% of the viewport height to determine the active section.
  * Prevents automatic updates while a manual scroll animation is in progress.
  * @private
  */
  private onWindowScroll() {
    if (this.isManualScrolling) return;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition < 150) {
        if (this.activeButton() !== '') this.activeButton.set('');
        this.isManualScrolling = false;
        return;
      }
    const SECTIONS = document.querySelectorAll('.scroll-section');
    const DETECTION_LINE = window.innerHeight * 0.3;
    let found = false;
    SECTIONS.forEach((section) => {
      const RECT = section.getBoundingClientRect();
      if (RECT.top <= DETECTION_LINE && RECT.bottom >= DETECTION_LINE) {
        const buttonId = section.id.replace('-section', '-btn');
        if (this.activeButton() !== buttonId) {
          this.activeButton.set(buttonId);
        }
        found = true;
      }
    });
    if (!found) this.activeButton.set('');
  }

  /**
  * Initiates a smooth scroll to a specific section.
  * If the section is not found on the current page (e.g., when on the Legal Notice page),
  * it navigates to the home route first and then performs the scroll.
  * @param {string} sectionId - The ID of the target element to scroll to.
  * @param {string} [buttonId=''] - Optional ID of the navigation button to highlight.
  */
  scrollToSection(sectionId: string, buttonId: string = '') {
    this.isManualScrolling = true;
    this.activeButton.set(buttonId);
    if (sectionId === "hero-section") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.isManualScrolling = false;
        this.activeButton.set('');
      }, 800);
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

  /**
  * Custom easing function (Ease-Out Back).
  * Provides a "spring" effect where the scroll slightly overshoots the target before settling.
  * @param {number} T - Current progress of the animation (0 to 1).
  * @returns {number} The eased progress value.
  * @private
  */
  private easeOutBack(T: number): number {
    const S = 1.70158;
    return ((T = T - 1) * T * ((S + 1) * T + S) + 1);
  }

  /**
  * Performs a custom frame-by-frame scroll animation using requestAnimationFrame.
  * Accounts for header height offsets and applies the custom easing function.
  * @param {HTMLElement} ELEMENT - The target DOM element to scroll towards.
  * @private
  */
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
}
