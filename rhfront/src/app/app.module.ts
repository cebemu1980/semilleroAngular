import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './screen/login/login.component';
import { JobComponent } from './screen/job/job.component';
import { CountryComponent } from './screen/country/country.component';
import { RegionComponent } from './screen/region/region.component';
import { LocationComponent } from './screen/location/location.component';
import { DepartamentComponent } from './screen/departament/departament.component';
import { EmployeeComponent } from './screen/employee/employee.component';
import { JobhistoryComponent } from './screen/jobhistory/jobhistory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobComponent,
    CountryComponent,
    RegionComponent,
    LocationComponent,
    DepartamentComponent,
    EmployeeComponent,
    JobhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
