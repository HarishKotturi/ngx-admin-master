import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedGridComponent } from '../shared-grid/shared-grid.component';

@Component({
  selector: 'ngx-industry-info',
  templateUrl: './industry-info.component.html',
  styleUrls: ['./industry-info.component.scss']
})
export class IndustryInfoComponent implements OnInit {

  industryName: string = "";
  selectedRow: any = {};
  columns: any = [
    { field: "id", header: "Id" },
    { field: "industryName", header: "Industry Name" }
  ];
  @ViewChild('sharedTable') sharedTable: SharedGridComponent;
  bodyData: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveIndustryName() {
    if (this.industryName !== "" && Object.keys(this.selectedRow).length === 0) {
      this.bodyData.push({
        id: this.bodyData.length + 1,
        industryName: this.industryName
      });
    } else {
      this.bodyData[this.selectedRow.index]['industryName'] = this.industryName;
    }
    this.industryName = "";
    this.sharedTable.selection = [];
  }
  getSelectedRow(event) {
    if (event.data != null) {
      this.selectedRow = event;
      this.industryName = event.data['industryName'];
    }
  }
  getUnselectedRow(event) {
    console.log("un selected row : ", event);
  }

}

