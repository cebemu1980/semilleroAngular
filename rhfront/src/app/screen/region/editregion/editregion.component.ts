import { Component, Inject, OnInit } from '@angular/core';
import { RegionService } from '../../../services/region/region.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editregion',
  templateUrl: './editregion.component.html',
  styleUrls: ['./editregion.component.css']
})
export class EditregionComponent implements OnInit {
  reid = new FormControl({disable:true});

  constructor(
    private regionService:RegionService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<EditregionComponent>
  ) { 
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.regionForm.setValue(inData.object);
      this.reid.disable();
    }
    dialogoRef.disableClose=true
  }

  ngOnInit(): void {
    
  }
  regionForm = this.formBuilder.group({
    region_id:['',Validators.required],
    region_name:['',Validators.required]
  });
  onRegion(form:any): void{
    if(
      form.region_id === "" || form.region_name === "" 
    ){
      alert("Los campos son obligatorios");
    }else{
      //this.serviceJob.createOrUpdate(form).subscribe((data)=>{}); 
      this.regionService.createOrUpdate(form).subscribe((data)=>{})
      this.dialogoRef.close();   
    }    
  } 
  onNoClick(): void {
    this.dialogoRef.close();
  }

}
