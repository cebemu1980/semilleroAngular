import { Component, Inject, OnInit } from '@angular/core';
import { RegionService } from '../../../services/region/region.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editregion',
  templateUrl: './editregion.component.html',
  styleUrls: ['./editregion.component.css']
})
export class EditregionComponent implements OnInit {

  constructor(
    private regionService:RegionService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<EditregionComponent>
  ) { 
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.regionForm.setValue(inData.object);
    }
    dialogoRef.disableClose=true
  }

  ngOnInit(): void {
  }
  regionForm = this.formBuilder.group({
    job_id:['',Validators.required],
    job_title:['',Validators.required],
    min_salary:['',Validators.required],
    max_salary:['',Validators.required]
  });
  onJobs(form:any): void{
    if(
      form.job_id === "" || form.job_title === "" || form.min_salary === "" || form.max_salary === ""
    ){
      alert("Los campos son obligatorios");
    }else{
      //this.serviceJob.createOrUpdate(form).subscribe((data)=>{}); 
      this.dialogoRef.close();   
    }    
  } 
  onNoClick(): void {
    this.dialogoRef.close();
  }

}
