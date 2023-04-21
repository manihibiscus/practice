import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DeactivateGuard } from './deactivate.guard';
import { IDeactivateComponent } from './IDeactivate/IDeactivate.component';
import { UserRegistrationComponent } from './UserRegistration/UserRegistration.component';
import { RegisterComponent } from './Register/Register.component';

@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      ProductComponent,
      AboutComponent,
      ContactComponent,
      ProductDetailsComponent,
      LoginComponent,
      IDeactivateComponent,
      UserRegistrationComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
