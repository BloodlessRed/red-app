import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlobalVariablesService } from 'src/GlobalVariablesService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from './footer/app.footer.component';
import { MainHeader } from './header/app.header.module';
import { MainBodyOfSite } from './main-body/app.main-body.module';
import { PageNotFound } from './page-not-found/app.page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    Footer,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    MainBodyOfSite,
    MainHeader,
    RouterModule,
    AppRoutingModule
  ],
  providers: [GlobalVariablesService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
