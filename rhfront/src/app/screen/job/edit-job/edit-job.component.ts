import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { JobService } from '../../../services/job/job.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  constructor(
    private serviceJob:JobService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<EditJobComponent>,
    private changeDetecRef: ChangeDetectorRef

  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.jobForm.setValue(inData.object);

    }
    dialogoRef.disableClose=true 

   }

  ngOnInit(): void {
  }

  jobForm = this.formBuilder.group({
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
      this.serviceJob.createOrUpdate(form).subscribe((data)=>{}); 
      this.changeDetecRef.detectChanges();
      this.dialogoRef.close();   
    }    
  } 

  onNoClick(): void {
    this.dialogoRef.close();
  }

}
