import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormControlName, FormGroup } from '@angular/forms';
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
   * variables de control del formulario
   */
  job_id = new FormControl('');
  job_title = new FormControl('');
  min_salary = new FormControl('');
  max_salary = new FormControl('');

  
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  jobForm = this.formBuilder.group({
    //job_id:[''],
    //job_title:[''],
    //min_salary:[''],
    //max_salary:['']
    job_id:'',
    job_title: '',
    min_salary: '',
    max_salary: ''
  });

  onJobs(form:any): void{
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

  listarJobs():void{
    this.serviceJob.listJobs().subscribe(lisJobs => this.dataSource.data = lisJobs);
    //this.serviceJob.listJobs().subscribe(res => console.log('POSTS',res));//prueba por consola
  }

  edit(object:any){
    console.log("Edit jobs",object);
    console.log("Edit jobs2",this.jobForm);
    console.log("Edit jobs3",this.job_id);
    this.job_id.setValue(object.job_id);
    this.job_title.setValue(object.job_title);
    this.min_salary.setValue(object.min_salary);
    this.max_salary.setValue(object.max_salary);

    
        
  }
  remove(elemet:any):void{
    console.log("Remove jobs",elemet);
  }

}



