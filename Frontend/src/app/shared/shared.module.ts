import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CoreModule } from '../core/core.module';
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
    CoreModule
  ],
  exports: [
    MessagesComponent,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    CoreModule,
    SearchComponent,
    // NgxSmartModalModule
  ]
})
export class SharedModule { }
