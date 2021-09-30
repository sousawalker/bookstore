import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { WhiteLabelService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private title: Title,
    private whiteLabelService: WhiteLabelService
  ) {
    this.title.setTitle("Bookstore");

    this.whiteLabelService.setTheme("default");
  }
}
