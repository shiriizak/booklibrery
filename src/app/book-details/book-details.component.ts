import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../Book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
@Input() item: Book;

@Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(private sre: BookserviceService) { }

  ngOnInit() {
  }

  editButton(book){

    //this.sre.editbook(book);
    this.edit.emit(book);
  }

}
