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
  currentSlideIndex = signal(0);
  displayText = signal(this.menuService.actualLanguage() === 'DE' ? this.slides[0].fullTextDE : this.slides[0].fullTextEN);
  isAnimatingWhySlide = signal(false);

  /**
  * Getter that retrieves the current visibility state of the navigation menu.
  * @returns {boolean} True if the menu is open.
  */
  get isMenuOpen() {
    return this.menuService.isMenuOpen();
  }

  /**
  * Getter that retrieves the localized content for the "Why Me" section.
  * @returns {any} Translated strings for headers and static text in this section.
  */
  get translate() {
    return this.menuService.translate().whyMeSectionLang;
  }

  /**
  * Orchestrates the full typewriter animation sequence.
  * It iterates through the slides, triggering backspacing and typing effects
  * asynchronously. Uses a guard flag to prevent overlapping animation cycles.
  * @returns {Promise<void>}
  */
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

  /**
  * Manages the lifecycle of a single slide's text display.
  * Updates the current index, determines the correct language text,
  * and triggers the typing effect followed by a 1-second pause.
  * @param {number} index - The index of the slide to be displayed.
  * @private
  */
  private async runSlideCycle(index: number) {
    this.currentSlideIndex.set(index);
    const lang = this.menuService.actualLanguage();
    const textToType = lang === 'DE' ? this.slides[index].fullTextDE : this.slides[index].fullTextEN;
    await this.typeEffect(textToType);
    return new Promise(res => setTimeout(res, 1000));
  }

  /**
  * Simulates a typing effect by incrementally updating the displayText signal.
  * @param {string} text - The full string to be typed out.
  * @returns {Promise<void>} Resolves when the entire string has been typed.
  * @private
  */
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

  /**
  * Simulates a backspacing effect by incrementally removing characters from the displayText signal.
  * @returns {Promise<void>} Resolves when the text has been completely cleared.
  * @private
  */
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

  /**
  * Calculates the character index used for highlighting the first few letters of a string.
  * Specifically used to apply a different style (color/weight) to the beginning of the slide text.
  * @param {string} text - The string to analyze.
  * @returns {number} The index position after the first three non-space characters.
  */
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
