import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CountryService } from '../../services/country/country.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { CountryInterface } from 'src/app/models/country.interface';
import { DeltecountryComponent } from './deltecountry/deltecountry.component';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['country_id', 'country_name', 'region_id', 'actions'];
  dataSource = new MatTableDataSource(); 
  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(
    private countryService: CountryService,
    public dialogJob: MatDialog
  ) { }
 
  ngOnInit(): void {
    this.listarCountry();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  listarCountry():void{
    this.countryService.listCo().subscribe(list=> this.dataSource.data = list)
  }
  openAddCountry(){
    const dialogRest = this.dialogJob.open(EditCountryComponent);
    dialogRest.afterClosed().subscribe(result=>{
      
    });
  }
  openEditCountry(object:CountryInterface){
    const dialogRest = this.dialogJob.open(EditCountryComponent, {
      data: {object}
    });  
     dialogRest.afterClosed().subscribe(result=>{});
  }
  removeCountry(object:CountryInterface):void{
    const dialogRest = this.dialogJob.open(DeltecountryComponent, {
      data: {object}
    });  
     dialogRest.afterClosed().subscribe(result=>{});
  }
}

