import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.css']
})
export class EditEmployeeModalComponent implements OnInit {

  @Input() public employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  public dataForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    jobTitle: new FormControl(),
    phone: new FormControl(),
    imageUrl: new FormControl()
  });

  public saveChanges(): void {
    console.log(this.dataForm);

    let editedEmployee: Employee = {
      name: this.dataForm.get('name').value,
      email: this.dataForm.get('email').value,
      jobTitle: this.dataForm.get('jobTitle').value,
      phone: this.dataForm.get('phone').value,
      imageUrl: this.dataForm.get('imageUrl').value
    };
    this.employeeService.updateEmployee(editedEmployee);
  }

}
