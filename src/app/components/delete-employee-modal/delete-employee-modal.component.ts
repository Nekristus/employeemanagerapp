import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['./delete-employee-modal.component.css']
})
export class DeleteEmployeeModalComponent implements OnInit {

  @Input() public employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

  public saveChanges(): void {
    //TODO: save changes here
    console.log(this.employee);
  }


}
