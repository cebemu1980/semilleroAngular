import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { JobService } from '../../services/job/job.service';
import { MatSort } from '@angular/material/sort';
import { JobInterface } from 'src/app/models/job.interface';
import {EditJobComponent} from './edit-job/edit-job.component';
import { MatDialog } from '@angular/material/dialog';
import { DeletejobComponent } from './deletejob/deletejob.component';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit, AfterViewInit {

  /**
   * seccion de la grid
   */
   displayedColumns: string[] = ['job_id', 'job_title', 'min_salary', 'max_salary', 'actions'];
   dataSource = new MatTableDataSource();  
 
   @ViewChild(MatPaginator) 'paginator': MatPaginator;
   @ViewChild(MatSort) 'sort': MatSort;
   teachDS: any;
 
   
  constructor(
    private serviceJob:JobService,
    private formBuilder: FormBuilder,
    public dialogJob: MatDialog,
    private changDetecRef: ChangeDetectorRef
  ) { }

  /**
   * Recuperación de la información del servicio 
   */
  ngOnInit(): void {
    this.listarJobs();
  }  

  /**
   * Se mantiene la carga de la vista
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listarJobs():void{
    this.serviceJob.listJobs().subscribe(lisJobs => this.dataSource.data = lisJobs);
    
    //this.serviceJob.listJobs().subscribe(res => console.log('POSTS',res));//prueba por consola
  }

  openAddJob(){
    const dialogRest = this.dialogJob.open(EditJobComponent);
    dialogRest.afterClosed().subscribe(result=>{
      this.changDetecRef.detectChanges();
    });
  };

  openEditJob(object:JobInterface){
   const dialogRest = this.dialogJob.open(EditJobComponent, {
    data: {object}
  });  
   dialogRest.afterClosed().subscribe(result=>{});
  };
  removeJob(object:JobInterface):void{
    const dialogRest = this.dialogJob.open(DeletejobComponent, {
      data: {object}
    });  
     dialogRest.afterClosed().subscribe(result=>{});
    //this.serviceJob.deleteById(object).subscribe(removeJob => this.dataSource.data = removeJob);
    this.listarJobs()
  };

  
}



