import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    ContentComponent,
    FooterComponent,
    DashbordComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    NotfoundComponent,
    BlankpageComponent,
    ChartsComponent,
    TablesComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
