import { Component, OnInit } from '@angular/core';
import { emp } from '../emp';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EditemployeedialogComponent } from '../editemployeedialog/editemployeedialog.component';

@Component({
  selector: 'app-edetails',
  standalone: true,
  imports: [NgIf,MatCardModule,MatDividerModule,MatFormFieldModule,MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './edetails.component.html',
  styleUrl: './edetails.component.css'
})
export class EdetailsComponent implements OnInit{

  emplt : emp | undefined;

  constructor(
    private route : ActivatedRoute,
    private empservice : EmployeeDetailsService,
    private location : Location,
    private dialog : MatDialog
  ) {}

  ngOnInit(): void {
    this.getemp();
  }

  getemp(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empservice.getEmployee(id)
      .subscribe(emp => this.emplt = emp);

  }

  goBack(): void{

    this.location.back();

  }

  openDialog()
  {
    const dg = this.dialog.open(EditemployeedialogComponent, {
      height: "500px",
      width : "700px",
      disableClose : false,
      data : this.emplt,
    });

    dg.afterClosed().subscribe(data => {
      if(data !== ""){

      console.log("details log name: ",data.name);
      
      this.emplt = data;

    }
    });
  }
}
