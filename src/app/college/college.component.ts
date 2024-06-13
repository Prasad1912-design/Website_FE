import { Component } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {
  course:any;
  dom:any;

manual()
{
  this.course='manual'
}

automation()
{
  this.course='automation'
}

ai()
{
  this.course='ai'
}


  domain1()
  {
    this.dom='developer';
  }

  domain2()
  {
    this.dom='tester';
  }

  java()
  {
     this.course='java'
  }

  python()
  {
     this.course='python'
  }

  dotnet()
  {
     this.course='dotnet'
  }

  mean()
  {
     this.course='mean'
  }

  mern()
  {
     this.course='mern'
  }

}