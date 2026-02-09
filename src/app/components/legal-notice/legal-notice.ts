import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBar } from "../menu-bar/menu-bar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule, MenuBar, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {

}
