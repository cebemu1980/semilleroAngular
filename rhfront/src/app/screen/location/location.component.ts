import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { LocationService } from '../../services/location/location.service';
import { MatDialog } from '@angular/material/dialog';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { LocationInterface } from 'src/app/models/location.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  displayedColumns: string[] = ['job_id', 'job_title', 'min_salary', 'max_salary', 'actions'];
  dataSource = new MatTableDataSource(); 
  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private locationService: LocationService,
    public dialogJob: MatDialog
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarJobs():void{}
  openAddJob(){
    const dialogRest = this.dialogJob.open(EditLocationComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditJob(object:LocationInterface){}
  removeJob(object:LocationInterface):void{}

}
