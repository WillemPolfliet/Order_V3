import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, tap, map } from 'rxjs/operators';
import { MessagesService } from './messages.service';

import  { ItemDetail } from './classes/item_detail'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private ItemsUrl = 'http://10.20.0.83:57340/api/Items'
  private log(message: string) {    
    this.messageService.add(`ItemService: ${message}`);  
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.messageService.add(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient, private messageService: MessagesService){ 
  }


  getAllItems(): Observable<ItemDetail[]> {
    return this.http.get<ItemDetail[]>(this.ItemsUrl)
      .pipe(
        tap(_ => this.log(`fetched Items from ${this.ItemsUrl}`)),
        catchError(this.handleError('getAllItems', []))
      );
  }


  getSingleItem(id: string): Observable<ItemDetail> {  
    const url = `${this.ItemsUrl}/${id}`;
    return this.http.get<ItemDetail>(url)
      .pipe(
        tap(_ => this.log(`fetched item with id=${id}`)),
        catchError(this.handleError<ItemDetail>(`getSingleItem id=${id}`)
      )
    );  
  }

  updateItem (item: ItemDetail): Observable<any> {
    return this.http.put(this.ItemsUrl, item, httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  addItem (item: ItemDetail): Observable<ItemDetail> {
    return this.http.post<ItemDetail>(this.ItemsUrl, item, httpOptions).pipe(
      tap((item: ItemDetail) => this.log(`added item w/ id=${item.id}`)),
      catchError(this.handleError<ItemDetail>('addItem'))
    );
  }

  searchItem (searchTerm:string,listOfItems: Observable<ItemDetail[]>): Observable<ItemDetail[]>{
    return listOfItems.pipe(
      map(items => 
        items.filter(itemName => 
          itemName.name === searchTerm)
        )
      );

  }
  

  
  

  
}
