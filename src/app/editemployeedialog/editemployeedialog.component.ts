import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { emp } from '../emp';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule,FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgIf } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editemployeedialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,MatFormFieldModule,FormsModule,MatInputModule,
    MatIconModule,MatSelectModule,MatDatepickerModule,NgIf
  ],
  templateUrl: './editemployeedialog.component.html',
  styleUrl: './editemployeedialog.component.css'
})
export class EditemployeedialogComponent implements OnInit {

  dialogRef = inject(MatDialogRef<EditemployeedialogComponent>);
  data? : emp | undefined = inject<emp>(MAT_DIALOG_DATA);

  button : string = "Update";
  dob:Date = new Date();
  
  ngOnInit(): void {
    this.buttonValue();
    console.log(this.data?.bool,this.data?.name);
    this.dob = this.data?.dob ? new Date(this.data?.dob) : new Date();
  }

  buttonValue()
  {
    if(this.data?.bool)
    {
      this.button = "Add Employee";
    }
  }

  sendData()
  {
    this.dialogRef.close({id:this.data?.id,name:this.data?.name, gender:this.data?.gender, dob:this.data?.dob, role:this.data?.role});
  }

}
