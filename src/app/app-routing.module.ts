import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Body } from './main-body/app.main-body.component';
import { PageNotFound } from './page-not-found/app.page-not-found.component';

const routes: Routes = [
  {path:'main-page',component:Body},
  {path:'',redirectTo:'main-page',pathMatch:'full'},
  {path:"**",component:PageNotFound}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
