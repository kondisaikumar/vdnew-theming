import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingheaderComponent } from './landingpage/landingheader/landingheader.component';
import { LandingloginComponent } from './landingpage/landinglogin/landinglogin.component';
import { LandingregisterComponent } from './landingpage/landingregister/landingregister.component';
import { LandingComponent } from './landingpage/landing/landing.component';
import { LandingfeaturesComponent } from './landingpage/landingfeatures/landingfeatures.component';
import { LandingpricingComponent } from './landingpage/landingpricing/landingpricing.component';
import { LandingaboutComponent } from './landingpage/landingabout/landingabout.component';
import { LandingcontactComponent } from './landingpage/landingcontact/landingcontact.component';
import { LandingfooterComponent } from './landingpage/landingfooter/landingfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingpageComponent,
    LandingheaderComponent,
    LandingloginComponent,
    LandingregisterComponent,
    LandingComponent,
    LandingfeaturesComponent,
    LandingpricingComponent,
    LandingaboutComponent,
    LandingcontactComponent,
    LandingfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
