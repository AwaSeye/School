import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../_services/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  url = "etudiant";
  constructor(private formBuilder: FormBuilder,
              private  apiService: ApiService,
              private router: Router ) { }

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
    if (this.inscriptionForm.invalid){
      return;
    }
    this.apiService.saveData(this.url, this.inscriptionForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('connexion');
        },
        error => {
          console.log(error)
        }
      )

  }

}
