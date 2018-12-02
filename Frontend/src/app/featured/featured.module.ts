import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ItemSearchComponent } from '../Featured/item-search/item-search.component';
import { SingleItemComponent } from './single-item/single-item.component';

@NgModule({
  declarations: [
    ItemListComponent, 
    HomeComponent, 
    ItemSearchComponent, 
    SingleItemComponent
  ],
  imports: [       
    SharedModule,
    
  ]
})
export class FeaturedModule { }
