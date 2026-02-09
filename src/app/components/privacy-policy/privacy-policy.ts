import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { MenuBar } from '../menu-bar/menu-bar';

@Component({
  selector: 'app-privacy-policy',
  imports: [Footer, MenuBar],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {

}
