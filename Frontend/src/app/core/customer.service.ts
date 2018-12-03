import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { MessagesService } from './messages.service';

import  { CustomerDetail } from './classes/customer_detail'
import  { Email } from './classes/Email'
import  { PhoneNumber } from './classes/PhoneNumber'
import  { Address } from './classes/Address'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private CustomersUrl = 'http://localhost:57341/api/Customers'
  private log(message: string) {    
    this.messageService.add(`CostumerService: ${message}`);  
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


  getAllCustomers(): Observable<CustomerDetail[]> {
    return this.http.get<CustomerDetail[]>(this.CustomersUrl)
      .pipe(
        tap(_ => this.log(`fetched Items from ${this.CustomersUrl}`)),
        catchError(this.handleError('getAllItems', []))
      );
  }

  getSingleCustomer(id: string): Observable<CustomerDetail> {  
    const url = `${this.CustomersUrl}/${id}`;
    return this.http.get<CustomerDetail>(url)
      .pipe(
        tap(_ => this.log(`fetched item with id=${id}`)),
        catchError(this.handleError<CustomerDetail>(`getSingleItem id=${id}`)
      )
    );  
  }

  updateItem (item: CustomerDetail): Observable<any> {
    const url = `${this.CustomersUrl}/${item.id}`;
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  addItem (item: CustomerDetail): Observable<CustomerDetail> {
    return this.http.post<CustomerDetail>(this.CustomersUrl, item, httpOptions).pipe(
      tap((item: CustomerDetail) => this.log(`added item w/ id=${item.id}`)),
      catchError(this.handleError<CustomerDetail>('addItem'))
    );
  }

  searchItem (searchTerm:string,listOfItems: CustomerDetail[]): CustomerDetail[]{
    if(!searchTerm){
      return listOfItems;
    }
    return listOfItems.filter(item => item.lastName.toLowerCase().includes(searchTerm.toLowerCase()));          
  }

}