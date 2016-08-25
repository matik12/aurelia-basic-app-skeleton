import {Router, RouterConfiguration} from 'aurelia-router';
import {autoinject} from 'aurelia-dependency-injection';

import {OAuthService} from 'aurelia-oauth';

@autoinject()
export class App {
  router: Router;

  constructor(public oauthService: OAuthService) { } 
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' }
    ]);

    this.router = router;
  }
}