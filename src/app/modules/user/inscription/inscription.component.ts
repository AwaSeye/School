import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
      niveauEtude: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username:['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  onSubmit(){
    if (this.inscriptionForm.invalid)
  }

}
