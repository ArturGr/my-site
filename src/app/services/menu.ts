import { Injectable, signal, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  private _isMenuOpen = signal(false);
  isMenuOpen = this._isMenuOpen.asReadonly();

  private _isMobile = signal(window.innerWidth <= 768);
  isMobile = this._isMobile.asReadonly();

  constructor() {
    window.addEventListener('resize', () => {
      this._isMobile.set(window.innerWidth <= 768);
      if (window.innerWidth > 768 && this._isMenuOpen()) {
        this.setMenuState(false);
      }
    });
  }

  toggle() {
    this._isMenuOpen.update(state => !state);
  }
  setMenuState(state: boolean) {
    this._isMenuOpen.set(state);
  }
}
