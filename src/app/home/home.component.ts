import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ArtisanDataService, Artisan } from '../artisan-data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artisans: Artisan[] = [];
  topArtisans: Artisan[] = [];

  constructor(
    private artisanDataService: ArtisanDataService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.topArtisans = this.artisanDataService.getTopArtisans();

    this.titleService.setTitle('Trouve ton Artisan - Accueil');
    this.metaService.addTags([
      { name: 'description', content: 'Trouvez le meilleur artisan près de chez vous avec Trouve ton Artisan. Comparez les avis et choisissez le professionnel qui répond à vos besoins.' },
      { name: 'keywords', content: 'artisans, trouver, comparer, avis, professionnels, services' }
    ]);
  }

  selectArtisan(artisan: Artisan): void {
    console.log('Navigating to artisan detail with ID:', artisan.id);
    this.artisanDataService.setCurrentArtisanId(artisan.id);
    this.router.navigate(['/artisan-detail']);
  }
}