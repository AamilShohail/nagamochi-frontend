import { Component } from '@angular/core';
import { ContactDetails } from '@app/components/model/contact-details.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contactDetails: ContactDetails = {
    address: 'Kadahapola, Narammala',
    email: 'nagamochi.jpacademy@gmail.com',
    whatsapp: '+94 70 326 9897',
    telephone: '+94 71 181 7114',
  };
}
