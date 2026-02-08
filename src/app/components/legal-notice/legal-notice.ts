import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuBar } from "../menu-bar/menu-bar";

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule, RouterLink, MenuBar],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {

}
