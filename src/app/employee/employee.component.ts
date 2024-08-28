import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';
import { emp } from '../emp';
import { NgFor,NgIf } from '@angular/common';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink,RouterOutlet } from '@angular/router';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { EditemployeedialogComponent } from '../editemployeedialog/editemployeedialog.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor,NgIf,MatTableModule,MatIconModule,MatButtonModule,RouterLink,RouterOutlet,
    MatDialogModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  emplt : emp[] = [];
  displayedColumns: string[] = ['id', 'name', 'gender', 'dob','role', 'actions'];

  constructor(protected empservice : EmployeeDetailsService,
    protected dialog : MatDialog, private cdr: ChangeDetectorRef
  )
  {}

  @ViewChild(MatTable)
  table!: MatTable<emp>;

  ngOnInit(): void {
      this.getemployeedetails();
  }

  getemployeedetails() : void
  {
    this.empservice.getAllemployee().subscribe(empdetails => {
      this.emplt = empdetails
    });
  }

  addemp() : void
  {
    let id : number | undefined;
    if(this.emplt) {id = this.emplt[this.emplt.length-1].id + 1;} 
    let bl = true;
    const dg = this.dialog.open(EditemployeedialogComponent, {
      height: "500px",
      width : "700px",
      disableClose : true,
      data : {id: id,name:'',gender:'',role:'',dob:'',bool: bl},
    });

    dg.afterClosed().subscribe(data => {
      if(data !== "")
      {
      this.emplt.push(data);
      console.log(this.emplt);
      this.table.renderRows();
      }
    })
    
  }

  deleterow(event : Event,rowid: number)
  {
    event.stopPropagation();
   
    this.emplt.splice(rowid, 1);
    
    this.table.renderRows();
  }


}
