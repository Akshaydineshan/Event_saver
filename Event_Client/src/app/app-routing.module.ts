import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  // {path:"",redirectTo:"/signup"},
  {path:"",redirectTo:'/signin',pathMatch:"full"},
  {path:"signup",component:RegisterComponent},
  {path:"signin",component:LoginComponent},
  {path:"profile",component:ProfileComponent,canActivate:[AuthguardGuard]},
  {path:"add-events",component:AddEventsComponent,canActivate:[AuthguardGuard]},
  {path:"trash",component:TrashComponent,canActivate:[AuthguardGuard]},
  {path:"home",component:HomeComponent,canActivate:[AuthguardGuard]},
  {path:`edit/:id`,component:EditComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
