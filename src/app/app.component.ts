import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './interfaces/employee.interface';
import { EmployeeService } from './services/employee.service';
import {NgbModal, ModalDismissReasons, NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeModalComponent } from './components/edit-employee-modal/edit-employee-modal.component';
import { AddEmployeeModalComponent } from './components/add-employee-modal/add-employee-modal.component';
import { DeleteEmployeeModalComponent } from './components/delete-employee-modal/delete-employee-modal.component';


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
  
  public openDeleteModal(employee: Employee): void{
    const modal = this.modalService.open(DeleteEmployeeModalComponent, {
      animation: true,
      keyboard: true,
      centered: true,
      backdrop: true
    });
    modal.componentInstance.employee = employee;

    //TODO: call service, send to backend from here.
  }
  public openEditModal(employee: Employee): void{
    const modal = this.modalService.open(EditEmployeeModalComponent, {
      animation: true,
      keyboard: true,
      centered: true,
      backdrop: true
    });
    modal.componentInstance.employee = employee;

    //TODO: call service, send to backend from here.
  }
  

  public openAddModal(): void{
    const modal = this.modalService.open(AddEmployeeModalComponent, {
      animation: true,
      keyboard: true,
      centered: true,
      backdrop: true
    });
    modal.componentInstance.employee; 
  } 
}