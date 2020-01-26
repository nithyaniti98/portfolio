import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
    <!-- header (github) -->
    <app-header></app-header>
    <!-- home page (need to add download cv button) -->
    <app-home></app-home>
    <!-- profile -->
    <app-profile></app-profile>
    <!-- Education 
    <app-education></app-education> -->
    <!-- Work Experiences -->
    <app-career></app-career>
    <!-- Projects + Competitions -->
    <app-projects></app-projects>
    <!-- skills -->
    <app-abilities></app-abilities>
    <!-- cca -->
    <app-cca></app-cca>
    <app-contact></app-contact>
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-portfolio';
}
