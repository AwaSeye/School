import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {
  displayedColumns: string[] = ['nomEtablissement', 'filiere', 'contact', 'adresse', 'action'];
  source: MatTableDataSource<any>;
  data = [
    {nomEtablissement: 'ESP', filiere: 'DORMIR', contact: '33-854-58-52', adresse: 'DAKAR'},
    {nomEtablissement: 'EPT', filiere: 'REVEILLE', contact: '33-854-58-52', adresse: 'DAKAR'},
    {nomEtablissement: 'IAM', filiere: 'SOMNOLE', contact: '33-854-58-52', adresse: 'DAKAR'},

  ];
  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

}
