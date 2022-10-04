import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

//Here is a Change
const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'users/:id/:name', component:UserComponent}, // to take a dynamic path as a route use : it will be later used to pass as a parammeter
  {path:'servers', component:ServersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)   // here is the Change
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
