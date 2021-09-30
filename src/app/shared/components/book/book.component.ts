import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../../models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: BookModel;

  @Output() clicked = new EventEmitter();

  triggerClick() {
    this.clicked.emit(true);
  }
}
