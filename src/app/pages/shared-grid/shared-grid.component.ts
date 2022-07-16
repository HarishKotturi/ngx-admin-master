import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-shared-grid',
  templateUrl: './shared-grid.component.html',
  styleUrls: ['./shared-grid.component.scss']
})
export class SharedGridComponent implements OnInit {

  body: any[] = [];
  @Input() multiSelect: string = "single";
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() rows: number = 10;
  @Input() selection: any[];
  @Input() pageSizeOptions = [10, 20, 30];
  @Input() isPagenator: boolean = false;

  @Input() isFilterReq:boolean = false; // Pass true to enable filter
  @Input() globalFilters:any[] = []; // pass Filter fields -- isFilterReq and globalFilters are required
  @Input() isInlineDeleteReq:boolean = false;


  @Output() emitSelectedRow = new EventEmitter<any>();
  @Output() emitUnSelectedRow = new EventEmitter<any>();
  @Output() emitDeleteRowEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    // this.columns = [
    //   { field: "code", header: "Code" },
    //   { field: "name", header: "Name" },
    //   { field: "category", header: "Category" },
    //   { field: "quantity", header: "Quantity" }
    // ]
    // this.data = [
    //   {
    //     "code": "f230fh0g3",
    //     "name": "Bamboo Watch",
    //     "category": "Accessories",
    //     "quantity": 24
    //   },
    //   {
    //     "code": "nvklal433",
    //     "name": "Black Watch",
    //     "category": "Accessories",
    //     "quantity": 61
    //   },
    //   {
    //     "code": "zz21cz3c1",
    //     "name": "asdfasdf",
    //     "category": "Accessories",
    //     "quantity": 24
    //   },
    //   {
    //     "code": "zz21cz3c1asfd",
    //     "name": "asdfewfsdcxv",
    //     "category": "Accessories",
    //     "quantity": 24
    //   }
    // ]
  }

  onRowSelect(selectedRow) {
    this.emitSelectedRow.emit(selectedRow);
  }
  onRowUnselect(unselectedRow) {
    this.emitUnSelectedRow.emit(unselectedRow);
  }

  deleteRowData(event) {
    this.emitDeleteRowEvent.emit(event);
  }
}
