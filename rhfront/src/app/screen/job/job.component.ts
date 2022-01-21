import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { JobInterface } from '../../models/job.interface';
import { JobService } from '../../services/job/job.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  /**
   * seccion de la grid
   */
  displayedColumns: string[] = ['job_id', 'job_title', 'min_salary', 'max_salary','action'];
  dataSource = new MatTableDataSource<JobInterface>();
  constructor(
    private serviceJob:JobService,
    private formBuilder: FormBuilder
  ) { }

  jobForm = this.formBuilder.group({
    job_id:'',
    job_title: '',
    min_salary: '',
    max_salary: ''
  });
  ngOnInit(): void {
  }  
  onJobs(form:any){
    console.log("entro al onjobs"+form.job_id+form.job_title+form.min_salary+form.max_salary)
    this.serviceJob.createJobs(form).subscribe((data)=>{});
  }

}

