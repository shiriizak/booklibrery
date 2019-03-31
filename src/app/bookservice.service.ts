import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  public books: Book[];
  public lastid: number;
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
    this.lastid=3;
}

addbook(book:Book ){

}

SaveBook(Mybook: Book)
{
const itemIndex=this.books.findIndex(item=> item.id === Mybook.id);
if ( itemIndex == -1)
{
  Mybook.id= (++this.lastid).toString();
   this.books.push(Mybook);
}
   else
   {
    this.addbook(Mybook);


   }


}

getbook(){
  return this.books;

}


}
