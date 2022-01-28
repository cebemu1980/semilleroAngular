import { Component, Inject, OnInit } from '@angular/core';
import { RegionService } from '../../../services/region/region.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteregion',
  templateUrl: './deleteregion.component.html',
  styleUrls: ['./deleteregion.component.css']
})
export class DeleteregionComponent implements OnInit {
  reid = new FormControl({disable:true});
  rename = new FormControl({disable:true});

  constructor(
    private regionService:RegionService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public inData: any,
    private dialogoRef: MatDialogRef<DeleteregionComponent>
  ) {
    console.log("tomo los datos de la tabla",inData);
    if(inData != null){
      this.regionForm.setValue(inData.object);
    }
    dialogoRef.disableClose=true
   }

  ngOnInit(): void {
    this.reid.disable();
    this.rename.disable();
  }
  regionForm = this.formBuilder.group({
    region_id:['',Validators.required],
    region_name:['',Validators.required]
  });
  onDelete(form:any){
    this.regionService.deleteById(form).subscribe((data)=>{})
    this.dialogoRef.close();
  }
  onNoClick(): void {
    this.dialogoRef.close();
  }

}
