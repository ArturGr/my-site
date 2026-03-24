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
        personName:"Lorem ipsum",
        projectName:"Join",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
        descriptionDE:"",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
    {
      id:3,
      properties:{
        personName:"Lorem ipsum",
        projectName:"Lorem ipsum dolor",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
        descriptionDE:"",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
  ]

  public menuService = inject(Menu);

  get translate() {
    return this.menuService.translate().myProjectSectionLang;
  }

}
