import { Component } from '@angular/core';
import { MenuBar } from '../menu-bar/menu-bar';

@Component({
  selector: 'app-my-skills-section',
  imports: [],
  templateUrl: './my-skills-section.html',
  styleUrl: './my-skills-section.scss',
})
export class MySkillsSection extends MenuBar {
  iconDesktop:string[][]=[
    ["./img/skills/0-Angular.png","Angular Icon"],
    ["./img/skills/1-TypeScript.png","TypeScript Icon"],
    ["./img/skills/2-JavaScript.png","JavaScript Icon"],
    ["./img/skills/3-HTML.png","HTML Icon"],
    ["./img/skills/4-CSS.png","CSS Icon"],
    ["./img/skills/5-Rest-Api.png","RestAPI Icon"],
    ["./img/skills/6-Firebase.png","Firebase Icon"],
    ["./img/skills/7-GIT.png","GIT Icon"],
    ["./img/skills/8-Scrum.png","Scrum Icon"],
    ["./img/skills/9-Material-Design.png","Material Design Icon"],
  ];

  iconMobile:string[][]=[
    ["./img/skills/mobile/0-Angular.png","Angular Icon", "Angular"],
    ["./img/skills/mobile/1-TypeScript.png","TypeScript Icon","TypeScript"],
    ["./img/skills/mobile/2-JavaScript.png","JavaScript Icon","JavaScript"],
    ["./img/skills/mobile/3-HTML.png","HTML Icon","HTML"],
    ["./img/skills/mobile/4-CSS.png","CSS Icon","CSS"],
    ["./img/skills/mobile/5-Rest-Api.png","RestAPI Icon","RestAPI"],
    ["./img/skills/mobile/6-Firebase.png","Firebase Icon","Firebase"],
    ["./img/skills/mobile/7-GIT.png","GIT Icon","GIT"],
    ["./img/skills/mobile/8-Scrum.png","Scrum Icon","Scrum"],
    ["./img/skills/mobile/9-Material-Design.png","Material Design Icon","Material Design"],
  ];

  currentlyLearning:string[][]=[
    ["./img/skills/currently-learning/React.png","React Icon"],
    ["./img/skills/currently-learning/Vue-JS.png","Vue JS Icon"],
  ];



}
