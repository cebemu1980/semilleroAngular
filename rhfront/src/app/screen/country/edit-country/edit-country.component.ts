import { Component, Inject, OnInit } from '@angular/core';
import { CountryService } from '../../../services/country/country.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {
  coid = new FormControl({disable:true});
  lista_region :any[]=[];
  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<EditCountryComponent>
  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.countryForm.setValue(inData.object);
      this.coid.disable();
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
  onCountry(form:any): void{
    if(
      form.country_id === "" || form.country_name === "" || form.region_id === ""
    ){
      alert("Los campos son obligatorios");
    }else{
      this.countryService.createOrUpdate(form).subscribe((data)=>{}); 
      this.dialogoRef.close();   
    }    
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
