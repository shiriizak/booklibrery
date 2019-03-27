import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  public books: Book[];
  constructor() {  this.books =  [
    {
      author: 'Suzanne Collins',
      date: new Date('4/5/1813'),
      title: 'the Hunger Games',
      id: '1'
    },
    {
      author: 'jane Austen',
      date: new Date('4/5/1981'),
      title: 'pride and Prejudice',
      id: '2'
    },
    {
      author: 'George Orwell',
      date: new Date('4/5/1991'),
      title: 'animal Farm',
      id: '3'
    }
    ];
}



savebook(book:Book){
    const itemIndex = this.books.findIndex(item => item.id === book.id);
    this.books[itemIndex] = book;



}
addbook(book:Book ){




}
getbook(){
  return this.books;

}


}
