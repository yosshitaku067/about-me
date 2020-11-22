import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ToyboxComponent } from './pages/toybox/toybox.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StrengthsCardComponent } from './components/strengths-card/strengths-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ResumeComponent,
    ToyboxComponent,
    NavbarComponent,
    StrengthsCardComponent,
    ProfileCardComponent,
    SkillListComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
