import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { CustomerDetail } from 'src/app/core/classes/customer_detail';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { Address } from 'src/app/core/classes/Address';
import { Email } from 'src/app/core/classes/Email';
import { PhoneNumber } from 'src/app/core/classes/PhoneNumber';

@Component({
  selector: 'app-customer-single',
  templateUrl: './customer-single.component.html',
  styleUrls: ['./customer-single.component.css']
})
export class CustomerSingleComponent implements OnInit {

  givenCustomer$: Observable<CustomerDetail>;
  givenCustomerAddress$: Observable<Address>;
  givenCustomerEmail$: Observable<Email>;
  givenCustomerPhoneNumber$: Observable<PhoneNumber>;


  constructor(private customerService: CustomerService, private route: ActivatedRoute) {   
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap);
    if(id ==null){
      this. clear();
    } 
    else{
      this.givenCustomer$ = this.customerService.getSingleCustomer(id); 
      this.givenCustomerAddress$ = this.givenCustomer$.pipe(map( (customer) => customer.address));
      this.givenCustomerEmail$ = this.givenCustomer$.pipe(map( (customer) => customer.email));
      this.givenCustomerPhoneNumber$ = this.givenCustomer$.pipe(map( (customer) => customer.phoneNumber));
    }

  }

  clear(){
    this.givenCustomer$ = of(new CustomerDetail());   
    this.givenCustomerAddress$ = of(new Address());
    this.givenCustomerEmail$ = of(new Email());
    this.givenCustomerPhoneNumber$ = of(new PhoneNumber());
  }


  add() {
   
  }

  update() {
     
  }

  
}