import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pageTitle = 'NAGAMOCHI Japanese Language and Skills Development Academy';
  subTitle = 'Trained by special trainers';
}
