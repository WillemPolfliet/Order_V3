import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './featured/item-list/item-list.component';
import { HomeComponent } from './featured/home/home.component';
import { SingleItemComponent} from './featured/single-item/single-item.component'

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'ItemList', component: ItemListComponent },
  { path: 'Home', component:HomeComponent},
  { path: 'SingleItem', component:SingleItemComponent} ,   
  { path: 'SingleItem/:id', component: SingleItemComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
