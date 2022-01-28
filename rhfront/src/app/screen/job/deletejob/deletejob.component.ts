import { Component, Inject, OnInit } from '@angular/core';
import { JobService } from '../../../services/job/job.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletejob',
  templateUrl: './deletejob.component.html',
  styleUrls: ['./deletejob.component.css']
})
export class DeletejobComponent implements OnInit {
  joid = new FormControl({disable:true});
  joti = new FormControl({disable:true});
  jomin = new FormControl({disable:true});
  jomax = new FormControl({disable:true});

  constructor(
    private serviceJob:JobService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<DeletejobComponent>
  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.jobForm.setValue(inData.object);

    }
    dialogoRef.disableClose=true 
   }

  ngOnInit(): void {
    this.joid.disable();
    this.joti.disable();
    this.jomin.disable();
    this.jomax.disable();
  }
  jobForm = this.formBuilder.group({
    job_id:['',Validators.required],
    job_title:['',Validators.required],
    min_salary:['',Validators.required],
    max_salary:['',Validators.required]
  });
  deleteJobs(form:any): void{
    this.serviceJob.deleteById(form).subscribe((data)=>{});
    this.dialogoRef.close();
  }
  onNoClick(): void {
    this.dialogoRef.close();
  }

}
