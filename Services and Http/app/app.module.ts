import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { EmployeeListComponent } from './employee-list.component'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
