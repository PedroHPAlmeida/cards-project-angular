import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientInfosComponent } from './components/client-infos/client-infos.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderDirective } from './components/card/directives/base/card-header.directive';
import { CardContentDirective } from './components/card/directives/base/card-content.directive';
import { CardHeaderTitleComponent } from './components/card/card-header-title/card-header-title.component';
import { CardItemDirective } from './components/card/directives/item/card-item.directive';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { DividerDirective } from './directives/divider.directive';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfosComponent,
    CardComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardHeaderTitleComponent,
    CardItemDirective,
    CardItemComponent,
    DividerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
