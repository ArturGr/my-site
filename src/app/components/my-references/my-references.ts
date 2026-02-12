import { Component } from '@angular/core';
type References= {
    id: number;
    properties: {
        personName: string;
        projectName: string;
        description: string;
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
        personName:"Lorem ipsum",
        projectName:"Lorem ipsum dolor",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
    {
      id:2,
      properties:{
        personName:"Lorem ipsum",
        projectName:"Lorem ipsum dolor",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
    {
      id:3,
      properties:{
        personName:"Lorem ipsum",
        projectName:"Lorem ipsum dolor",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
        linkedProfile:"https://www.linkedin.com/",
      }
    },
  ]
}
