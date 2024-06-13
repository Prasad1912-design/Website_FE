import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolserviceService {

  constructor() { }

  v:any;

  Harish=[{ id:11, subject:'English', marks:70}, { id:12, subject:'Maths', marks:65}, { id:13, subject:'Science', marks:73}, { id:14, subject:'Marathi', marks:81}, { id:15, subject:'Social Science', marks:88}];
  Ganesh=[{ id:11, subject:'English', marks:63}, { id:12, subject:'Maths', marks:88}, { id:13, subject:'Science', marks:67}, { id:14, subject:'Marathi', marks:40}, { id:15, subject:'Social Science', marks:72}];
  Sukesh=[{ id:11, subject:'English', marks:68}, { id:12, subject:'Maths', marks:72}, { id:13, subject:'Science', marks:66}, { id:14, subject:'Marathi', marks:78}, { id:15, subject:'Social Science', marks:85}];
  Shweta=[{ id:11, subject:'English', marks:88}, { id:12, subject:'Maths', marks:93}, { id:13, subject:'Science', marks:71}, { id:14, subject:'Marathi', marks:81}, { id:15, subject:'Social Science', marks:81}];
  Anju=[{ id:11, subject:'English', marks:93}, { id:12, subject:'Maths', marks:66}, { id:13, subject:'Science', marks:78}, { id:14, subject:'Marathi', marks:93}, { id:15, subject:'Social Science', marks:90}];
}
