import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from './components/menu-bar/menu-bar';
import { HeroSection } from './components/hero-section/hero-section';
import { Footer } from './components/footer/footer';
import { WhyMeSection } from './components/why-me-section/why-me-section';
import { MySkillsSection } from "./components/my-skills-section/my-skills-section";
import { MyProjectSection } from './components/my-project-section/my-project-section';
import { ContactMeSection } from './components/contact-me-section/contact-me-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar, HeroSection, Footer, WhyMeSection, MySkillsSection, MyProjectSection, ContactMeSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-site');
}
