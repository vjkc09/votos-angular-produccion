import { Component } from '@angular/core';
import { Link } from './models/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor() {
    this.links = [
      new Link('Angular', 'https://angular.io/', 1000),
      new Link('React', 'https://es.reactjs.org/', 1100),
      new Link('Vue', 'https://vuejs.org/', 900)
    ];

    console.log(this.links);
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement) {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';

  }
}
