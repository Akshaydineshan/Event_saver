import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { TrashComponent } from './trash/trash.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MessageComponent,
    AddEventsComponent,
    TrashComponent,
    HomeComponent,
    EditComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,FormsModule,HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
