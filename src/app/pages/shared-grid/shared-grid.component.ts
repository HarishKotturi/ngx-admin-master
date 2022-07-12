import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-shared-grid',
  templateUrl: './shared-grid.component.html',
  styleUrls: ['./shared-grid.component.scss']
})
export class SharedGridComponent implements OnInit {

  body:any[] =[];

  constructor() { }

  ngOnInit(): void {
    this.body = [
      {
        "code": "f230fh0g3",
        "name": "Bamboo Watch",
        "category": "Accessories",
        "quantity": 24
      },
      {
        "code": "nvklal433",
        "name": "Black Watch",
        "category": "Accessories",
        "quantity": 61
      },
      {
        "code": "zz21cz3c1",
        "name": "asdfasdf",
        "category": "Accessories",
        "quantity": 24
      },
      {
        "code": "zz21cz3c1asfd",
        "name": "asdfewfsdcxv",
        "category": "Accessories",
        "quantity": 24
      }
    ]
  }

}
