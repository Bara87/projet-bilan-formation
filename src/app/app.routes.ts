import { Routes } from '@angular/router';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ArtisanDetailComponent } from './artisan-detail/artisan-detail.component';
import { ArtisanListComponent } from './artisan-list/artisan-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent, data: { title: 'Trouve ton Artisan - Accueil', description: 'Trouvez le meilleur artisan près de chez vous avec Trouve ton Artisan. Comparez les avis et choisissez le professionnel qui répond à vos besoins.' } }, 
  { path: 'artisans', component: ArtisanListComponent, data: { title: 'Liste des Artisans', description: 'Découvrez la liste complète des artisans disponibles.' } },
  { path: 'batiment', component: BatimentComponent, data: { title: 'Artisans du Bâtiment', description: 'Trouvez des artisans spécialisés dans le bâtiment.' } },
  { path: 'services', component: ServicesComponent, data: { title: 'Services', description: 'Trouvez des artisans offrant divers services.' } },
  { path: 'fabrication', component: FabricationComponent, data: { title: 'Fabrication', description: 'Artisans spécialisés dans la fabrication.' } },
  { path: 'alimentation', component: AlimentationComponent, data: { title: 'Alimentation', description: 'Trouvez des artisans dans le domaine de l\'alimentation.' } },
  { path: 'artisan-detail', component: ArtisanDetailComponent, data: { title: 'Détails de l\'Artisan', description: 'Voir les détails de l\'artisan sélectionné.' } },
  { path: '**', component: NotFoundComponent, data: { title: 'Page non trouvée', description: 'La page que vous recherchez n\'existe pas.' } }
];

