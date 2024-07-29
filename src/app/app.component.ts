import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.router.routerState.root),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(event => {
      if (event['title']) {
        this.titleService.setTitle(event['title']);
      }
      if (event['description']) {
        this.metaService.updateTag({ name: 'description', content: event['description'] });
      }
    });
  }
}