import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { LocationService } from '../../services/location/location.service';
import { MatDialog } from '@angular/material/dialog';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { LocationInterface } from 'src/app/models/location.interface';
import { DeletelocationComponent } from './deletelocation/deletelocation.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  displayedColumns: string[] = ['location_id', 'street_address', 'postal_code', 'city','state_province','country_id', 'actions'];
  dataSource = new MatTableDataSource(); 
  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private locationService: LocationService,
    public dialogJob: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarLocation();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarLocation():void{
    this.locationService.listLoc().subscribe(list=>this.dataSource.data=list);
    console.log("lista de location :",this.dataSource);
  }
  openAddLocation(){
    const dialogRest = this.dialogJob.open(EditLocationComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditLocation(object:LocationInterface){
    const dialogRest = this.dialogJob.open(EditLocationComponent, {
      data: {object}
    });  
     dialogRest.afterClosed().subscribe(result=>{});
  }
  removeLocation(object:LocationInterface):void{
    const dialogRest = this.dialogJob.open(DeletelocationComponent, {
      data: {object}
    });  
     dialogRest.afterClosed().subscribe(result=>{});
  }

}
