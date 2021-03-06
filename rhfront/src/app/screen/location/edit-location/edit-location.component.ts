import { Component, Inject, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location/location.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  lista_country :any[]=[];
  loid = new FormControl({disable:true});

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<EditLocationComponent>
  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.locationForm.setValue(inData.object);
      this.loid.disable();
    }
    dialogoRef.disableClose=true
   }

  ngOnInit(): void {
    this.listCountry();
  }
  locationForm = this.formBuilder.group({
    location_id:['',Validators.required],
    street_address:['',Validators.required],
    postal_code:['',Validators.required],
    city:['',Validators.required],
    state_province:['',Validators.required],
    country_id:['',Validators.required]
  });
  onLocation(form:any): void{
    if(
      form.location_id === "" || form.street_address === "" || form.postal_code === "" || form.city === "" || form.state_province === "" || form.country_id === ""
    ){
      alert("Los campos son obligatorios");
    }else{
      this.locationService.createOrUpdate(form).subscribe((data)=>{})
      this.dialogoRef.close();   
    }    
  } 
  listCountry(){
    this.locationService.listCou().subscribe((result)=>{
      this.lista_country=result
    })
  }
  onNoClick(): void {
    this.dialogoRef.close();
  }

}
