import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.css']
})
export class AddEmployeeModalComponent implements OnInit {

  @Input() public employee: Employee;

  constructor() { }

  ngOnInit(): void { 
  }

  public saveChanges(): void {
    //TODO: save changes here
    console.log(this.employee);
  }

}
