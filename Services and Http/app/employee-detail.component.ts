import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-detail',
  template: `<h2>Employee Details</h2>
             <h3>{{errorMsg}}</h3>
             <ul *ngFor="let employee of employees">
                <li>{{employee.id}}. {{employee.name}} - {{employee.gender}}</li>
             </ul>`
})
export class EmployeeDetailComponent implements OnInit{
    employees = [];
    errorMsg: string;

    constructor(private _employeeService: EmployeeService){}
    
    ngOnInit(){
        this._employeeService.getEmployees()
            .subscribe( resEmployeeData => this.employees = resEmployeeData,
                        resEmployeeError => this.errorMsg = resEmployeeError);
    }
}