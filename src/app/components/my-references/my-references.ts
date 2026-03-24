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
        description:"During our collaboration, Artur was very reliable and helpful. His knowledge and speed were particularly noteworthy. He was always willing to explain his ideas to his team and approached problems calmly and confidently.",
        descriptionDE:"Während unserer Zusammenarbeit hat Artur sehr zuverlässig und hilfsbereit mitgearbeitet. Besonders stach sein Wissen und seine Schnelligkeit heraus. Er war stets bereit seinem Team seine Ideen zu erläutern und ging Probleme ruhig und gelassen an.",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
    {
      id:2,
      properties:{
        personName:"Lukas Müller",
        projectName:"Join",
        description:"Collaborating with Artur on the Join project was a great experience. He is a reliable team player who consistently maintains clean code and meets deadlines. His structured approach significantly simplified the integration of our individual tasks.",
        descriptionDE:"Die Zusammenarbeit mit Artur beim Join-Projekt verlief sehr reibungslos. Er ist ein zuverlässiger Teamplayer, der stets auf sauberen Code achtet und vereinbarte Deadlines einhält. Seine strukturierte Arbeitsweise hat die Integration unserer Teilaufgaben erheblich erleichtert.",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
    {
      id:3,
      properties:{
        personName:"Sarah Schmidt",
        projectName:"Kochwelt",
        description:"We worked together on the game logic. Artur stays calm while debugging and finds logical solutions even for complex problems. He is a helpful team member whose technical support is always dependable.",
        descriptionDE:"Wir haben gemeinsam an der Spiellogik gearbeitet. Artur bewahrt beim Debuggen die Ruhe und findet auch für komplexe Probleme logische Lösungen. Er ist ein hilfsbereites Teammitglied, auf dessen technische Unterstützung man sich immer verlassen kann.",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
  ]

  public menuService = inject(Menu);

  get translate() {
    return this.menuService.translate().myProjectSectionLang;
  }

}
