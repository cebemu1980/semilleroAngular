import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { RegionService } from 'src/app/services/region/region.service';
import { MatDialog } from '@angular/material/dialog';
import { EditregionComponent } from './editregion/editregion.component';
import { RegionInterface } from '../../models/region.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['job_id', 'job_title', 'min_salary', 'max_salary', 'actions'];
   dataSource = new MatTableDataSource(); 
   @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private serviceRegion: RegionService,
    public dialogJob: MatDialog
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarJobs():void{}
  openAddJob(){
    const dialogRest = this.dialogJob.open(EditregionComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditJob(object:RegionInterface){}
  removeJob(object:RegionInterface):void{}

}
