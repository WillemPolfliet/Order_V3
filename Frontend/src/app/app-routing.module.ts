import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './featured/items/item-list/item-list.component';
import { HomeComponent } from './featured/home/home.component';
import { ItemSingleComponent} from './featured/items/item-single/item-single.component'
import { CustomerListComponent} from './featured/customers/customer-list/customer-list.component'
import { CustomerSingleComponent} from './featured/customers/customer-single/customer-single.component'

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component:HomeComponent},

  { path: 'ItemList', component: ItemListComponent },
  { path: 'SingleItem', component:ItemSingleComponent} ,   
  { path: 'SingleItem/:id', component: ItemSingleComponent },
  
  { path: 'CostumerList', component: CustomerListComponent },
  { path: 'SingleCustomer', component: CustomerSingleComponent },
  { path: 'SingleCustomer/:id ', component: CustomerSingleComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
