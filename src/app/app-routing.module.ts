import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageGuard } from './guards/local-storage.guards';
import { Body } from './main-body/app.main-body.component';
import { ItemDescription } from './main-body/item-description/app.main-body.item-description.component';
import { PageNotFound } from './page-not-found/app.page-not-found.component';
import { UserProfileComponent } from './user-profile/app.user-profile.component';

const routes: Routes = [
  {path:'main-page',component:Body},
  {path:'user-profile',component:UserProfileComponent,canActivate:[LocalStorageGuard]},
  {path:'item/:id',component:ItemDescription},
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
