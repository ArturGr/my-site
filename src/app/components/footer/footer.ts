import { Component } from '@angular/core';
import { MyLogo } from "../my-logo/my-logo";
import { SocialMediaButtons } from "../social-media-buttons/social-media-buttons";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MyLogo, SocialMediaButtons, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
