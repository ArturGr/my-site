import { Component } from '@angular/core';
import { MyLogo } from "../my-logo/my-logo";
import { SocialMediaButtons } from "../social-media-buttons/social-media-buttons";

@Component({
  selector: 'app-footer',
  imports: [MyLogo, SocialMediaButtons],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
