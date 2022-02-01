import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationService } from '../../../services/location/location.service';

@Component({
  selector: 'app-deletelocation',
  templateUrl: './deletelocation.component.html',
  styleUrls: ['./deletelocation.component.css']
})
export class DeletelocationComponent implements OnInit {
  loid = new FormControl({disable:true});
  lostreet = new FormControl({disable:true});
  lopostal = new FormControl({disable:true});
  locity = new FormControl({disable:true});
  lostate = new FormControl({disable:true});
  locountry = new FormControl({disable:true});
  lista_country :any[]=[];

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<DeletelocationComponent>
  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.locationForm.setValue(inData.object);
      this.loid.disable();
      this.lostreet.disable();
      this.lopostal.disable();
      this.locity.disable();
      this.lostate.disable();
      this.locountry.disable();
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
  listCountry(){
    this.locationService.listCou().subscribe((result)=>{
      this.lista_country=result
    })
  }
  deleteLocation(form:any): void{
    console.log("datos a eliminar"+form);
      this.locationService.deleteLoc(form).subscribe((data)=>{});
      this.dialogoRef.close();   
  } 
  onNoClick(): void {
    this.dialogoRef.close();
  }

}
