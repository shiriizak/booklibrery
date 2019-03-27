import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-navout',
  templateUrl: './navout.component.html',
  styleUrls: ['./navout.component.scss']
})
export class NavoutComponent implements OnInit {

public books: Book[];
  public editMode = false;
  public editBook: Book[];
ngOnInit()
{}
constructor(private srv:BookserviceService) {
 this.books=srv.getbook();
}

  editEmit(item) {
    this.editMode = !this.editMode;
    this.editBook = item;
  }

  saveEmit(book) {
    this.editMode = !this.editMode;

  }

}
