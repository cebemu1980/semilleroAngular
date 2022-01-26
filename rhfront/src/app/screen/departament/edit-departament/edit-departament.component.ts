import { Component, Inject, OnInit } from '@angular/core';
import { DepartamentService } from '../../../services/departament/departament.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-departament',
  templateUrl: './edit-departament.component.html',
  styleUrls: ['./edit-departament.component.css']
})
export class EditDepartamentComponent implements OnInit {

  constructor(
    private departamentService: DepartamentService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<EditDepartamentComponent>
  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.departamentForm.setValue(inData.object);
    }
    dialogoRef.disableClose=true
   }

  ngOnInit(): void {
  }
  departamentForm = this.formBuilder.group({
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
