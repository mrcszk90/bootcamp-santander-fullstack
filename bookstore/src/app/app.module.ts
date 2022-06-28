import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';

import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { BooksService } from './components/bookstore-app/product-list/product-list.component.service';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,

    ProductListComponent,
    FiltersComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
