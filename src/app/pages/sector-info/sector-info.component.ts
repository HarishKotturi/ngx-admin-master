import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedGridComponent } from '../shared-grid/shared-grid.component';

@Component({
  selector: 'ngx-sector-info',
  templateUrl: './sector-info.component.html',
  styleUrls: ['./sector-info.component.scss']
})
export class SectorInfoComponent implements OnInit {

  industriesList: any[] = [
    {
      id: 0,
      name: "Select Industry"
    },
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
  sectorName: string = "";
  sectorDesc: string = "";

  selectedRow: any = {};
  columns: any = [
    { field: "industryId", header: "Industry Id", display: "hide" },
    { field: "industryName", header: "Industry Name" },
    { field: "sectorName", header: "Sector Name" },
    { field: "sectorDesc", header: "sector Desc", display: "hide" }
  ];
  @ViewChild('sharedTable') sharedTable: SharedGridComponent;
  bodyData: any = [];

  constructor(private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  getSelectedRow(event) {
    if (event.data != null) {
      this.selectedRow = event;
      this.selectedIndustry = this.industriesList.find(x => x.id === this.selectedRow.data.industryId);
      this.sectorName = this.selectedRow.data.sectorName;
      this.sectorDesc = this.selectedRow.data.sectorDesc;
    }
  }
  getUnselectedRow(event) {
    this.clearFormValues();
  }
  deleteSelectedIndustry(event) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the selected Industry - ${event.industryName} and Sector - ${event.sectorName}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Actual Service Implementation - Pending
        this.bodyData = this.bodyData.filter(val => val.industryId !== event.industryId && val.sectorName !== event.sectorName);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Industry Deleted', life: 3000 });
        this.clearFormValues();
      }
    });
  }

  mapSectorwithIndustry() {
    if (Object.keys(this.selectedRow).length === 0) {
      this.bodyData.push({
        "industryId": this.selectedIndustry['id'],
        "industryName": this.selectedIndustry['name'],
        "sectorName": this.sectorName,
        "sectorDesc": this.sectorDesc
      });
    } else {
      this.selectedRow.data['industryId'] = this.selectedIndustry['id'];
      this.selectedRow.data['industryName'] = this.selectedIndustry['name'];
      this.selectedRow.data['sectorName'] = this.sectorName;
      this.selectedRow.data['sectorDesc'] = this.sectorDesc;
    }
    this.sharedTable.selection = [];
    this.clearFormValues();
  }

  clearFormValues() {
    this.selectedIndustry = this.industriesList.find(x => x.id === 0);
    this.sectorName = "";
    this.sectorDesc = "";
  }

}
