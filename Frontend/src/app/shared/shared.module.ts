import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
// import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    MessagesComponent,
    SearchComponent,    
    // NgxSmartModalModule
  ],
  imports: [       
    AppRoutingModule,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports: [
    MessagesComponent,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SearchComponent,
    // NgxSmartModalModule
  ]
})
export class SharedModule { }
