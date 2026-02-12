import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  private router = inject(Router);

  private _isMenuOpen = signal(false);
  isMenuOpen = this._isMenuOpen.asReadonly();

  private _isMobile = signal(window.innerWidth <= 768);
  isMobile = this._isMobile.asReadonly();

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

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.actualLanguage.set(savedLang);
    }
  }

  toggle() {
    this._isMenuOpen.update(state => !state);
  }
  setMenuState(state: boolean) {
    this._isMenuOpen.set(state);
  }

  actualLanguage = signal<string>('EN');

  changeLanguage(newLang: string) {
    if (newLang === this.actualLanguage()) return;
    this.actualLanguage.set(newLang);
    localStorage.setItem('lang', newLang);
  }
}
