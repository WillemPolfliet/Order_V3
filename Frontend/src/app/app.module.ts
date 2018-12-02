import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { FeaturedModule } from './featured/featured.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    CoreModule,
    FeaturedModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
