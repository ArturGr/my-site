import { MyLogo } from './../my-logo/my-logo';
import { Component, signal, effect, inject} from '@angular/core';
import { Menu } from '../../services/menu';
import { NavigationService } from '../../services/navigation-service';
import { Router } from '@angular/router';
import { Lang } from '../../models/translations';

@Component({
  selector: 'app-menu-bar',
  imports: [MyLogo],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  imageList: (string)[]=[
    "./assets/img/burger-menu/default.png",
    "./assets/img/burger-menu/burger-01.png",
    "./assets/img/burger-menu/burger-02.png",
    "./assets/img/burger-menu/close.png"
  ];
  public menuService = inject(Menu);
  public navService = inject(NavigationService);
  path = signal(this.imageList[0]);
  isAnimating:boolean = false;
  activedLangBtn: string = this.menuService.actualLanguage() + '-btn';
  lastActiveLangBtn: string = this.menuService.actualLanguage() + '-btn';
  actualLanguage:string = "EN";
  isManualScrolling: boolean = false;
  isMobile: boolean = window.innerWidth <= 768;

  /**
  * Initializes the component and sets up a reactive effect to monitor the menu state.
  * If the menu is closed and no animation is running, it resets the icon path to the default frame.
  * @param {Router} router - Angular Router for navigation.
  */
  constructor(private router: Router) {
    effect(() => {
      const isOpen = this.menuService.isMenuOpen();
      if (!isOpen && !this.isAnimating) {
        this.path.set(this.imageList[0]);
      }
    });
  }

  /**
  * Getter that checks if the navigation menu is currently open via the Menu service.
  * @returns {boolean} True if the menu is open, false otherwise.
  */
  get isMenuOpen() {
    return this.menuService.isMenuOpen();
  }

  /**
  * Getter that retrieves the localized content for the menu section.
  * @returns {any} An object containing translated menu labels and navigation links.
  */
  get translate() {
    return this.menuService.translate().menuLang;
  }

  /**
  * Triggers the frame-by-frame menu animation (opening or closing).
  * It reverses the image list based on the current state and updates the icon path
  * at a fixed interval (30ms). Prevents concurrent animations using a guard flag.
  */
  toggleMenu() {
   if (this.isAnimating) return;
    this.isAnimating = true;
    const FRAMES = this.isMenuOpen ? [...this.imageList].reverse() : [...this.imageList];
    let i = 0;
    const INTERVAL = setInterval(() => {
      this.path.set(FRAMES[i]);
      i++;
      if (i === FRAMES.length) {
        clearInterval(INTERVAL);
        this.isAnimating = false;
        this.menuService.toggle();
      }
    }, 30);
  }

  /**
  * Activates the selected language and updates the visual state of the language buttons.
  * Communicates the change to the Menu service to update the application's translation.
  * @param {Lang} lang - The language code (e.g., 'EN', 'DE') to be activated.
  */
  activLangBtn(lang: Lang) {
    const btnId = lang + '-btn';
    this.activedLangBtn = btnId;
    this.lastActiveLangBtn = btnId;
    this.menuService.changeLanguage(lang);
  }

  /**
  * Handles the hover effect on language buttons.
  * Temporarily resets the active button styling if the hovered button is not the currently active one.
  * @param {string} btnId - The unique identifier of the hovered language button.
  */
  handleLangHover(btnId: string) {
    if(btnId == this.lastActiveLangBtn) return;
    this.activedLangBtn = '';
  }

  /**
  * Restores the visual highlight to the last active language button when the mouse leaves the area.
  */
  handleLangLeave() {
    this.activedLangBtn = this.lastActiveLangBtn;
  }
}
