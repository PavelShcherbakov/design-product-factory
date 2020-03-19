import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/loyouts/header/header.component';
import { FooterComponent } from './shared/components/loyouts/footer/footer.component';
import { StartRegisterComponent } from './home/components/start-register/start-register.component';
import { AboutUsComponent } from './home/components/about-us/about-us.component';
import { CourseExperienceComponent } from './home/components/course-experience/course-experience.component';
import { SessionsComponent } from './home/components/sessions/sessions.component';
import { MastersComponent } from './home/components/masters/masters.component';
import { FaqComponent } from './home/components/faq/faq.component';
import { CourseFeeComponent } from './home/components/course-fee/course-fee.component';
import { RequestListOfHeadingsComponent } from './home/components/request-list-of-headings/request-list-of-headings.component';
import { ProjectsComponent } from './home/components/projects/projects.component';
import { ScheduleComponent } from './home/components/schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
   declarations: [
      AppComponent,
      StartRegisterComponent,
      AboutUsComponent,
      CourseExperienceComponent,
      SessionsComponent,
      MastersComponent,
      FaqComponent,
      CourseFeeComponent,
      RequestListOfHeadingsComponent,
      ProjectsComponent,
      ScheduleComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      BrowserAnimationsModule,
      MatExpansionModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
