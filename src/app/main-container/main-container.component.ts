import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import {Router,NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  angularIcon = faAngular

  constructor(private router: Router) { 
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
        this.links.forEach(link => {
          if(link.route == this.router.url){
            this.titleNavbar = link.title;
            return;
          }
        });
    });
  }

  ngOnInit(): void {
  }

  opened = false;

  titleNavbar = 'Dashboard';

  links = [
    {
      icon: 'dashboard',
      title: 'Dashboard',
      route: '/dashboard',
      isFocused: true
    },
    {
      icon: 'admin_panel_settings',
      title: 'Administrator',
      route: '/administrator',
      isFocused: false
    },
  ]
}
