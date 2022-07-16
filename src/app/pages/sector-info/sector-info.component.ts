import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedGridComponent } from '../shared-grid/shared-grid.component';

@Component({
  selector: 'ngx-sector-info',
  templateUrl: './sector-info.component.html',
  styleUrls: ['./sector-info.component.scss']
})
export class SectorInfoComponent implements OnInit {

  industriesList: any[] = [
    {
      id: 1,
      name: "Consumer Goods"
    },
    {
      id: 2,
      name: "Extractives & Minerals Processing"
    },
    {
      id: 3,
      name: "Financials"
    },
    {
      id: 4,
      name: "Food & Beverage"
    },
    {
      id: 5,
      name: "Health Care"
    }
  ];
  selectedIndustry: any = {};
  sectorName:string = "";

  selectedRow: any = {};
  columns: any = [
    { field: "industryName", header: "Industry Name" },
    { field: "sectorName", header: "Sector Name" }
  ];
  @ViewChild('sharedTable') sharedTable: SharedGridComponent;
  bodyData: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedRow(event){

  }
  getUnselectedRow(event){

  }
  deleteSelectedIndustry(event){

  }

}
