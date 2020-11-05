import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ApiService} from "../../_services/api.service";

@Component({
  selector: 'app-user',
  templateUrl: './representant.component.html',
  styleUrls: ['./representant.component.css']
})
export class RepresentantComponent implements OnInit {
  displayedColumns: string[] = ['etudiant', 'date_rv', 'action'];
  source: MatTableDataSource<any>;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllData("representant/esp")
  }
}
