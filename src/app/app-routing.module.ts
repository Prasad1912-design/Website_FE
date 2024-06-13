import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SchoolComponent } from './school/school.component';
import { UniversityComponent } from './university/university.component';
import { HelpingComponent } from './helping/helping.component'; 

const routes: Routes = [
  // {
  //   path:'',redirectTo:'college',component:CollegeComponent
  // },

  {
    path:'school',component:SchoolComponent
  },

  {
    path:'college',component:CollegeComponent
  },
  {
    path:'university',component:UniversityComponent
  },
  {
    path:'calculator',component:CalculatorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
