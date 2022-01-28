import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-deltecountry',
  templateUrl: './deltecountry.component.html',
  styleUrls: ['./deltecountry.component.css']
})
export class DeltecountryComponent implements OnInit {
  coid = new FormControl({disable:true});
  cona = new FormControl({disable:true});
  core = new FormControl({disable:true});
  lista_region :any[]=[];

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<DeltecountryComponent>
  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.countryForm.setValue(inData.object);
      this.coid.disable();
      this.cona.disable();
      this.core.disable();
    }
    dialogoRef.disableClose=true
   }

  ngOnInit(): void {
    this.listRegion();
  }
  countryForm = this.formBuilder.group({
    country_id:['',Validators.required],
    country_name:['',Validators.required],
    region_id:['',Validators.required]
  });
  deleteCountry(form:any): void{
    console.log("datos a eliminar"+form);
      this.countryService.deleteCo(form).subscribe((data)=>{}); 
      this.dialogoRef.close();   
  } 
  listRegion(){
    this.countryService.listRegion().subscribe((result)=>{
      this.lista_region=result;
    })
  }
  onNoClick(): void {
    this.dialogoRef.close();
  }

}
