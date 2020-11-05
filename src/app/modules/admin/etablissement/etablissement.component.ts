import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalDialogComponent} from '../modal/modal-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../_services/api.service';
import {Etablissement} from '../../../_modele/etablissement';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.scss']
})
export class EtablissementComponent implements OnInit {
  displayedColumns: string[] = ['nomEtablissement', 'filiere', 'contact', 'adresse', 'action'];
  source: MatTableDataSource<any>;
  dialogValue: Etablissement;
  helf = this;
  data = [
    {nomEtablissement: 'ESP', filiere: 'DORMIR', contact: '33-854-58-52', adresse: 'DAKAR'},
    {nomEtablissement: 'EPT', filiere: 'REVEILLE', contact: '33-854-58-52', adresse: 'DAKAR'},
    {nomEtablissement: 'IAM', filiere: 'SOMNOLE', contact: '33-854-58-52', adresse: 'DAKAR'},

  ];
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.source = new MatTableDataSource<any>([]);
    this.apiService.getAllData('etablissement')
      .subscribe(
        response => {
          this.source = new MatTableDataSource<any>(response)
        },
        error1 => {
          console.log(error1);
        }
      );
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.source.filter = filterValue.trim().toLowerCase();

    if (this.source.paginator) {
      this.source.paginator.firstPage();
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new Etablissement();

    const dialogRef = this.dialog.open( ModalDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
     if (result === undefined){
       return;
     }
      console.log('The dialog was closed', result);

      this.dialogValue = result;
      this.apiService.saveData('etablissement', this.dialogValue)
        .subscribe(
          response => {
            const copy = this.source.data;
            copy.push(response);
            this.source = new MatTableDataSource<any>(copy)
          },
          error1 => {
            console.log(error1);
          }
        )

    });
  }
  openDialogModif(etablissement: Etablissement) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = etablissement;

    const dialogRef = this.dialog.open( ModalDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
      this.apiService.updateData('etablissement', result.data)
        .subscribe(
          response => {
            console.log(response)
          },
          error1 => {
            console.log(error1)
          }
        )

    });
  }
}
