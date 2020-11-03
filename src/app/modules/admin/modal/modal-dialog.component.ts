import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Etudiant} from '../../../_modele/etudiant';
import {Filiere} from '../../../_modele/filiere';
import {ApiService} from '../../../_services/api.service';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent implements OnInit{
  etablissementFormGroup: FormGroup;
  filiereFormGroup: FormGroup;
  url = "etatblissemnt";
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private apiService: ApiService
  ){
  }
  ngOnInit(): void {
    this.etablissementFormGroup = this.fb.group({
      nomEtablissement: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],
      contact: ['', Validators.required],
    });
    this.filiereFormGroup = this.fb.group({
      nomFiliere: [''],
      description: [''],
      montantMensuel: [''],
      cycle: [''],
      fraisInscription: [''],
    })
  }

  save() {
    this.dialogRef.close(this.etablissementFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

}
