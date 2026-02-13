import { Component, inject } from '@angular/core';
import { Menu } from '../../services/menu';
import { NavigationService } from '../../services/navigation-service';

@Component({
  selector: 'app-my-skills-section',
  imports: [],
  templateUrl: './my-skills-section.html',
  styleUrl: './my-skills-section.scss',
})
export class MySkillsSection{
  iconDesktop:string[][]=[
    ["./assets/img/skills/0-Angular.png","Angular Icon"],
    ["./assets/img/skills/1-TypeScript.png","TypeScript Icon"],
    ["./assets/img/skills/2-JavaScript.png","JavaScript Icon"],
    ["./assets/img/skills/3-HTML.png","HTML Icon"],
    ["./assets/img/skills/4-CSS.png","CSS Icon"],
    ["./assets/img/skills/5-Rest-Api.png","RestAPI Icon"],
    ["./assets/img/skills/6-Firebase.png","Firebase Icon"],
    ["./assets/img/skills/7-GIT.png","GIT Icon"],
    ["./assets/img/skills/8-Scrum.png","Scrum Icon"],
    ["./assets/img/skills/9-Material-Design.png","Material Design Icon"],
  ];

  iconMobile:string[][]=[
    ["./assets/img/skills/mobile/0-Angular.png","Angular Icon", "Angular"],
    ["./assets/img/skills/mobile/1-TypeScript.png","TypeScript Icon","TypeScript"],
    ["./assets/img/skills/mobile/2-JavaScript.png","JavaScript Icon","JavaScript"],
    ["./assets/img/skills/mobile/3-HTML.png","HTML Icon","HTML"],
    ["./assets/img/skills/mobile/4-CSS.png","CSS Icon","CSS"],
    ["./assets/img/skills/mobile/5-Rest-Api.png","RestAPI Icon","RestAPI"],
    ["./assets/img/skills/mobile/6-Firebase.png","Firebase Icon","Firebase"],
    ["./assets/img/skills/mobile/7-GIT.png","GIT Icon","GIT"],
    ["./assets/img/skills/mobile/8-Scrum.png","Scrum Icon","Scrum"],
    ["./assets/img/skills/mobile/9-Material-Design.png","Material Design Icon","Material Design"],
  ];

  currentlyLearning:string[][]=[
    ["./assets/img/skills/currently-learning/React.png","React Icon"],
    ["./assets/img/skills/currently-learning/Vue-JS.png","Vue JS Icon"],
  ];

  protected menuService = inject(Menu);
  public navService = inject(NavigationService);

  get isMobile() {
    return this.menuService.isMobile();
  }

  get translate() {
    return this.menuService.translate().mySkillsSectionLang;
  }

}
