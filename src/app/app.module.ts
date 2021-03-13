import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddResidentsComponent } from './add-residents/add-residents.component';
import { RegisterComponent } from './register/register.component';
import { MembershipComponent } from './membership/membership.component';
import { EventsComponent } from './events/events.component';
import { NotificationComponent } from './notification/notification.component';
import { NotifFormComponent } from './notif-form/notif-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { AddEventComponent } from './add-event/add-event.component';
import {MatSelectModule} from '@angular/material/select';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddResidentsComponent,
    RegisterComponent,
    MembershipComponent,
    EventsComponent,
    NotificationComponent,
    NotifFormComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    AddEventComponent,
    PhoneDirectoryComponent,
    PhoneFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    ClipboardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatStepperModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [AuthService, UserService, AdminService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
