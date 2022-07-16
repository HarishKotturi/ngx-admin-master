import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
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
    { field: "industryName", header: "Industry Name" }
  ];
  @ViewChild('sharedTable') sharedTable: SharedGridComponent;
  bodyData: any = [];

  constructor(private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  saveIndustryName() {
    if (this.industryName !== "" && Object.keys(this.selectedRow).length === 0) {
      this.bodyData.push({
        industryName: this.industryName
      });
    } else {
      //this.bodyData[this.selectedRow.index]['industryName'] = this.industryName;
      this.selectedRow.data['industryName'] = this.industryName;
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

  deleteSelectedIndustry(event) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the selected Industry - ${event.industryName}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Actual Service Implementation - Pending
        this.bodyData = this.bodyData.filter(val => val.industryName !== event.industryName);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Industry Deleted', life: 3000 });
      }
    });
  }

}

