import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { RegionService } from 'src/app/services/region/region.service';
import { MatDialog } from '@angular/material/dialog';
import { EditregionComponent } from './editregion/editregion.component';
import { RegionInterface } from '../../models/region.interface';
import { DeleteregionComponent } from './deleteregion/deleteregion.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['region_id', 'region_name', 'actions'];
   dataSource = new MatTableDataSource(); 
   @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private serviceRegion: RegionService,
    public dialogJob: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarRegion();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarRegion():void{
    this.serviceRegion.listRegion().subscribe(lista => this.dataSource.data = lista);
  }
  openAddRegion(){
    const dialogRest = this.dialogJob.open(EditregionComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditRegion(object:RegionInterface){
    const dialogRest = this.dialogJob.open(EditregionComponent, {
      data: {object}
    });  
     dialogRest.afterClosed().subscribe(result=>{});
  }
  removeRegion(object:RegionInterface):void{
    const dialogRest = this.dialogJob.open(DeleteregionComponent, {
      data: {object}
    });  
     dialogRest.afterClosed().subscribe(result=>{});
  }

}
