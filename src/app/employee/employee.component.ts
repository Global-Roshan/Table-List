import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';
import { emp } from '../emp';
import { NgFor,NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor,NgIf,MatTableModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  emplt : emp[] = [];
  displayedColumns: string[] = ['Id', 'name', 'gender', 'dob','role'];

  constructor(protected empservice : EmployeeDetailsService)
  {}


  ngOnInit(): void {
      this.getemployeedetails();
  }

  getemployeedetails() : void
  {
    this.empservice.getAllemployee().subscribe(empdetails => {
      this.emplt = empdetails
    });
  }


}
