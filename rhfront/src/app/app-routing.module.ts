import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './screen/job/job.component';
import { CountryComponent } from './screen/country/country.component';
import { DepartamentComponent } from './screen/departament/departament.component';
import { EmployeeComponent } from './screen/employee/employee.component';
import { JobhistoryComponent } from './screen/jobhistory/jobhistory.component';
import { LocationComponent } from './screen/location/location.component';
import { LoginComponent } from './screen/login/login.component';
import { RegionComponent } from './screen/region/region.component';

const routes: Routes = [
  {path:'job',component:JobComponent},
  {path:'country',component:CountryComponent},
  {path:'departament',component:DepartamentComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'jobhistory',component:JobhistoryComponent},
  {path:'location',component:LocationComponent},
  {path:'login',component:LoginComponent},
  {path:'region',component:RegionComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}//Se coloca de ultimo para que retorne aquí 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
