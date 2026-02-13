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

  constructor(private router: Router) {
    effect(() => {
      const isOpen = this.menuService.isMenuOpen();
      if (!isOpen && !this.isAnimating) {
        this.path.set(this.imageList[0]);
      }
    });
  }

  get isMenuOpen() {
    return this.menuService.isMenuOpen();
  }

  get translate() {
    return this.menuService.translate().menuLang;
  }

  //animacja burger menu
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

  //funkcja przypisujaca klase "active" do przyciskow jezykowych menu i wywolanie zmiany jezyka
  activLangBtn(lang: Lang) {
    const btnId = lang + '-btn';
    this.activedLangBtn = btnId;
    this.lastActiveLangBtn = btnId;
    this.menuService.changeLanguage(lang);
  }

  //funkcja dla mouseover na przycisku jeyzkowym
  handleLangHover(btnId: string) {
    if(btnId == this.lastActiveLangBtn) return;
    this.activedLangBtn = '';
  }

  //funkcja dla mouseleave na przycosku jezykowym
  handleLangLeave() {
    this.activedLangBtn = this.lastActiveLangBtn;
  }

}
