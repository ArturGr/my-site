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
        personName:"Sahra Mueller",
        projectName:"DA Bublle",
        description:"Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.",
        linkedProfile:"#",
      }
    },
    {
      id:2,
      properties:{
        personName:"James Rugman",
        projectName:"Join",
        description:"Claudia is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague.",
        linkedProfile:"#",
      }
    },
    {
      id:3,
      properties:{
        personName:"Evelyn Marx",
        projectName:"Sharkie",
        description:"She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.",
        linkedProfile:"#",
      }
    },
  ]
}
