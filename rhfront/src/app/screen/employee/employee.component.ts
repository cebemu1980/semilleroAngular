import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { EmployeeService } from '../../services/employee/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeInterface } from 'src/app/models/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['job_id', 'job_title', 'min_salary', 'max_salary', 'actions'];
  dataSource = new MatTableDataSource(); 
  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private employeService: EmployeeService,
    public dialogJob: MatDialog
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarJobs():void{}
  openAddJob(){
    const dialogRest = this.dialogJob.open(EditEmployeeComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditJob(object:EmployeeInterface){}
  removeJob(object:EmployeeInterface):void{}

}
