import { Component } from '@angular/core';
import { ContactDetails } from '@app/components/model/contact-details';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contactDetails: ContactDetails = {
    address: 'Kadahapola, Horambawa',
    email: 'nagamochi.jacademy@gmail.com',
    telephone: '+94 70 326 9897',
  };
}
