import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import {NgbModal, ModalDismissReasons, NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeModalComponent } from './edit-employee-modal/edit-employee-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees: Employee[];
  
  constructor(private employeeService: EmployeeService, private modalService: NgbModal){}

  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees(): void {
      this.employeeService.getEmployees().subscribe(
        (response: Employee[]) => {
          this.employees = response;
        },
        (error: HttpErrorResponse) => {
          alert (error.message);
        } 
      )
  }

  public onOpenModal(employee: Employee, mode: string): void{
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal'); 
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateEmployeeModal'); 
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteEmployeeModal'); 
    }
    container.appendChild(button);
    button.click();
  }
  
  public openDeleteModal(): void{
    console.log("It just deletes.");
  }
  public openEditModal(employee: Employee): void{
    const modal = this.modalService.open(EditEmployeeModalComponent, {
      animation: true,
      keyboard: true,
      centered: true,
      backdrop: true
    });
    modal.componentInstance.employee = employee;
  }
  

  public openAddModal(): void{
    console.log("It just adds.");
  } 
}