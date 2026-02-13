import { Component, inject } from '@angular/core';
import { MyLogo } from "../my-logo/my-logo";
import { SocialMediaButtons } from "../social-media-buttons/social-media-buttons";
import { RouterModule } from '@angular/router';
import { Menu } from '../../services/menu';

@Component({
  selector: 'app-footer',
  imports: [MyLogo, SocialMediaButtons, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  public menuService = inject(Menu);

  get translate() {
      return this.menuService.translate().footer;
  }
}
