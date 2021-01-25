import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from './footer/app.footer.component';
import { MainHeader } from './header/app.header.module';
import { ProductsContainer } from './products/app.products.module';
import { GlobalVariablesService } from './services/GlobalVariablesService';

@NgModule({
  declarations: [
    AppComponent,
    Footer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsContainer,
    MainHeader,
    RouterModule,
    AppRoutingModule

  ],
  providers: [GlobalVariablesService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
