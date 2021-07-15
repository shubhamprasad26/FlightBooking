import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../app/Navigation/navbar/navbar.component';
import { BookingHistoryComponent } from './Airlines/booking-history/booking-history.component';
import { ManageAdminAirlinesComponent } from './ManageAirlines/manage-admin-airlines/manage-admin-airlines.component';
import { ManageBookingComponent } from '../app/UserManage/manage-booking/manage-booking.component';
import { UserRegisterComponent } from '../app/Registration/user-register/user-register.component';
import {UserLoginComponent} from './Login/user-login/user-login.component';
import { AppComponent } from './app.component';
import {AdminNavComponent } from '../app/Admin/admin-nav/admin-nav.component';
import {UserBookFlightComponent } from '../app/User/user-book-flight/user-book-flight.component';
import {SearchResultComponent} from '../app/SearchAdmin/search-result/search-result.component';
import { ManageDiscountComponent } from '../app/AdminDiscount/manage-discount/manage-discount.component';
import { ViewAirlinesComponent } from './AdminViewAir/view-airlines/view-airlines.component';
import { WrongURLComponent } from './wrong-url/wrong-url.component';
import { ReportsComponent } from './AdminRep/reports/reports.component';
import { AddAirlinesComponent } from '../../src/app/AddAirline/add-airlines/add-airlines.component'

 
const routes: Routes = [
  //{path : 'BookingHistory' , component : BookingHistoryComponent},
  {path : 'ManageAirlines' , component : ManageAdminAirlinesComponent},
  {path : 'Search', component : SearchResultComponent},
  {path : 'ManageBookings' , component : ManageBookingComponent},
  {path : 'Registration' , component : UserRegisterComponent},
  {path : 'Login' , component : UserLoginComponent},
  {path : 'home', component : AppComponent},
  //{path : '' , redirectTo: '/Admin', pathMatch : 'full' },
  {path : 'Admin', component: AdminNavComponent},
  {path: 'UserBook', component : UserBookFlightComponent },
  {path: 'User', component : NavbarComponent,
   children : 
   [
      { path : 'BookingHistory' , component : BookingHistoryComponent} 
  ]
},
   { path : 'BookingHistory' , component : BookingHistoryComponent},
   { path : 'AdminDiscount', component: ManageDiscountComponent},
   { path: 'ViewAirline/:{id}', component: ViewAirlinesComponent},
   {path: 'Report', component: ReportsComponent},
   {path : 'AddAirlines' , component: AddAirlinesComponent}
   //{path: '**', component: WrongURLComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
