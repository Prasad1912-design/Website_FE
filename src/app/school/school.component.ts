import { Component } from '@angular/core';
import { SchoolserviceService } from '../schoolservice.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  constructor(private sc:SchoolserviceService){}
name:any;

fun(v:string)
{
  this.name=v.toLocaleLowerCase();
}


  h:any;
  g:any;
  s:any;
  sw:any;
  a:any;
  j:number=0;

  ngOnInit()
  {
    this.h=this.sc.Harish;
    this.g=this.sc.Ganesh;
    this.s=this.sc.Sukesh;
    this.sw=this.sc.Shweta;
    this.a=this.sc.Anju;
  }
}
