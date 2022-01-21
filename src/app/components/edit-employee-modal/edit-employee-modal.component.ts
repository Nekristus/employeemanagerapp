import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.css']
})
export class EditEmployeeModalComponent implements OnInit {

  @Input() public employee: Employee;
  
  constructor() { }

  ngOnInit(): void {
  }

  public saveChanges(): void {
    //TODO: save changes here
    console.log(this.employee);
  }

}
