import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../core/customer.service';
import { CustomerDetail } from 'src/app/core/classes/customer_detail';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-customer-single',
  templateUrl: './customer-single.component.html',
  styleUrls: ['./customer-single.component.css']
})
export class CustomerSingleComponent implements OnInit {

  givenCustomer$: Observable<CustomerDetail>;


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
    }

  }

  clear(){
   this.givenCustomer$ = of(new CustomerDetail());
  }


  add() {
   
  }

  update() {
     
  }

  
}