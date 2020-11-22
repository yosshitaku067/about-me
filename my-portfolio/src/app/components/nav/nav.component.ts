import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navs = [
    {
      name: 'Home',
      path: '/home',
      icon: 'fas fa-home'
    },
    {
      name: 'ToyBox',
      path: '/toybox',
      icon: 'fas fa-box-open'
    },
    {
      name: 'Resume',
      path: '/resume',
      icon: 'far fa-file-alt'
    },
  ];
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
        console.log(event);
      });
  }

  isActive(path: string) {
    return this.currentRoute === path;
  }
}
