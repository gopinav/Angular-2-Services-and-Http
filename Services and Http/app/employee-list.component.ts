import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'employee-list',
  template: `<ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
             </ul>`
})
export class EmployeeListComponent implements OnInit { 
    employees = [];
    constructor(private _employeeService: EmployeeService){}
    ngOnInit(){
        this.employees = this._employeeService.getEmployees();
    }
}
