import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { CustomerDetail } from 'src/app/core/classes/customer_detail';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { Address } from 'src/app/core/classes/Address';
import { Email } from 'src/app/core/classes/Email';
import { PhoneNumber } from 'src/app/core/classes/PhoneNumber';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-single',
  templateUrl: './customer-single.component.html',
  styleUrls: ['./customer-single.component.css']
})
export class CustomerSingleComponent implements OnInit {

  givenCustomer$: Observable<CustomerDetail>; 

  customerForm= new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName:new FormControl(''),
    email: new FormGroup({
      localPart: new FormControl(''),
      domain: new FormControl(''),
      complete: new FormControl('')
    }),
    phoneNumber: new FormGroup({
      number: new FormControl(''),
      countryCallingCode: new FormControl('')
    }),
    address: new FormGroup({
      streetName: new FormControl(''),
      houseNumber: new FormControl(''),
      country: new FormControl(''),
      postalCode: new FormControl('')
    })   
  })
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
      this.customerService.getSingleCustomer(id).subscribe(Customer => this.customerForm.patchValue(Customer));   

    }
  }

  clear(){
    this.givenCustomer$ = of(new CustomerDetail());
    this.customerForm.reset();
  }


  add(value:CustomerDetail){
    this.customerService.addCustomer(value).subscribe(); 
  }   
  

  update(value:CustomerDetail){    
    this.customerService.updateCustomer(value).subscribe(); 
  }

  
}