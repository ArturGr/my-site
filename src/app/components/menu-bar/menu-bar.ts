import { MyLogo } from './../my-logo/my-logo';
import { Component, signal, HostListener, effect, inject} from '@angular/core';
import { Menu } from '../../services/menu';
import { NavigationService } from '../../services/navigation-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [MyLogo],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  imageList: (string)[]=[
    "./burger-menu/default.png",
    "./burger-menu/burger-01.png",
    "./burger-menu/burger-02.png",
    "./burger-menu/close.png"
  ];
  path = signal(this.imageList[0]);
  isAnimating:boolean = false;
  activedLangBtn:string = "EN-btn";
  lastActiveLangBtn:string = "EN-btn";
  actualLanguage:string = "EN";
  activedButton:string = "";
  isManualScrolling: boolean = false;
  protected menuService = inject(Menu);
  public navService = inject(NavigationService);
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

  //animacja burger menu
  toggleMenu() {
   if (this.isAnimating) return;
    this.isAnimating = true;
    const FRAMES = this.isMenuOpen ? [...this.imageList].reverse() : [...this.imageList];
    let i = 0;
    const interval = setInterval(() => {
      this.path.set(FRAMES[i]);
      i++;
      if (i === FRAMES.length) {
        clearInterval(interval);
        this.isAnimating = false;
        this.menuService.toggle();
      }
    }, 30);
  }

  //funkcja przypisujaca klase "active" do przyciskow jezykowych menu i wywolanie zmiany jezyka
  activLangBtn(btnId: string) {
    this.activedLangBtn = btnId;
    this.lastActiveLangBtn = btnId;
    const NEW_LANGUAGE = btnId.replace('-btn', '');
    this.changeLanguage(NEW_LANGUAGE);
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

  //funkcja tlumaczaca storne na inny jezyk
  changeLanguage(LANGUAGE:string){
    if(LANGUAGE == this.actualLanguage) return;
    console.log("Zmiana jezyka na " + LANGUAGE);
    this.actualLanguage = LANGUAGE;
  }

  //funkcja logujaca, ktora sekcja jest widocyna - do uprzatnienia/uproszczenia
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition < 300) {
      if (this.activedButton !== '') {
        this.activedButton = '';
      }
      if (scrollPosition === 0) {
        this.isManualScrolling = false;
      }
      return;
    }
    if (this.isManualScrolling) {
      return;
    }
    const SECTIONS = document.querySelectorAll('.scroll-section');
    const DETECTION_LINE = window.innerHeight *0.3;
    let found = false;
    SECTIONS.forEach((section) => {
      const RECT = section.getBoundingClientRect();
      if (RECT.top <= DETECTION_LINE && RECT.bottom >= DETECTION_LINE) {
        const buttonId = section.id.replace('-section', '-btn');
        if (this.activedButton !== buttonId) {
          this.activedButton = buttonId;
        }
        found = true;
      }
    });
    if (!found) {
      this.activedButton = "";
    }
  }
}
