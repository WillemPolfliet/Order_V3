import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemSearchComponent } from '../Featured/items/item-search/item-search.component';
import { ItemSingleComponent } from './items/item-single/item-single.component';
import { CostumerListComponent } from './costumers/costumer-list/costumer-list.component';

@NgModule({
  declarations: [
    ItemListComponent, 
    HomeComponent, 
    ItemSearchComponent, 
    ItemSingleComponent, CostumerListComponent
  ],
  imports: [       
    SharedModule,    
  ]
})
export class FeaturedModule { }
