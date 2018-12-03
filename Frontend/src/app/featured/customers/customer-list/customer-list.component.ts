import { Component, OnInit } from '@angular/core';
import  { CustomerDetail } from '../../../core/classes/customer_detail'
import  { CustomerService } from '../../../core/customer.service'


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: CustomerDetail[];
  constructor(private customerService: CustomerService) {     
  }

  ngOnInit() {
    this.getAllCustomers();
  }
 
  getAllCustomers(): void {
    this.customerService.getAllCustomers()
    .subscribe(customerList => this.customers = customerList);
  }

}
