import { Component, inject } from '@angular/core';
import { Menu } from '../../services/menu';

type References= {
    id: number;
    properties: {
        personName: string;
        projectName: string;
        description: string;
        descriptionDE: string;
        linkedProfile: string;
    };
}[];

@Component({
  selector: 'app-my-references',
  imports: [],
  templateUrl: './my-references.html',
  styleUrl: './my-references.scss',
})
export class MyReferences {

  references: References=[
    {
      id:1,
      properties:{
        personName:"Luis Kronhardt",
        projectName:"Join",
        description:'"During our collaboration, Artur was very reliable and helpful. His knowledge and speed were particularly noteworthy. He was always willing to explain his ideas to his team and approached problems calmly and confidently."',
        descriptionDE:'"Während unserer Zusammenarbeit hat Artur sehr zuverlässig und hilfsbereit mitgearbeitet. Besonders stach sein Wissen und seine Schnelligkeit heraus. Er war stets bereit seinem Team seine Ideen zu erläutern und ging Probleme ruhig und gelassen an."',
        linkedProfile:"https://www.linkedin.com/",
      }
    },
    {
      id:2,
      properties:{
        personName:"Fiarazz Asghar",
        projectName:"Join",
        description:'"I just want to tell you that you’re a really strong developer. Your vast expertise and understanding of complex relationships are truly impressive. Your work has not only been helpful for our project, but absolutely crucial—without your contribution, we definitely wouldn’t be where we are now. Thank you very much for your dedication and the quality you consistently deliver!"',
        descriptionDE:'"Ich möchte dir einfach mal sagen, dass du ein richtig starker Entwickler bist. Dein enormes Fachwissen und dein Verständnis für komplexe Zusammenhänge sind wirklich beeindruckend. Deine Arbeit war für unser Projekt nicht nur hilfreich, sondern absolut entscheidend. Ohne deinen Beitrag wären wir definitiv nicht da, wo wir jetzt stehen. Vielen Dank für deinen Einsatz und die Qualität, die du konstant lieferst!"',
        linkedProfile:"https://www.linkedin.com/",
      }
    },
    {
      id:3,
      properties:{
        personName:"Volker Derksen",
        projectName:"Kochwelt",
        description:'"I got to know Artur as a very structured and logical developer. His quick grasp of concepts and his focused approach to tasks were particularly noticeable in our joint project. It’s clear he already has programming experience."',
        descriptionDE:'"Ich habe Artur als einen sehr strukturiert und logisch arbeitenden Entwickler kennengelernt. Besonders in unserem gemeinsamen Projekt ist mir seine schnelle Auffassungsgabe aufgefallen sowie die Art, wie zielgerichtet er an Aufgaben herangeht. Man merkt schnell, dass er bereits über Erfahrung in der Programmierung verfügt."',
        linkedProfile:"https://www.linkedin.com/in/volker-derksen-2a340633a/",
      }
    },
  ]

  public menuService = inject(Menu);

  /**
  * Getter that retrieves the localized content for the "My Projects" section.
  * Accesses the Menu service to provide titles, descriptions, and labels
  * specifically for the project showcase based on the current language.
  * @returns {any} An object containing translated strings for the projects section.
  */
  get translate() {
    return this.menuService.translate().myProjectSectionLang;
  }
}
