import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  cnt:number=0;

  fun1(v:any,j:any,c:any)
  {
     this.cnt=parseInt(v)+parseInt(j)+parseInt(c);
  }

  fun2(v:any,j:any,c:any)
  {
     this.cnt=parseInt(v)-parseInt(j)-parseInt(c);
  }

  fun3(v:any,j:any,c:any)
  {
     this.cnt=parseInt(v)*parseInt(j)*parseInt(c);
  }

  fun4(v:any,j:any,c:any)
  {
     this.cnt=(parseInt(v)+parseInt(j))/parseInt(c);
  }

 }