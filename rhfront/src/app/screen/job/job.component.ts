import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControlName } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { JobService } from '../../services/job/job.service';
import { MatSort } from '@angular/material/sort';


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
 
   
  constructor(
    private serviceJob:JobService,
    private formBuilder: FormBuilder
  ) { }

  //Aqui recuperamos la informacion que viene del service
  ngOnInit(): void {
    this.serviceJob.listJobs().subscribe(lisJobs => this.dataSource.data = lisJobs);
    //this.serviceJob.listJobs().subscribe(res => console.log('POSTS',res));
  }  

  //Aqui se mantiene la carga de la vista
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  jobForm = this.formBuilder.group({
    job_id:'',
    job_title: '',
    min_salary: '',
    max_salary: ''
  });

  onJobs(form:any){
    if(
      form.job_id === "" || form.job_title === "" || form.min_salary === "" || form.max_salary === ""
    ){
      alert("Los campos son obligatorios");
      console.log("entro al onjobs1"+form.job_id+form.job_title+form.min_salary+form.max_salary)
    }else{
      //this.serviceJob.createJobs(form).subscribe((data)=>{});      
      console.log("entro al onjobs2"+form.job_id+form.job_title+form.min_salary+form.max_salary)
    }
  }

  edit(object:any){
    console.log("Edit jobs",object);
    
        
  }
  remove(elemet:any){
    console.log("Remove jobs",elemet);
  }

}


