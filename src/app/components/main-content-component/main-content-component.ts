import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from '../hero-section/hero-section';
import { ContactMeSection } from '../contact-me-section/contact-me-section';
import { MenuBar } from '../menu-bar/menu-bar';
import { WhyMeSection } from '../why-me-section/why-me-section';
import { MySkillsSection } from '../my-skills-section/my-skills-section';
import { MyProjectSection } from '../my-project-section/my-project-section';
import { MyReferences } from '../my-references/my-references';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    HeroSection,
    MenuBar,
    WhyMeSection,
    MySkillsSection,
    MyProjectSection,
    MyReferences,
    ContactMeSection,
  ],
  templateUrl: './main-content-component.html',
  styleUrl: './main-content-component.scss'
})
export class MainContentComponent {}
