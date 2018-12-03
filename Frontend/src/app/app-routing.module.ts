import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './featured/items/item-list/item-list.component';
import { HomeComponent } from './featured/home/home.component';
import { ItemSingleComponent} from './featured/items/item-single/item-single.component'

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'ItemList', component: ItemListComponent },
  { path: 'Home', component:HomeComponent},
  { path: 'SingleItem', component:ItemSingleComponent} ,   
  { path: 'SingleItem/:id', component: ItemSingleComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
