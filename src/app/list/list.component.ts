import {Component, OnInit, ViewChild} from '@angular/core';
import {ChannelService} from "../services/channel.service";
import {Observable} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any;
  rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(public chService: ChannelService) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.rowData$ = this.chService.products();
  }

  columnDefs: ColDef[] = [
    {field: 'name', checkboxSelection: true},
    {field: 'description', width: 250},
    {field: 'price'},
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    editable: true
  }

  clearSelection() {
    this.agGrid.api.deselectAll()
  }

  getProducts() {
    return this.chService.products().subscribe((product => {
      this.products = product;
    }));
  }

}
