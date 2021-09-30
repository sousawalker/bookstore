import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantity: number = 0;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.configObservable.subscribe((value: number) => {
      this.quantity = value;
    });
  }

}
