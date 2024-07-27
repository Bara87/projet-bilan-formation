import { ArtisanDetailComponent } from './artisan-detail/artisan-detail.component';
import { ArtisanListComponent } from './artisan-list/artisan-list.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'artisans', component: ArtisanListComponent },
  { path: 'batiment', component: BatimentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'fabrication', component: FabricationComponent },
  { path: 'alimentation', component: AlimentationComponent },
  
  { path: 'artisan-detail', component: ArtisanDetailComponent },
  { path: '**', component: NotFoundComponent }
];
