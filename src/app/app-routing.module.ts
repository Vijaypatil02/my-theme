import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {CardsComponent} from './cards/cards.component';
import {AnimationsComponent} from './animations/animations.component';
import {OtherComponent} from './other/other.component';
import {ColorsComponent} from './colors/colors.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {BlankpageComponent} from './blankpage/blankpage.component';
import {ChartsComponent} from './charts/charts.component';
import {TablesComponent} from './tables/tables.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: '' , component : DashbordComponent},
  {path: 'buttons' , component : ButtonsComponent},
  {path: 'cards' , component : CardsComponent},
  {path: 'animations' , component : AnimationsComponent},
  {path: 'borders' , component : ButtonsComponent},
  {path: 'other' , component : OtherComponent},
  {path: 'colors' , component : ColorsComponent},
  {path: 'login' , component : LoginComponent},
  {path: 'register' , component : RegisterComponent},
  {path: 'forgotpassword' , component : ForgotpasswordComponent},
  {path: 'notfound' , component : NotfoundComponent},
  {path: 'blankpage' , component : BlankpageComponent},
  {path: 'charts' , component : ChartsComponent},
  {path: 'tables' , component : TablesComponent},
  {path: 'logout' , component : LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
