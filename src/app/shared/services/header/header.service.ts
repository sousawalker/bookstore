import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public config = new BehaviorSubject<number>(0);

  configObservable = this.config.asObservable();

  configChangeValue(value: number): void {
    this.config.next(value);
  }
}
