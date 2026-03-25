import { Injectable, signal, inject, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TRANSLATIONS, Lang } from '../models/translations';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  private router = inject(Router);
  private _isMenuOpen = signal(false);
  isMenuOpen = this._isMenuOpen.asReadonly();
  private _isMobile = signal(window.innerWidth <= 768);
  isMobile = this._isMobile.asReadonly();
  actualLanguage = signal<Lang>('EN');
  translate = computed(() => TRANSLATIONS[this.actualLanguage()]);

  /**
  * Initializes the service and sets up global event listeners.
  * - Monitors Router events to automatically close the menu upon successful navigation.
  * - Tracks window resizing to update the mobile state and close the menu if the screen expands beyond 768px.
  * - Restores the user's preferred language from localStorage if available.
  */
  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setMenuState(false);
    });

    window.addEventListener('resize', () => {
      this._isMobile.set(window.innerWidth <= 768);
      if (window.innerWidth > 768 && this._isMenuOpen()) {
        this.setMenuState(false);
      }
    });

    const savedLang = localStorage.getItem('lang') as Lang;
    if (savedLang && (savedLang === 'EN' || savedLang === 'DE')) {
      this.actualLanguage.set(savedLang);
    }
  }

  /**
  * Toggles the current state of the navigation menu (open/closed).
  */
  toggle() {
    this._isMenuOpen.update(state => !state);
  }

  /**
  * Directly sets the navigation menu to a specific state.
  * @param {boolean} state - The desired state (true for open, false for closed).
  */
  setMenuState(state: boolean) {
    this._isMenuOpen.set(state);
  }

  /**
  * Updates the application language, saves the preference to localStorage,
  * and triggers the 'translate' computed signal to update the UI.
  * @param {Lang} newLang - The new language code to be applied.
  */
  changeLanguage(newLang: Lang) {
    if (newLang === this.actualLanguage()) return;
    this.actualLanguage.set(newLang);
    localStorage.setItem('lang', newLang);
  }
}
