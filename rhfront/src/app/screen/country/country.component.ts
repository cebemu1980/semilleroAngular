import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CountryService } from '../../services/country/country.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { CountryInterface } from 'src/app/models/country.interface';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['job_id', 'job_title', 'min_salary', 'max_salary', 'actions'];
  dataSource = new MatTableDataSource(); 
  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private countryService: CountryService,
    public dialogJob: MatDialog
  ) { }
 
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarJobs():void{}
  openAddJob(){
    const dialogRest = this.dialogJob.open(EditCountryComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditJob(object:CountryInterface){}
  removeJob(object:CountryInterface):void{}
}

