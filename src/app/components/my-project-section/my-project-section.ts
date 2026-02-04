import { Component } from '@angular/core';
import { MySkillsSection } from '../my-skills-section/my-skills-section';

type ProjectList = {
    id: number;
    properties: {
        duration: string;
        name: string;
        about: string;
        workProcess: string;
        groupWorkExperience: string;
        technologies:string[];
        technologiesIMG: string[];
        technologiesALT:string[];
        img: string;
        git: string;
        live: string;
    };
}[];

@Component({
  selector: 'app-my-project-section',
  imports: [],
  templateUrl: './my-project-section.html',
  styleUrl: './my-project-section.scss',
})
export class MyProjectSection extends MySkillsSection {

  projects:ProjectList=[
    {
      id:1,
      properties:{
        duration:"3 weeks",
        name:"El Pollo Loco",
        about:"Dynamic 2D platformer game built with Vanilla JavaScript and HTML5 Canvas, featuring object-oriented programming, custom physics, and professional JSDoc documentation.",
        workProcess:"How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
        groupWorkExperience: "How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
        technologies: [this.iconMobile[2][2],this.iconMobile[3][2],this.iconMobile[4][2],this.iconMobile[7][2]],
        technologiesIMG: [this.iconMobile[2][0],this.iconMobile[3][0],this.iconMobile[4][0],this.iconMobile[7][0]],
        technologiesALT:[this.iconMobile[2][1],this.iconMobile[3][1],this.iconMobile[4][1],this.iconMobile[7][1]],
        img: "/img/projects/ElPolloLoco.png",
        git:"https://github.com/ArturGr/El_Pollo_Loco.git",
        live:"https://artur-groblicki.developerakademie.net/El_Pollo_Loco/index.html",
      }
    },
        {
      id:2,
      properties:{
        duration:"1 week",
        name:"PokeDex",
        about:"A responsive PokéDex application powered by the PokéAPI. Built with Vanilla JavaScript (ES6+), featuring asynchronous data fetching, dynamic search, and detailed Pokémon stat visualizations.",
        workProcess:"How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
        groupWorkExperience: "How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
        technologies: [this.iconMobile[2][2],this.iconMobile[3][2],this.iconMobile[4][2],this.iconMobile[5][2]],
        technologiesIMG: [this.iconMobile[2][0],this.iconMobile[3][0],this.iconMobile[4][0],this.iconMobile[5][0]],
        technologiesALT:[this.iconMobile[2][1],this.iconMobile[3][1],this.iconMobile[4][1],this.iconMobile[5][1]],
        img: "/img/projects/Pokedex.png",
        git:"https://github.com/ArturGr/Pokedex.git",
        live:"https://artur-groblicki.developerakademie.net/Pokedex/index.html",
      }
    },
    {
      id:3,
      properties:{
        duration:"1 week",
        name:"Bestell App",
        about:"A food ordering application focused on shopping cart logic, real-time price calculations, and dynamic DOM updates. Built with Vanilla JavaScript.",
        workProcess:"How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
        groupWorkExperience: "How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
        technologies: [this.iconMobile[2][2],this.iconMobile[3][2],this.iconMobile[4][2],this.iconMobile[5][2]],
        technologiesIMG: [this.iconMobile[2][0],this.iconMobile[3][0],this.iconMobile[4][0],this.iconMobile[5][0]],
        technologiesALT:[this.iconMobile[2][1],this.iconMobile[3][1],this.iconMobile[4][1],this.iconMobile[5][1]],
        img: "/img/projects/Bestellapp.png",
        git:"https://github.com/ArturGr/Bestellapp.git",
        live:"https://artur-groblicki.developerakademie.net/Bestellapp/index.html",
      }
    },
    {
      id:4,
      properties:{
        duration:"x weeks",
        name:"JOIN - ongoing project",
        about:"This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
        workProcess:"test",
        groupWorkExperience: "test",
        technologies: [this.iconMobile[0][2],this.iconMobile[1][2],this.iconMobile[5][2],this.iconMobile[6][2],this.iconMobile[7][2]],
        technologiesIMG: [this.iconMobile[0][0],this.iconMobile[1][0],this.iconMobile[5][0],this.iconMobile[6][0],this.iconMobile[7][0]],
        technologiesALT:[this.iconMobile[0][1],this.iconMobile[1][1],this.iconMobile[5][1],this.iconMobile[6][1],this.iconMobile[7][1]],
        img: "",
        git:"",
        live:"",
      }
    }
  ]
  activeProject:number = 1;


}
