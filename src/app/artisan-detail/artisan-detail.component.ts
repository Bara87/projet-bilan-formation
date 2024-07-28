import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanDataService, Artisan } from '../artisan-data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../environments/environment';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss']
})
export class ArtisanDetailComponent implements OnInit {
  artisan: Artisan | undefined;

  name = '';
  subject = '';
  message = '';
  formSubmitted = false; 

  constructor(
    private router: Router,
    private artisanDataService: ArtisanDataService
  ) {}

  ngOnInit(): void {
    this.artisan = this.artisanDataService.getCurrentArtisan();
    if (this.artisan) {
      console.log('Artisan found:', this.artisan);
    } else {
      console.log('No artisan found.');
    }

    // Initialiser EmailJS avec la clé publique
    emailjs.init(environment.emailUserID);
  }

  submitForm() {
    this.formSubmitted = true;

    if (!this.name || !this.subject || !this.message) {
      return;
    }

    const templateParams = {
      to_name: environment.emailRecipient,
      from_name: this.name,
      subject: this.subject,
      message: `You got a new message from ${this.name}:\n\nRegarding: ${this.subject}:\n\nMessage: ${this.message}\n\nBest wishes,\nEmailJS team.`,
    };

    emailjs.send(environment.emailServiceID, environment.emailTemplateID, templateParams)
      .then((response: EmailJSResponseStatus) => {
        console.log('E-mail envoyé avec succès :', response);

        this.name = '';
        this.subject = '';
        this.message = '';
        this.formSubmitted = false;
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      });
  }
}