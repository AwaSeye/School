import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Filiere} from '../../../_modele/filiere';
import {ApiService} from '../../../_services/api.service';
import {error} from 'selenium-webdriver';
import {Etablissement} from "../../../_modele/etablissement";

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent implements OnInit{
  etablissementFormGroup: FormGroup;
  filiereFormGroup: FormGroup;
  formValue: Etablissement;
  filieres: Filiere[] = [];
  url = 'etatblissemnt';
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ){
    this.formValue = data;
  }
  ngOnInit(): void {
    this.etablissementFormGroup = this.fb.group({
      nomEtablissement: [this.formValue.nomEtablissement, Validators.required],
      adresse: [this.formValue.adresse, Validators.required],
      description: [this.formValue.description, Validators.required],
      contact: [this.formValue.contact, Validators.required],
    });
    this.filiereFormGroup = this.fb.group({
      nomFiliere: [''],
      description: [''],
      montantMensuel: [''],
      cycle: [''],
      fraisInscription: [''],
    });
    if (this.formValue.filieres){
      this.filieres = this.formValue.filieres;
    }

  }

  addFilier(){
    console.log("Oumou boule dem");
    if (this.filiereFormGroup.invalid){
      return;
    }
    this.filieres.push(this.filiereFormGroup.value);
    this.filiereFormGroup.reset();
    console.log(this.filieres)

  }

  onDelete(value: any){
    this.filieres = this.filieres.filter(item => item !== value)
  }

  save() {

    this.etablissementFormGroup.value.filieres = this.filieres;
    this.dialogRef.close(this.etablissementFormGroup.value);
    // this.apiService.saveData('etablissement', this.etablissementFormGroup.value)
    //   .subscribe(
    //     response => {
    //
    //     },
    //     error1 => {
    //       console.log(error)
    //     }
    //   )
  }

  close() {
    this.dialogRef.close();
  }

}
