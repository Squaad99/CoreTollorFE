import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OffertPageComponent } from './offert-page/offert-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {RouterModule, Routes} from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';
import { TimePageComponent } from './time-page/time-page.component';
import { CusotmerPageComponent } from './cusotmer-page/cusotmer-page.component';
import { ProductCalculationComponent } from './product-calculation/product-calculation.component';
import { MoneyCalculationComponent } from './money-calculation/money-calculation.component';
import { OrdersListPageComponent } from './orders-list-page/orders-list-page.component';
import { CalculationSettingsComponent } from './calculation-settings/calculation-settings.component';

const appRoutes: Routes = [
  { path: 'OffertPage', component: OffertPageComponent },
  { path: 'OrderPage', component: OrderPageComponent },
  { path: 'TimePage', component: TimePageComponent },
  { path: 'OrdersListPage', component: OrdersListPageComponent},
  { path: 'CustomerPage', component: CusotmerPageComponent },
  { path: 'CalculateSettings', component: CalculationSettingsComponent},
  { component: OffertPageComponent, path: '', pathMatch: 'full' },
  { component: OffertPageComponent, path: '**' }
];

@NgModule({
  declarations: [
    AppComponent,
    OffertPageComponent,
    NavMenuComponent,
    OrderPageComponent,
    TimePageComponent,
    CusotmerPageComponent,
    ProductCalculationComponent,
    MoneyCalculationComponent,
    OrdersListPageComponent,
    CalculationSettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
