import { Component } from '@angular/core';
import { UniversityserviceService } from '../universityservice.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent {

  j:any;

  p:any;
  m:any;
  n:any;
  a:any;
  ns:any;

  v:any;

  uni:any;

constructor(private u:UniversityserviceService){}

ngOnInit(){

  this.p=this.u.p;
  this.m=this.u.m;
  this.n=this.u.n;
  this.a=this.u.a;
  this.ns=this.u.ns;

  this.v=this.u.v;

  this.uni=this.u.uni;
}

pune()
{
 this.j="pune";
}

mumbai()
{
 this.j="mumbai";
}

nagpur()
{
 this.j="nagpur";
}

amravati()
{
 this.j="amravati";
}

nashik()
{
 this.j="nashik";
}



}