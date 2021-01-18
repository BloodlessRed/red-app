import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainHeader } from './header/app.header.module';
import { MainBodyOfSite } from './main-body/app.main-body.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    MainBodyOfSite,
    MainHeader
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
