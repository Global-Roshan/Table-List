import { Routes } from '@angular/router';
import { EdetailsComponent } from './edetails/edetails.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {
        path:'home',
        component: EmployeeComponent,
    },
    {
        path:'detail/:id',
        component: EdetailsComponent,
    },
    {
        
        path: '',
        redirectTo: '/home',
        pathMatch: 'full' 
            
    }
];
