import { MyLogo } from './../my-logo/my-logo';
import { Component, signal, HostListener, inject} from '@angular/core';
import { Menu } from '../../services/menu';
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
  isMobile: boolean = window.innerWidth <= 768;

  constructor(private router: Router) {}

  //pobranie stanu burgermenu
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

  //funkcja wyliczajaca parametry do ruchu ekranu przy skakaniu do sekcji
  private easeOutBack(T: number): number {
    const S = 1.70158;
    return ((T = T - 1) * T * ((S + 1) * T + S) + 1);
  }

  //funcka skoku do sekcji - do uprzatnienia/uproszczenia
  // scrollToSection(sectionId: string, activedBtn:string) {
  //   this.activedButton = activedBtn;
  //   this.isManualScrolling = true;
  //   const ELEMENT = document.getElementById(sectionId);
  //   let headerHeight = 104;
  //   if(window.innerWidth <= 768) {
  //     headerHeight = 0;
  //   }
  //   if (ELEMENT) {
  //     const START_Y = window.scrollY;
  //     const TARGET_Y = (ELEMENT.getBoundingClientRect().top + START_Y) - headerHeight;
  //     const DISTANCE = TARGET_Y - START_Y;
  //     const DURATION = 800;
  //     let startTimestamp: number;
  //     const STEP = (currentTimestamp: number) => {
  //       if (!startTimestamp) startTimestamp = currentTimestamp;
  //       const ELAPSED = currentTimestamp - startTimestamp;
  //       const PROGRESS = Math.min(ELAPSED / DURATION, 1);
  //       const BACK_PROGRESS = this.easeOutBack(PROGRESS);
  //       window.scrollTo(0, START_Y + (DISTANCE * BACK_PROGRESS));
  //       if (PROGRESS < 1) {
  //         window.requestAnimationFrame(STEP);
  //       } else {
  //         setTimeout(() => {
  //           this.isManualScrolling = false;
  //         }, 2000);
  //       }
  //     };
  //     window.requestAnimationFrame(STEP);
  //   }
  // }
  scrollToSection(sectionId: string, activedBtn: string) {
  this.activedButton = activedBtn;
  this.isManualScrolling = true;

  // Sprawdzamy, czy element istnieje w obecnym widoku
  const ELEMENT = document.getElementById(sectionId);

  if (ELEMENT) {
    // JEŚLI ELEMENT ISTNIEJE (jesteśmy na MainContent)
    this.animateScroll(ELEMENT);
  } else {
    // JEŚLI ELEMENTU NIE MA (jesteśmy np. w Legal Notice)
    // 1. Nawigujemy do strony głównej
    this.router.navigate(['/']).then(() => {
      // 2. Czekamy chwilę, aż Angular wyrenderuje MainContent
      setTimeout(() => {
        const REHYDRATED_ELEMENT = document.getElementById(sectionId);
        if (REHYDRATED_ELEMENT) {
          this.animateScroll(REHYDRATED_ELEMENT);
        }
      }, 100); // Mały timeout, aby DOM zdążył się "odświeżyć"
    });
  }
}

// Wydzielona logika animacji, którą już napisałeś
private animateScroll(ELEMENT: HTMLElement) {
  let headerHeight = 104;
  if (window.innerWidth <= 768) {
    headerHeight = 0;
  }

  const START_Y = window.scrollY;
  const TARGET_Y = (ELEMENT.getBoundingClientRect().top + START_Y) - headerHeight;
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
      }, 2000);
    }
  };

  window.requestAnimationFrame(STEP);
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
    if (this.isManualScrolling) return;
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

  // funkcja przelaczajaca dostepnosc i reakcje burger menu
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = window.innerWidth;
    this.isMobile = width <= 768;
    if (width >= 768 && this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}
