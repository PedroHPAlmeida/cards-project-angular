import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    BalanceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
