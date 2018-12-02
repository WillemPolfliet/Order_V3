import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ItemService } from './item.service';
import { MessagesService } from './messages.service';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ItemService,
    MessagesService,
   //services!
  ]
})
export class CoreModule { }
