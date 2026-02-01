import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { MenuBar } from '../menu-bar/menu-bar';

@Component({
  selector: 'app-why-me-section',
  imports: [],
  templateUrl: './why-me-section.html',
  styleUrl: './why-me-section.scss',
})
export class WhyMeSection extends MenuBar {

  readonly slides = [
    {icon: 'Location.png', fullText: 'I am located in Ainring.'},
    {icon: 'Relocation.png', fullText: 'I am open to relocate.'},
    {icon: 'Remote.png', fullText: 'I am open to work remote.'}
  ];
  currentSlideIndex = signal(0);
  displayText = signal(this.slides[0].fullText);
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
    await this.typeEffect(this.slides[index].fullText);
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
