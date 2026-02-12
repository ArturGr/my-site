import { Component } from '@angular/core';
import { MenuBar } from '../menu-bar/menu-bar';

@Component({
  selector: 'app-social-media-buttons',
  imports: [],
  templateUrl: './social-media-buttons.html',
  styleUrl: './social-media-buttons.scss',
})
export class SocialMediaButtons extends MenuBar {
  pathToGitHub:string = "https://github.com/ArturGr";
  pathToLinkedin:string = "https://linkedin.com/in/artur-groblicki/";
}
