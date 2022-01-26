import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DepartamentService } from '../../services/departament/departament.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDepartamentComponent } from './edit-departament/edit-departament.component';
import { DepartamentInterface } from 'src/app/models/departament.interface';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.css']
})
export class DepartamentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['job_id', 'job_title', 'min_salary', 'max_salary', 'actions'];
  dataSource = new MatTableDataSource(); 
  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private departamentService: DepartamentService,
    public dialogJob: MatDialog
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarJobs():void{}
  openAddJob(){
    const dialogRest = this.dialogJob.open(EditDepartamentComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditJob(object:DepartamentInterface){}
  removeJob(object:DepartamentInterface):void{}

}
