import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../Book';
import { BookserviceService } from '../bookservice.service';
import { Routes, Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
@Input() item: Book = new Book();

@Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(private sre: BookserviceService, private router :Router) { }

  ngOnInit() {

  }

  editButton(book){

    //this.sre.editbook(book);
    this.edit.emit(book);
  }
  addButton()
  {
    this.router.navigate(['/editbook']);
  }
}
