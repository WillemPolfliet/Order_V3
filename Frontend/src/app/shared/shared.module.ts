import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MessagesComponent,
    SearchComponent,    
  ],
  imports: [       
    AppRoutingModule,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    CoreModule
  ],
  exports: [
    MessagesComponent,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    CoreModule,
    SearchComponent,
  ]
})
export class SharedModule { }
