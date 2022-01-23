import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddEmployeeModalComponent } from './components/add-employee-modal/add-employee-modal.component';
import { DeleteEmployeeModalComponent } from './components/delete-employee-modal/delete-employee-modal.component';
import { EditEmployeeModalComponent } from './components/edit-employee-modal/edit-employee-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeModalComponent,
    DeleteEmployeeModalComponent,
    EditEmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
