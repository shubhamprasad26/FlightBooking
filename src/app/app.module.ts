import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingHistoryComponent } from './Airlines/booking-history/booking-history.component';
import { BookingsService} from '../Services/bookings.service';
import { LoginService } from 'src/Services/Login.service';
import { NavbarComponent } from './Navigation/navbar/navbar.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AddAirlinesComponent } from './AddAirline/add-airlines/add-airlines.component';
import { FormsModule } from '@angular/forms';
import { UserRegisterComponent } from './Registration/user-register/user-register.component';
import { ManageAdminAirlinesComponent } from './ManageAirlines/manage-admin-airlines/manage-admin-airlines.component';
import { ManageAirLineServices } from '../Services/ManageAirlines.service';
import { ManageBookingComponent } from './UserManage/manage-booking/manage-booking.component';
import { ManageBookingsServices } from 'src/Services/ManageBooking.service';
import { ActivatedRoute } from '@angular/router';
import {FooterNavComponent } from '../app/Footer/footer-nav/footer-nav.component';
import {UserBookFlightComponent} from '../app/User/user-book-flight/user-book-flight.component';
import {BookFlightService} from '../Services/bookFlightUser.service';
import { SearchResultComponent } from './SearchAdmin/search-result/search-result.component';
import { ViewDetailsComponent } from './userView/view-details/view-details.component';
//import { ManageDiscountComponent } from '../app/AdminDis/manage-discount/manage-discount.component';
import {DiscountGenerateService} from '../Services/GenerateDiscountService';
import { ManageDiscountComponent } from './AdminDiscount/manage-discount/manage-discount.component';
import { ViewAirlinesComponent } from './AdminViewAir/view-airlines/view-airlines.component';
import { WrongURLComponent } from './wrong-url/wrong-url.component';
import { ReportsComponent } from './AdminRep/reports/reports.component';
//import { ManageDiscountComponent } from './AdminDis/manage-discount/manage-discount.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingHistoryComponent,
    NavbarComponent,
    UserLoginComponent,
    AdminNavComponent,
    AddAirlinesComponent,
    UserRegisterComponent,
    ManageAdminAirlinesComponent,
    ManageBookingComponent,
    FooterNavComponent,
    UserBookFlightComponent,
    SearchResultComponent,
    ViewDetailsComponent,
    ManageDiscountComponent,
    ViewAirlinesComponent,
    WrongURLComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [BookingsService,LoginService,ManageAirLineServices,ManageBookingsServices,DiscountGenerateService,BookFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
