import { Injectable } from '@angular/core';
import { emp } from './emp';
import { employeelist } from './employeelist';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  emplt : emp[] = [];

  constructor() { }

  getAllemployee() : Observable<emp[]>
  {
    const employees = of(employeelist);
    return employees;
  }

  getEmployee(id : number) : Observable<emp>
  {
    const emp = employeelist.find(h => h.id === id)!;
    return of(emp);
  }

}
