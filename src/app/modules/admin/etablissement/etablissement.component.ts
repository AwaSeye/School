import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalDialogComponent} from '../modal/modal-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../_services/api.service';
import {Etablissement} from '../../../_modele/etablissement';

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
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.source = new MatTableDataSource<any>(this.data)
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open( ModalDialogComponent, dialogConfig);
  }
  onof(){
    console.log("sssssssssssssssssss")
  }
}
