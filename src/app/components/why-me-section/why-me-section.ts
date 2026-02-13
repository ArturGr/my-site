import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { Menu } from '../../services/menu';
import { NavigationService } from '../../services/navigation-service';

@Component({
  selector: 'app-why-me-section',
  imports: [],
  templateUrl: './why-me-section.html',
  styleUrl: './why-me-section.scss',
})
export class WhyMeSection {

  readonly slides = [
    {icon: 'Location.png', fullTextEN: 'I am located in Ainring.', fullTextDE: 'Ich befinde mich in Ainring.'},
    {icon: 'Relocation.png', fullTextEN: 'I am open to relocate.', fullTextDE: 'Ich bin bereit, umzuziehen.'},
    {icon: 'Remote.png', fullTextEN: 'I am open to work remote.', fullTextDE: 'Ich bin offen für remote Arbeit.'}
  ];

  public menuService = inject(Menu);
  public navService = inject(NavigationService);

  get isMenuOpen() {
    return this.menuService.isMenuOpen();
  }

  get translate() {
    return this.menuService.translate().whyMeSectionLang;
  }

  currentSlideIndex = signal(0);
  displayText = signal(this.menuService.actualLanguage() === 'DE' ? this.slides[0].fullTextDE : this.slides[0].fullTextEN);
  isAnimatingWhySlide = signal(false);

  //
  async triggerAnimation() {
    if (this.isAnimatingWhySlide() ) return;
    this.isAnimatingWhySlide.set(true);
    for (let i = 1; i < this.slides.length; i++) {
      await this.backspaceEffect();
      await this.runSlideCycle(i);
    }
    await this.backspaceEffect();
    await this.runSlideCycle(0);
    this.isAnimatingWhySlide.set(false);
  }

  //
  private async runSlideCycle(index: number) {
    this.currentSlideIndex.set(index);
    const lang = this.menuService.actualLanguage();
    const textToType = lang === 'DE' ? this.slides[index].fullTextDE : this.slides[index].fullTextEN;

    await this.typeEffect(textToType);
    return new Promise(res => setTimeout(res, 1000));
}

  //
  private typeEffect(text: string): Promise<void> {
    return new Promise(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        this.displayText.set(text.substring(0, i + 1));
        if (++i === text.length) {
          clearInterval(interval);
          resolve();
        }
      }, 70);
    });
  }

  //
  private backspaceEffect(): Promise<void> {
    return new Promise(resolve => {
      let text = this.displayText();
      const interval = setInterval(() => {
        text = text.slice(0, -1);
        this.displayText.set(text);
        if (text.length === 0) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    });
  }

  //
  getHighlightIndex(text: string): number {
    let letterCount = 0;
    let i = 0;
    while (i < text.length && letterCount < 3) {
      if (text[i] !== ' ') letterCount++;
      i++;
    }
    return i;
  }
}
