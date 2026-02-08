import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content-component/main-content-component';
import { LegalNotice } from './components/legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: MainContentComponent},
  { path: 'legal-notice', component: LegalNotice },
  { path: '**', redirectTo: '' }
];
