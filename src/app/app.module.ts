import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './general-components/header/header.component';
import { FooterComponent } from './general-components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShoppingCardComponent } from './general-components/shopping-card/shopping-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ShoppingCardComponent,
    BannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
