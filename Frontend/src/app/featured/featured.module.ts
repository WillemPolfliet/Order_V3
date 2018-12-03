import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemSingleComponent } from './items/item-single/item-single.component';
import { CustomerSingleComponent } from './customers/customer-single/customer-single.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailPopupComponent } from './customers/customer-detail-popup/customer-detail-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ItemListComponent, 
    HomeComponent, 
    ItemSingleComponent, 
    CustomerSingleComponent, 
    CustomerListComponent, 
    CustomerDetailPopupComponent
  ],
  imports: [       
    SharedModule,  
    BrowserAnimationsModule  
  ],
  exports:[
    CustomerDetailPopupComponent
  ]
})
export class FeaturedModule { }
