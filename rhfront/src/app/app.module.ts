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
import { HeaderComponent } from './screen/header/header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

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
    JobhistoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
