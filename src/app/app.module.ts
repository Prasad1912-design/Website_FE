import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';
import { UniversityComponent } from './university/university.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { HelpingComponent } from './helping/helping.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    CollegeComponent,
    UniversityComponent,
    CalculatorComponent,
    HelpingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
