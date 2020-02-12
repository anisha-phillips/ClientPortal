import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegistrationComponent} from './registration/registration.component';
import{LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import{GridsComponent} from './grids/grids.component';
import{HomeComponent} from './home/home.component'
import { FundWithdrawalComponent } from './fund-withdrawal/fund-withdrawal.component';
import { UpdateParticularsComponent } from './update-particulars/update-particulars.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path: 'register',component: RegistrationComponent},
  {path: 'DataGrid',component: GridsComponent},
  {path: 'home',component: HomeComponent},
  {path: 'fundwithdrawal',component: FundWithdrawalComponent},
  {path: 'updateparticulars',component: UpdateParticularsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
