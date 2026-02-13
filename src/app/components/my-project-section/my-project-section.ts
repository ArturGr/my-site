import { Component } from '@angular/core';
import { MySkillsSection } from '../my-skills-section/my-skills-section';

type ProjectList = {
    id: number;
    properties: {
        duration: string;
        durationDE: string;
        name: string;
        about: string;
        aboutDE: string;
        workProcess: string;
        workProcessDE: string;
        groupWorkExperience: string;
        groupWorkExperienceDE: string;
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
        durationDE:"3 Wochen",
        name:"El Pollo Loco",
        about: "Dynamic 2D platformer game built with Vanilla JavaScript and HTML5 Canvas, featuring object-oriented programming, custom physics, and professional JSDoc documentation.",
        aboutDE: "Dynamisches 2D-Platformer-Spiel, entwickelt mit Vanilla JavaScript und HTML5 Canvas, basierend auf objektorientierter Programmierung, individueller Physik-Engine und professioneller JSDoc-Dokumentation.",
        workProcess:"I used OOP to create modular classes and a central game loop for real-time physics and animations. Following Clean Code principles ensured the project remained organized, scalable, and easy to maintain throughout development.",
        workProcessDE: "Ich habe OOP genutzt, um modulare Klassen und einen zentralen Game-Loop für Echtzeit-Physik und Animationen zu erstellen. Die Einhaltung von Clean-Code-Prinzipien stellte sicher, dass das Projekt während der gesamten Entwicklung organisiert, skalierbar und wartungsfreundlich blieb.",
        groupWorkExperience: "I managed this solo project using Git for version control and structured progress tracking. Acting as both architect and developer, I ensured seamless module integration through disciplined documentation and rigorous independent testing.",
        groupWorkExperienceDE: "Ich habe dieses Soloprojekt mit Git zur Versionskontrolle und strukturierter Fortschrittsverfolgung verwaltet. In meiner Doppelrolle als Architekt und Entwickler stellte ich durch disziplinierte Dokumentation und gründliche unabhängige Tests eine nahtlose Modulintegration sicher.",
        technologies: [this.iconMobile[2][2],this.iconMobile[3][2],this.iconMobile[4][2],this.iconMobile[7][2]],
        technologiesIMG: [this.iconMobile[2][0],this.iconMobile[3][0],this.iconMobile[4][0],this.iconMobile[7][0]],
        technologiesALT:[this.iconMobile[2][1],this.iconMobile[3][1],this.iconMobile[4][1],this.iconMobile[7][1]],
        img: "/assets/img/projects/ElPolloLoco.png",
        git:"https://github.com/ArturGr/El_Pollo_Loco.git",
        live:"https://artur-groblicki.developerakademie.net/El_Pollo_Loco/index.html",
      }
    },
    {
      id:2,
      properties:{
        duration:"1 week",
        durationDE:"1 Woche",
        name:"PokeDex",
        about: "A responsive PokéDex application powered by the PokéAPI. Built with Vanilla JavaScript (ES6+), featuring asynchronous data fetching, dynamic search, and detailed Pokémon stat visualizations.",
        aboutDE: "Eine responsive PokéDex-Anwendung auf Basis der PokéAPI. Entwickelt mit Vanilla JavaScript (ES6+), bietet sie asynchrone Datenabfrage, dynamische Suche und detaillierte Visualisierungen der Pokémon-Statistiken.",
        workProcess: "I integrated a REST API using asynchronous functions to fetch and render Pokémon data dynamically. I used a component-based structure and implemented search filtering to manage large datasets efficiently while maintaining high performance.",
        workProcessDE: "Ich habe eine REST-API mithilfe asynchroner Funktionen integriert, um Pokémon-Daten dynamisch abzurufen und zu rendern. Dabei nutzte ich eine komponentbasierte Struktur und implementierte Suchfilter, um große Datensätze effizient zu verwalten und eine hohe Performance beizubehalten.",
        groupWorkExperience: "Working solo, I managed the full lifecycle from API integration to responsive UI design using Git. I acted as my own project manager, ensuring clean data separation and cross-device functionality through disciplined development.",
        groupWorkExperienceDE: "In diesem Soloprojekt habe ich den gesamten Lebenszyklus von der API-Integration bis zum responsiven UI-Design mittels Git verwaltet. Ich agierte als mein eigener Projektmanager und stellte durch disziplinierte Entwicklung eine saubere Datentrennung sowie volle Funktionalität auf verschiedenen Endgeräten sicher.",
        technologies: [this.iconMobile[2][2],this.iconMobile[3][2],this.iconMobile[4][2],this.iconMobile[5][2],this.iconMobile[7][2]],
        technologiesIMG: [this.iconMobile[2][0],this.iconMobile[3][0],this.iconMobile[4][0],this.iconMobile[5][0],this.iconMobile[7][0]],
        technologiesALT:[this.iconMobile[2][1],this.iconMobile[3][1],this.iconMobile[4][1],this.iconMobile[5][1],this.iconMobile[7][1]],
        img: "/assets/img/projects/Pokedex.png",
        git:"https://github.com/ArturGr/Pokedex.git",
        live:"https://artur-groblicki.developerakademie.net/Pokedex/index.html",
      }
    },
    {
      id:3,
      properties:{
        duration:"1 week",
        durationDE:"1 Woche",
        name:"Bestell-App",
        about:"A food ordering application focused on shopping cart logic, real-time price calculations, and dynamic DOM updates. Built with Vanilla JavaScript.",
        aboutDE: "Eine Anwendung zur Essensbestellung mit Fokus auf Warenkorb-Logik, Preisberechnungen in Echtzeit und dynamischen DOM-Aktualisierungen. Entwickelt mit Vanilla JavaScript.",
        workProcess: "I built a modular architecture to separate product logic from the shopping cart and checkout systems. I focused on dynamic state management to ensure real-time UI updates and a responsive, intuitive user experience.",
        workProcessDE: "Ich habe eine modulare Architektur aufgebaut, um die Produktlogik von den Warenkorb- und Checkout-Systemen zu trennen. Mein Fokus lag auf dynamischem Zustandsmanagement (State Management), um Echtzeit-UI-Updates und eine intuitive Benutzererfahrung zu gewährleisten.",
        groupWorkExperience: "I independently handled the roadmap and development, using Git to maintain a structured workflow. By acting as both architect and tester, I ensured seamless logic integration and a reliable, error-free ordering process.",
        groupWorkExperienceDE: "Ich habe die Roadmap und die Entwicklung eigenständig verwaltet und Git genutzt, um einen strukturierten Workflow beizubehalten. In der Doppelrolle als Architekt und Tester stellte ich eine nahtlose Integration der Logik sowie einen zuverlässigen, fehlerfreien Bestellprozess sicher.",
        technologies: [this.iconMobile[2][2],this.iconMobile[3][2],this.iconMobile[4][2],this.iconMobile[7][2]],
        technologiesIMG: [this.iconMobile[2][0],this.iconMobile[3][0],this.iconMobile[4][0],this.iconMobile[7][0]],
        technologiesALT:[this.iconMobile[2][1],this.iconMobile[3][1],this.iconMobile[4][1],this.iconMobile[7][1]],
        img: "/assets/img/projects/Bestellapp.png",
        git:"https://github.com/ArturGr/Bestellapp.git",
        live:"https://artur-groblicki.developerakademie.net/Bestellapp/index.html",
      }
    },
    {
      id:4,
      properties:{
        duration:"x weeks",
        durationDE:"x Wochen",
        name:"Ongoing project",
        about:"JOIN - this App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
        aboutDE: "JOIN - diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeit-Messaging und eine robuste Kanal-Organisation.",
        workProcess:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla.",
        workProcessDE:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla.",
        groupWorkExperience: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla.",
        groupWorkExperienceDE: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla.",
        technologies: [this.iconMobile[0][2],this.iconMobile[1][2],this.iconMobile[5][2],this.iconMobile[6][2],this.iconMobile[7][2]],
        technologiesIMG: [this.iconMobile[0][0],this.iconMobile[1][0],this.iconMobile[5][0],this.iconMobile[6][0],this.iconMobile[7][0]],
        technologiesALT:[this.iconMobile[0][1],this.iconMobile[1][1],this.iconMobile[5][1],this.iconMobile[6][1],this.iconMobile[7][1]],
        img: "/assets/img/projects/Placeholder.png",
        git:"https://github.com/",
        live:"#",
      }
    }
  ]
  activeProject:number = 1;

  get translateProject() {
    return this.menuService.translate().myProjectSectionLang;
  }

  get isDE() {
    return this.menuService.actualLanguage() === 'DE';
  }
}
