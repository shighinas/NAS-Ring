import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddResidentsComponent } from './add-residents/add-residents.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembershipComponent } from './membership/membership.component';
import { NotificationComponent } from './notification/notification.component';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"login", component:LoginComponent},
  {path:"home", canActivate:[AuthGuard] , component:HomeComponent,
    children:[{path:"", canActivate:[AuthGuard], component: NotificationComponent},
    {path:"request", canActivate:[AdminGuard], component: MembershipComponent},
    {path:"phone", canActivate:[AuthGuard], component:PhoneDirectoryComponent},
    {path:"about", component:AboutComponent}]
  },
  {path:"register", component:RegisterComponent},
  {path:"events", canActivate:[AuthGuard], component:EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
