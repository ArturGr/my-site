import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  private _isMenuOpen = signal(false);
  isMenuOpen = this._isMenuOpen.asReadonly();
  toggle() {
    this._isMenuOpen.update(state => !state);
  }
  setMenuState(state: boolean) {
    this._isMenuOpen.set(state);
  }
}
